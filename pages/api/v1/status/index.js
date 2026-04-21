import database from "infra/database.js";

async function status(request, response) {
  const databaseName = process.env.POSTGRES_DB;
  const databaseVersion = await database.query("SHOW server_version;");
  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseUsedConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion.rows[0].server_version,
        max_connections: parseInt(
          databaseMaxConnections.rows[0].max_connections,
        ),
        used_connections: databaseUsedConnections.rows[0].count,
      },
    },
  });
}

export default status;

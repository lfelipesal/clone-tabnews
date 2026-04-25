const { exec } = require("node:child_process");

function checkPostgres(pontosNoFinal = 0) {
  exec("docker exec postgres_dev pg_isready --host localhost", handleReturn);
  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      if (pontosNoFinal >= 5) {
        process.stdout.write("\b \b\b \b\b \b\b \b\b \b");
        checkPostgres(0);
        return;
      }
      process.stdout.write(".");
      checkPostgres(pontosNoFinal + 1);
      return;
    }
    console.log("\n🟢 Postgres está aceitando conexões!");
  }
}

process.stdout.write("\n\n🔴 Aguardando o Postgres aceitar conexões");
checkPostgres();

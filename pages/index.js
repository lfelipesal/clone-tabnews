import Image from "next/image";

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Website under construction</h1>

        <p style={styles.subtitle}>
          Callimora is preparing something special for you! 💫
        </p>

        <Image
          src="/artist.gif"
          alt="Ilustração animada de construção do site"
          width={480}
          height={360}
          style={styles.gif}
          priority
        />
      </div>

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          background: #fbfced;
        }
        * {
          box-sizing: border-box;
        }
        img {
          border: 0;
        }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fbfced",
    gap: 20,
    textAlign: "center",
    fontFamily: "'Patrick Hand', cursive",
    padding: 20,
  },
  title: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
  },
  gif: {
    maxWidth: "300px",
    width: "80%",
    height: "auto",
  },
};

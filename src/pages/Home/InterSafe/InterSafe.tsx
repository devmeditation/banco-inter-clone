import styles from "./interSafe.module.css";

export function InterSafe() {
  return (
    <section id="interSafe" className={styles.interSafe}>
      <div className={styles.interSafeImage}>
        <img src="/interSafe/inter-seguros-home-desktop.png" alt="" />
      </div>

      <div className={styles.interSafeGroup}>
        <h2>
          <span>Inter Seguros</span>O seguro ideal, pra você proteger o que
          realmente importa.
        </h2>

        <p>
          Uma plataforma com opções de seguros para o seu momento, com várias
          modalidades, pra você, sua família e sua empresa.
        </p>

        <button>Conhecer a Inter Seguros</button>
      </div>
    </section>
  );
}

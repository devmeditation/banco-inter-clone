import styles from "./interABetterWorld.module.css";

export function InterABetterWorld() {
  return (
    <div className={styles.interABetterWorldContainerBG}>
      <section id="interABetterWorld" className={styles.interABetterWorld}>
        <div className={styles.interABetterWorldImage}>
          {/* <img className={styles.hiddenMobile} src="/aBetterWorld/a-better-world-desktop.png" alt="" /> */}
          <img
            className={styles.visibleMobile}
            src="/aBetterWorld/a-better-world-mobile.jpg"
            alt=""
          />
        </div>

        <div className={styles.interABetterWorldGroup}>
          <h2>
            {/* <span>O Seguro Pix tá ON!</span> */}
            Um mundo melhor no seu super app.
          </h2>
          <p>
            Chegou a seção Vida Sustentável. Nela você conta com organizações
            que te ajudam a descobrir a sua pegada de carbono, pode fazer
            doações, se inscrever para trabalho voluntário e muito mais.
          </p>

          <button>Quero conhecer</button>
        </div>
      </section>
    </div>
  );
}

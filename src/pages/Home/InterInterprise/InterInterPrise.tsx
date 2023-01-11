import styles from "./interInterPrise.module.css";

export function InterInterPrise() {
  return (
    <section id="interInterPrise" className={styles.interInterPrise}>
      <div className={styles.interInterPriseImage}>
        <img
          src="/interInterprise/banner-inter-enterprise-desktop.png"
          alt=""
        />
      </div>

      <div className={styles.interInterPriseGroup}>
        <h2>
          <span>Inter Empresas</span>A agilidade que seu negócio precisa.
        </h2>

        <p>
          Para você, empreendedor ou gestor que precisa de gestão simplificada
          do seu negócio.
        </p>

        <button>Conhecer a Conta Digital PJ</button>
        <button>Conhecer a Conta Digital MEI</button>
      </div>
    </section>
  );
}

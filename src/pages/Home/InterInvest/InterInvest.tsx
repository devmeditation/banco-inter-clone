import styles from "./interInvest.module.css";

export function InterInvest() {
  return (
    <section id="interInvest" className={styles.interInvest}>
      <div className={styles.interInvestImage}>
        <img src="/interInvest/inter-invest-home-desktop.png" alt="" />
      </div>

      <div className={styles.interInvestGroup}>
        <h2>
          <span>Inter Invest</span>
          Seu dinheiro, suas escolhas. Invista do seu jeito!
        </h2>

        <p>
          Praticidade e segurança. Conheça a Inter Invest, nossa plataforma
          unificada de investimentos.
        </p>

        <button>Começar a Investir</button>
      </div>
    </section>
  );
}

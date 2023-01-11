import styles from "./interBank.module.css";

export function InterBank() {
  return (
    <section id="interBank" className={styles.interBank}>
        <div className={styles.interBankImage}>
          <img src="/interBank/inter-bank-home-desktop.png" alt="" />
        </div>

        <div className={styles.interBankGroup}>
          <h2>
            <span>Inter Bank</span>
            Diferente, sem pegadinhas e sem tarifas: como você sempre quis.
          </h2>
          <p>
            Planeje e invista no futuro do seu filho com a <a>Conta Kids</a> ou
            abra uma <a>Conta Digital</a> 100% isenta de tarifas e com tudo que
            você precisa.
          </p>
        </div>
      </section>
  )
}
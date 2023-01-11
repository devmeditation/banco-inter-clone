import styles from "./interHomeBottom.module.css";

export function InterHomeBottom() {
  return (
    <section className={styles.interHomeBottom}>
      <img src="bg-section-beneficios-desktop-xl.png" alt="" />
      
      <div className={styles.interHomeBottomBoxOverlayer}>
        <div className={styles.interHomeBottomBoxText}>
          <p>
            Conta digital gratuita, shopping nacional e internacional,
            investimentos, seguros, e o que mais a sua vida precisar.
          </p>
        </div>
      </div>
    </section>
  );
}

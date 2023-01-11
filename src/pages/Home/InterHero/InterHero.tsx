import styles from "./interHero.module.css"

export function InterHero() {
  return (
    <section id="interHero" className={styles.interHero}>
        <div className={styles.interHeroImage}>
          <img src="/hero-seguro-pix-ta-on.png" alt="" />
        </div>

        <div className={styles.interHeroGroup}>
          <h2>
            <span>O Seguro Pix tá ON!</span>
            Seu dinheiro protegido em todas as transações
          </h2>
          <p>
            O escudo extra que você precisa em casos de transferências indevidas
            e até furto ou roubo de celular. Tá esperando o quê?
          </p>

          <button>Conferir Seguro Pix</button>
        </div>
      </section>
  )
}
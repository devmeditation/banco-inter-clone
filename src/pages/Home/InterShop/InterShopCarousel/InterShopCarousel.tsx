import styles from "./interShopCarousel.module.css"

export function InterShopCarousel() {

  return (
    <section>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <img src="/interShop/01_amazon.png" alt="Logo da Amazon" />
          
          <div>
            <h4>Amazon</h4>
            <p>4% cashback</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/interShop/02_americanas.png" alt="Logo da americanas" />

          <div>
            <h4>Americanas</h4>
            <p>4% cashback</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/interShop/03_magalu.png" alt="Logo da magalu" />
          
          <div>
            <h4>Magalu</h4>
            <p>3% cashback</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/interShop/04_aliexpress.png" alt="Logo do Ali Express" />
          
          <div>
            <h4>Ali Express</h4>
            <p>7% cashback</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/interShop/05_shoptime.png" alt="Logo do shoptime" />
          
          <div>
            <h4>Shoptime</h4>
            <p>4% cashback</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/interShop/06_nike.png" alt="Logo da Nike" />
          
          <div>
            <h4>Nike</h4>
            <p>7% cashback</p>
          </div>
        </div>
      </div>
    </section>
  )
}
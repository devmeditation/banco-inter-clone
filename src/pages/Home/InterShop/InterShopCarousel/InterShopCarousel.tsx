import styles from "./interShopCarousel.module.css";

const shopApi = [
  {
    title: "Amazon",
    cashback: "10% cashback",
    imageSRC: "/interShop/amazon.png",
  },
  {
    title: "Magalu",
    cashback: "5% cashback",
    imageSRC: "/interShop/magalu.png",
  },
  {
    title: "Nike",
    cashback: "7% cashback",
    imageSRC: "/interShop/nike.png",
  },
  {
    title: "Ali Express",
    cashback: "3.5% cashback",
    imageSRC: "/interShop/aliexpress.png",
  },
  {
    title: "Fast shop",
    cashback: "1.4% cashback",
    imageSRC: "/interShop/fastshop.png",
  },
  {
    title: "Drogaria São Paulo",
    cashback: "5% cashback",
    imageSRC: "/interShop/drogaria_sao_paulo.png",
  },
  {
    title: "Ponto",
    cashback: "2.1% cashback",
    imageSRC: "/interShop/ponto.png",
  },
  {
    title: "JustForYou",
    cashback: "18% cashback",
    imageSRC: "/interShop/just_for_you.png",
  },
  {
    title: "Girafa",
    cashback: "5.6% cashback",
    imageSRC: "/interShop/girafa.png",
  },
  {
    title: "Centauro",
    cashback: "5.6% cashback",
    imageSRC: "/interShop/centauro.png",
  },
  {
    title: "Sorte Online",
    cashback: "13% cashback",
    imageSRC: "/interShop/sorte_online.png",
  },
  {
    title: "Kabum",
    cashback: "1.61% cashback",
    imageSRC: "/interShop/kabum.png",
  },
];

export function InterShopCarousel() {
  return (
    <section>
      <div className={styles.cardGroup}>
        {shopApi.map((shop) => (
          <div key={shop.imageSRC} className={styles.card}>
            <img src={shop.imageSRC} alt="" />

            <div>
              <h4>{shop.title}</h4>
              <p>{shop.cashback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

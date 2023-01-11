
import styles from "./interShop.module.css";
import { CashbackSVG } from "./SVG/CashbackSVG";
import { CategorySVG } from "./SVG/CategorySVG";
import { OfferSVG } from "./SVG/OfferSVG";
import { StoreSVG } from "./SVG/StoreSVG";

export function InterShop() {
  return (
    <section id="interShop" className={styles.interShop}>
        <div className={styles.interShopImage}>
          <img src="/interShop/inter-shop-home.png" alt="" />
        </div>

        <div className={styles.interShopGroup}>
          <h2>
            <span>Inter Shop</span>
            No Inter todo mundo ganha cashback
          </h2>
          <p>
            Tudo o que você procura em um só lugar. Aqui você ganha o cashback,
            <a> direto na sua conta, seja ela Inter ou não. </a> É fácil,
            rápido, e você sai ganhando sempre!
          </p>

          <ul>
            <li>
              <CashbackSVG /> O melhor e mais rápido cashback do país
            </li>
            <li>
              <StoreSVG /> Mais de 430 lojas
            </li>
            <li>
              <CategorySVG /> Dezenas de categorias
            </li>
            <li>
              <OfferSVG /> Ofertas cumulativas com cashback
            </li>
          </ul>

          <button>Ganhar Cashback</button>
        </div>
      </section>
  )
}
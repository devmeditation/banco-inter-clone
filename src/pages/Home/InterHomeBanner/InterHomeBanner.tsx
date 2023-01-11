import { HiArrowSmRight } from "react-icons/hi";
import styles from "./interHomeBanner.module.css";

export function InterHomeBanner() {
  return (
    <section className={styles.interHomeBanner}>
      <h2>O Inter já devolveu tudo isso de cashback:</h2>
      <span>R$ <strong>663.357.067,47</strong></span>

      <p>Quer ganhar cashback também? Clique abaixo e saiba como:</p>

      <button><strong>Como ganhar cashback</strong> <HiArrowSmRight size={28} /> </button>
    </section>
  )
}
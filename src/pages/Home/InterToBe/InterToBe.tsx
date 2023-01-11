
import styles from "./interToBe.module.css";
import { ArrowLeftSVG } from "./SVG/ArrowLeftSVG";
import { ArrowRightSVG } from "./SVG/ArrowRightSVG";
import { GiftCard } from "./SVG/GiftCard";
import { InterCellSVG } from "./SVG/InterCellSVG";
import { PixSVG } from "./SVG/PixSVG";
import { ViagensSVG } from "./SVG/ViagensSVG";

export function InterToBe() {
  return (
    <section className={styles.interToBe}>
        <div className={styles.interToBeGroup}>
          <div className={styles.interToBeText}>
            <h2>
              Você muda para o Super App do Inter e para de mudar de aplicativo.
            </h2>

            <p>
              Quem tem conta no Inter tem soluções completas para todos os
              momentos.
            </p>
          </div>

          <div className={styles.interToBeCards}>
            <div className={styles.card}>
              <PixSVG />
              <p>Pix</p>
            </div>
            <div className={styles.card}>
              <InterCellSVG />
              <p>Inter Cel</p>
            </div>
            <div className={styles.card}>
              <ViagensSVG />
              <p>Viagens</p>
            </div>
            <div className={styles.card}>
              <GiftCard />
              <p>Gift Card</p>
            </div>
          </div>
        </div>

        <div className={styles.interToBeControls}>
          <div className={styles.cardControls}>
            <div className={styles.cardButton}>
              <button>Quero ser Inter</button>
            </div>

            <div className={styles.arrowDot}>
              <ArrowLeftSVG />
              <div className={styles.dot}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ArrowRightSVG />
            </div>
          </div>
        </div>
      </section>
  )
}
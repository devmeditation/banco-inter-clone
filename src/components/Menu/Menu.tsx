import { BiSearch } from "react-icons/bi";

import styles from "./menu.module.css";
import { BrasilSVG } from "./SVG/BrasilSVG";
import { InterLogoSVG } from "./SVG/InterLogoSVG";
import { NasdaqListedSVG } from "./SVG/NasdaqListedSVG";
import { UsaSVG } from "./SVG/UsaSVG";

export function Menu() {
  return (
    <section className={styles.menu}>
      <div className={styles.menuHeader}>
        <div className={styles.menuHeaderLogo}>
          <InterLogoSVG />
          <NasdaqListedSVG />
        </div>     

        <div className={styles.menuHeaderSearch}>
          <BiSearch />

          <span>
            <BrasilSVG />
            <UsaSVG />
          </span>
        </div>
      </div>
      {/* <div className={styles.menuList}>
        <span>O Inter</span>
        <span>Para você</span>
        <span>Empresa</span>
        <span>Conteúdos</span>
        <span>Portal RI</span>
      </div> */}
    </section>
  );
}

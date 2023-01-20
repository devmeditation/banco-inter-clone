
import styles from "./home.module.css";

import { InterToBe } from "./InterToBe/InterToBe";
import { InterBank } from "./InterBank/InterBank";
import { InterShop } from "./InterShop/InterShop";
import { InterInvest } from "./InterInvest/InterInvest";
import { InterInterPrise } from "./InterInterprise/InterInterPrise";
import { InterSafe } from "./InterSafe/InterSafe";
import { InterLoansAndFinancing } from "./InterLoansAndFinancing/InterLoansAndFinancing";
import { InterHomeBottom } from "./InterHomeBottom/InterHomeBottom.module";
import { InterHomeBanner } from "./InterHomeBanner/InterHomeBanner";
import { InterABetterWorld } from "./ABetterWorld/ABetterWorld";

export function Home() {
  // const [perc, setPerc] = useState(0)

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setPerc((state) => state + 1)
  //     if(perc < 100) {
  //       console.log(perc);
  //     } else { 
  //        return 
  //     }
  //     console.log("LILI: " + perc);
            
  //   }, 100)
  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [perc])
  return (
    <main className={styles.home}>

      <InterABetterWorld />      
     
      <InterToBe />

      <InterBank />

      <InterShop />
      
      <InterInvest />

      <InterInterPrise />

      <InterSafe />

      <InterLoansAndFinancing />

      <InterHomeBottom />

      <InterHomeBanner />
      
    </main>
  );
}

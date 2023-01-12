import styles from "./carousel.module.css";

export function Carousel() {
  return (
    <section className={styles.carousel}>
      <div className={styles.picCTN}>
        <img
          src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.pic}
        />
        <img
          src="https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.pic}
        />
        <img
          src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.pic}
        />
        <img
          src="https://images.pexels.com/photos/6766411/pexels-photo-6766411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.pic}
        />
        <img
          src="https://images.pexels.com/photos/7267504/pexels-photo-7267504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.pic}
        />
      </div>
    </section>
  );
}

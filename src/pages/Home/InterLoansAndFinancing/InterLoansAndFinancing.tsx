import styles from "./interLoansAndFinancing.module.css";

export function InterLoansAndFinancing() {
  return (
    <section id="interLoansAndFinancing" className={styles.interLoansAndFinancing}>
      <div className={styles.interLoansAndFinancingImage}>
        <img
          src="/interLoansAndFinancing/emprestimos-e-finaciamentos-home-desktop.png"
          alt=""
        />
      </div>

      <div className={styles.interLoansAndFinancingGroup}>
        <h2>
          <span>Empréstimos e Financiamento</span>
          Opções de crédito feitas para você.
        </h2>

        <p>
          Do empréstimo pessoal ao financiamento da sua casa, descomplicamos o
          seu crédito com um jeito simples de simular e contratar e taxas que
          você pode pagar.
        </p>

        <button>Conheça as opções de Crédito</button>
      </div>
    </section>
  );
}

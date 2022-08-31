import "./styles.css";

const Card = ({ transaction, transactionID, deleteTransaction }) => {
  const valueFix = (value) =>
    Math.abs(transaction.value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div
      id="cards"
      className={
        transaction.type === "entrada" ? "card-entrada" : "card-despesa"
      }
    >
      <h3>{transaction.description}</h3>
      <span className="entrada-despesa">
        {transaction.type === "entrada" ? "Entrada" : "Despesa"}
      </span>
      <h4>{valueFix(transaction.value)}</h4>
      <button
        className="button-remove"
        onClick={() => deleteTransaction(transaction)}
      >
        remover
      </button>
    </div>
  );
};

export default Card;

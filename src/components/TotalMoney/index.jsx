import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div
      className={
        listTransactions.length > 0 ? "total-money-show" : "total-money-hide"
      }
    >
      Valor total:
      {listTransactions &&
        listTransactions
          .reduce((acc, cur) => {
            return acc + cur.value;
          }, 0)
          .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    </div>
  );
};

export default TotalMoney;

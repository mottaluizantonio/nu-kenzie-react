import "./styles.css";
import Card from "../Card";
import NoCard from "../NoCard";

const List = ({
  listTransactions,
  filtredList,
  setFiltredList,
  deleteTransaction,
}) => {
  const filteredIn = () =>
    setFiltredList(listTransactions.filter((item) => item.type === "entrada"));

  const filteredOut = () =>
    setFiltredList(listTransactions.filter((item) => item.type === "saida"));

  return (
    <section id="cards-section">
      <div id="top-list">
        Resumo financeiro
        <div id="buttons-list">
          <button onClick={() => setFiltredList(listTransactions)}>
            Todos
          </button>
          <button className="gray-button" onClick={filteredIn}>
            Entradas
          </button>
          <button className="gray-button" onClick={filteredOut}>
            Despesas
          </button>
        </div>
      </div>
      {filtredList.length > 0 ? (
        filtredList.map((transaction, index) => (
          <Card
            transaction={transaction}
            transactionID={index}
            deleteTransaction={deleteTransaction}
            key={index}
          />
        ))
      ) : (
        <NoCard />
      )}
    </section>
  );
};

export default List;

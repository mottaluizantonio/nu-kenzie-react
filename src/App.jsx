import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Nukenzie from "./components/Nukenzie";
import Inicio from "./components/Inicio";
import HomePage from "./components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [homeButton, setHomeButton] = useState(true);
  const [filtredList, setFiltredList] = useState(listTransactions);

  const deleteTransaction = (transToDel) => {
    const listWhithoutItem = listTransactions.filter(
      (item) => item !== transToDel
    );
    setListTransactions(listWhithoutItem);
    setFiltredList(listWhithoutItem);
  };

  const home = () => {
    setHomeButton(!homeButton);
  };

  return (
    <>
      {!homeButton ? (
        <>
          <header>
            <Nukenzie />
            <Inicio home={home} />
          </header>
          <main>
            <section id="form">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                setFiltredList={setFiltredList}
              />
              {listTransactions !== [] && (
                <TotalMoney listTransactions={listTransactions} />
              )}
            </section>
            <section id="list-transactions">
              <List
                listTransactions={listTransactions}
                filtredList={filtredList}
                setFiltredList={setFiltredList}
                deleteTransaction={deleteTransaction}
              />
            </section>
          </main>
        </>
      ) : (
        <HomePage home={home} />
      )}
    </>
  );
}

export default App;

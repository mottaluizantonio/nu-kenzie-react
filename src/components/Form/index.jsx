import { useState } from "react";
import "./styles.css";

const Form = ({ listTransactions, setListTransactions, setFiltredList }) => {
  const [itemValue, setItemValue] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemType, setItemType] = useState("entrada");

  const addTransaction = (newTransaction) => {
    newTransaction &&
      setListTransactions([...listTransactions, newTransaction]);
    setFiltredList([...listTransactions, newTransaction]);
  };

  const buildTransaction = (e) => {
    e.preventDefault();
    setItemDescription("");
    setItemValue("");

    const newTransaction = {
      description: itemDescription,
      type: itemType,
      value:
        itemType === "entrada" ? Math.abs(itemValue) : -Math.abs(itemValue),
    };
    addTransaction(newTransaction);
  };

  return (
    <form>
      <div>
        <label>Descrição:</label>
        <input
          value={itemDescription}
          type="text"
          name="descricao"
          placeholder="Digite aqui sua descrição"
          required
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <span className="ex-descricao">Ex.: Compra de roupas</span>
      </div>
      <div id="insert-values">
        <div>
          <label>Valor:</label>
          <input
            value={itemValue}
            className="input-valor"
            type="number"
            name="valor"
            placeholder="R$"
            onChange={(e) => setItemValue(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="tipo-valor">Tipo de valor:</label>
          <select
            name="in-out"
            id="in-out"
            required
            onChange={(e) => setItemType(e.target.value)}
          >
            <option value="entrada">entrada</option>
            <option value="saida">saída</option>
          </select>
        </div>
      </div>
      <button type="submit" onClick={(e) => buildTransaction(e)}>
        Inserir valor
      </button>
    </form>
  );
};

export default Form;

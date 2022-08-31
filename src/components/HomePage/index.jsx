import "./styles.css";
import logo from "../../assets/img/nukenzie.png";
import homeimg from "../../assets/img/homeimg.png";

const HomePage = ({ home }) => {
  return (
    <div id="main-div-home">
      <section id="home-principal">
        <img src={logo} alt="Nu Kenzie" />
        <h1 id="h1-home">Centralize o controle das suas finanças</h1>
        <span id="span-home">de forma rápida e segura</span>
        <button id="iniciar" onClick={home}>
          Iniciar
        </button>
      </section>
      <section id="home-secundaria">
        <img src={homeimg} alt="Kenzie" />
      </section>
    </div>
  );
};

export default HomePage;

import './App.css';

import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import LayoutBg1 from "./assets/bg1.jpg";
import LayoutBg2 from "./assets/bg2.jpg";

function App() {
  return (
    <>
      <Header
        title="Pokemon YES"
        descr="Top game maaaaaan"
      />
      <Layout
        title="Best game about pokemons"
        descr="All for you"
        urlBg={LayoutBg1}
      />
      <Layout
        title="Zar the BEST"
        descr="And I the best"
        colorBg="red"
      />
      <Layout
        title="Marathon is very interesting"
        descr="And Game is very coool"
        urlBg={LayoutBg2}
      />
      <Footer />
    </>
  );
}

export default App;

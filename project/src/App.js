import "./App.css";
import Header from "./Components/Header/Header.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Slide from "./Components/Slide/Slide.jsx";
import Content from "./Components/Content/Content.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CardList from "./Components/CardList";


function App() {
  return (
    <>
      <Header />
      <NavBar/>
      <Slide/>
      <Content/>
      <CardList/>
      <Footer/>
    </>
  );
}

export default App;

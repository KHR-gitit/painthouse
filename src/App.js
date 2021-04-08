import Menu from './components/Menu'
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';



function App() {
  const menuHover = (e) =>{
    let num = Math.floor(Math.random() * 3);
    if(num === 0) {
        e.target.classList.add('my-orange');
    } else if (num === 1) {
        e.target.classList.add('my-red');
    } else if (num === 2) {
        e.target.classList.add('my-green');
    }
}
const menuRemoveHover = (e) => {
    e.target.classList.remove('my-red');
    e.target.classList.remove('my-orange');
    e.target.classList.remove('my-green');
}
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
  return (
    <Router>
    <div className="App">
      <Menu menuHover={menuHover} menuRemoveHover={menuRemoveHover} toTop={scrollToTop}/>
      <Switch>
        <Route path="/" exact>
          <Home menuHover={menuHover} menuRemoveHover={menuRemoveHover} />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

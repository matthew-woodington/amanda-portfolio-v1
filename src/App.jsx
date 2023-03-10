import './App.css'
import Header from './Components/Header/Header'
import TopScroll from './Components/TopScroll/TopScroll'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Art from './Pages/Art/Art'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <div className="app">
      {/* <TopScroll /> */}
      <Header />
      <div className="main-page">
        <Home />
        <About />
        <Art />
        <Contact />
      </div>
    </div>
  )
}

export default App

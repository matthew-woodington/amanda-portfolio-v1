import './App.css'
import Header from './Components/Header/Header'
import TopScroll from './Components/TopScroll/TopScroll'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="app">
      <TopScroll />
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App

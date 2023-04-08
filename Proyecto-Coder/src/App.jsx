
import './App.css' 
import ItemsListContainner from './components/ItemsListContainner/ItemsListContsainner'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <ItemsListContainner greeting={'Bienvenidos'}/>
    </div>
  )
}

export default App

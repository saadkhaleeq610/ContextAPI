import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {


  return (
    <>
      <div>
        <Item name="Macbook" price={1000}/>
        <Item name="Mobile" price={400}/>
        <Item name="Bag" price={90}/>
        <Cart/>
      </div>
    </>
  )
}

export default App

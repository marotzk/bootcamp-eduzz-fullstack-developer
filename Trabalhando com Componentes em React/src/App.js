import Item from './components/Item'
import Card from './components/Card'

const App = () => {
  return(
    <>
      <h1>Digital Innovation One - DIO</h1>
      <ul className='list-group'>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </ul>
      <Card/>
    </>
  )
}

export default App;
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import ItemListProvider from './Store/Item-List-Store';

import './App.css'

function App() {
  

  return (
    <>
    <ItemListProvider>
      <Header/>
      <main>
        <Meals/>
      </main>
    </ItemListProvider>
    </>
  )
}

export default App

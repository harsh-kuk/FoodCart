import { useState } from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals'
import Cartprovider from './store/Cartprovider';
function App() {
const[showcart,setShowcart]=useState(false);
const showcarthandler=()=>{
setShowcart(true);
}
const hidecarthandler=()=>{
setShowcart(false);
}
  return (
    <Cartprovider>
      {showcart && <Cart onclose={hidecarthandler}/>}
      <Header onshow={showcarthandler}/>
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}
export default App;
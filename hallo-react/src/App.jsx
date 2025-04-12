//import Libraries
import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx';


//Membuat komponen dengan class



//create component
const App = ()=>{
  return(
    <div>
      <Header />
      <h1>Hallo React</h1>
      <h2>Nama saya Lukmanul Hakim</h2>
      <List />
      <Footer />
    </div>
  )
}

//Export Default
export default App;


import React,{useState} from "react"

// class Header extends React.Component{
//     render(){
//       return(
//         <>
//           <h2> Makanan khas Indonesia </h2>
//         </>
//       )
//     }
// }

function Header(){
  const state = useState("ini judul dari state")
  return(
    <div>
      <h2>Makanan khas Indonesia</h2>
      <h3>{state}</h3>
    </div>
  )
}

export default Header;
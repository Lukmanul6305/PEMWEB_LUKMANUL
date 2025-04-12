import React from 'react'


//Menggunakan class
// class Images extends Component {
//     render(){
//         return(
//             <img src={this.props.linkGambar} alt="Food" width='500' />
//         )
//     }
// }

//menggunakan function
function Images({linkGambar}){
    return(
        <img src={linkGambar} width="200"/>
    )
}
export default Images
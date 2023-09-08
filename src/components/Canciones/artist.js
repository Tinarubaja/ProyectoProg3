import React, {Component} from 'react';
// import CardArtista from "../CardArtista"

// class Artist extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//            id: Number(props.match.params.id),
//            canciones: []
//         }
//         console.log(this.state.id)
//     }

//     componentDidMount(){
//         let canciones1 = []
//         let url = `` // Ver bien cual es la api 
//         fetch(url)
//             .then(response => response.json())
//             .then(data => canciones1.push(data))
//             .then(() => this.setState(
//                 {
//                     canciones:canciones1
//                  }
                    
//             ))
//             .catch(error => console.log('El error es' + error))
//             console.log(this.state.canciones)
//     }
    

//     render(){
//         return(
//             <React.Fragment >
//            {this.state.canciones.map((detalleC, idx) => <CardArtista key={detalleC + idx} datosDetalle={detalleC} />)}
//            </React.Fragment>

//         )
//     }

// }


function Artist(){
    return(
        <div>
            <h2>hola soy el componente</h2>
        </div>
    )
}








export default Artist

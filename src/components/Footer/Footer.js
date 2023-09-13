import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <React.Fragment>
                 <div class="contenedorfooter">
            <div class="develop">
                <i class="fa-solid fa-code"></i>
                <h3> Developed by</h3>
            </div>
            <div class="integrantes">
                <h3>Ailin Fernandez</h3>
                <i class="fa-solid fa-minus"></i>
                <h3>Martina Rubaja</h3>
                <i class="fa-solid fa-minus"></i>
                <h3>Renata Lamas</h3>
            </div>
        </div>

           </React.Fragment>

        )
    }

}

export default Footer
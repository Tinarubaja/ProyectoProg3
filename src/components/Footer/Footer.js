import React, {Component} from 'react';
import "./Footer.css"
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
                <div class="integrantes">
                    <h3>Ailin Fernandez</h3>
                    <h3>Martina Rubaja</h3>
                    <h3>Renata Lamas</h3>
                </div>
            </div>
           </React.Fragment>

        )
    }

}

export default Footer
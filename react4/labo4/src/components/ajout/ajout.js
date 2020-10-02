import React from 'react';
import axios from 'axios';


class Ajout extends React.Component{

    constructor(props){
        super(props);
        this.state={
            code:'',
            nom:'',
            prenom:''
     
        }

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
        onChangeCode(e){
            this.setState({
                code:e.target.value
            })
        }

        onChangeNom(e){
            this.setState({
                nom:e.target.value
            })
        }

        onChangePrenom(e){
            this.setState({
                prenom:e.target.value
            })
        }

        onSubmit(e){
            e.preventDefault();
            const util={
                code:this.state.code,
                nom:this.state.nom,
                prenom: this.state.prenom
            }
            console.log(util);
            axios.post('http://localhost:3026/ajoutUtil', util)
            .then(res=>console.log(res.data));

            this.setState({

                code:'',
                prenom:'',
                nom:''
                
            })
        }

    render(){

        return(
            <div className="container">
               <h3>Ajouter un utilisateur</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Nom : </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.nom}
                       onChange={this.onChangeNom}
                       />
                   </div>
                   <div className="form-group">
                       <label>Prenom : </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.prenom}
                       onChange={this.onChangePrenom}

                       />
                   </div>
                   <div className="form-group">
                       <label>Code : </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.code}
                       onChange={this.onChangeCode}
                       />
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Ajout" className="btn btn-primary"/>
                   </div>
               </form>
            </div>
        )
    }
}

export default Ajout;
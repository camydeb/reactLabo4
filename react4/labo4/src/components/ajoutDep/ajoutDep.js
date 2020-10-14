import React from 'react';
import axios from 'axios';


class AjoutDep extends React.Component{

    constructor(props){
        super(props);
        this.state={
            departement:'',
            code:'',
            superviseur:''
            
     
        }

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeDepartement = this.onChangeDepartement.bind(this);
        this.onChangeSuperviseur = this.onChangeSuperviseur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
        onChangeCode(e){
            this.setState({
                code:e.target.value
            })
        }

        onChangeDepartement(e){
            this.setState({
                departement:e.target.value
            })
        }

        onChangeSuperviseur(e){
            this.setState({
                superviseur:e.target.value
            })
        }

        onSubmit(e){
            e.preventDefault();
            const dep={
                code:this.state.code,
                departement:this.state.departement,
                superviseur: this.state.superviseur 
            }
            console.log(dep);
            // axios.post('http://localhost:3026/ajoutDep', dep)
            axios.post('http://10.30.40.121:3219/ajoutDep', dep)
            .then(res=>console.log(res.data));

            this.setState({

                code:'',
                departement:'',
                superviseur:''
                
            })
        }

    render(){

        return(
            <div className="container">
               <h3>Ajouter un Departement</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Departement : </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.departement}
                       onChange={this.onChangeDepartement}
                       />
                   </div>
                   <div className="form-group">
                       <label>Superviseur : </label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.superviseur}
                       onChange={this.onChangeSuperviseur}
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

export default AjoutDep;
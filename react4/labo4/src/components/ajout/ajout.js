import React from 'react';
import axios from 'axios';


class Ajout extends React.Component{

    constructor(props){
        super(props);
        this.state={
            departement:'',
            code:'',
            nom:'',
            prenom:'',
            deps:[]
     
        }

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeDepartement = this.onChangeDepartement.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
                // axios.get('http://localhost:3026/lireDep')

        axios.get('http://10.30.40.121:3219/lireDep/')
        .then(response => {
            // console.log(response.data);
            if (response.data.length > 0){
                this.setState({
                    deps: response.data.map(depCourant=> depCourant.departement),
                     depCourant:response.data[0].departement
                    })
                }
            })
            .catch((error)=>{
                console.log(error);
            })
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

        onChangeDepartement(e){
            this.setState({
                departement:e.target.value
            })
        }

        onSubmit(e){
            e.preventDefault();
            const util={
                code:this.state.code,
                nom:this.state.nom,
                prenom: this.state.prenom,
                departement: this.state.depCourant
            }
            console.log(util);
            // axios.post('http://localhost:3026/ajoutUtil', util)
            axios.post('http://10.30.40.121:3219/ajoutUtil', util)

            .then(res=>console.log(res.data));

            this.setState({

                code:'',
                prenom:'',
                nom:'',
                departement:''
                
            })
        }

    render(){

        return(
            <div className="container">
               <h3>Ajouter un utilisateur</h3>
               <form onSubmit={this.onSubmit}>
               <div className="form-group">
                       <label>Départements :  </label>
                       <select
                        required
                        className="form-control"
                            onChange={this.onChangeDepartement}>
                            {
                                this.state.deps.map(function(departement){
                                    return <option
                                    key={departement}
                                    value={departement}>{departement}
                                    </option>
                                })
                            }
                        </select>
                   </div>
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
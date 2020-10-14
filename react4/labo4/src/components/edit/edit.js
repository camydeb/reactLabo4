import React from 'react';
import axios from 'axios';



class Edit extends React.Component{

    constructor(props){
        super(props);
        
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeDepartement = this.onChangeDepartement.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            code:'',
            nom:'',
            prenom:'',
            id:'', 
            departement:'',
            deps:[]
     
        }
    }
    
    componentDidMount(){

        // axios.get('http://localhost:3026/lireUnUtil/'+this.props.match.params.id)
        axios.get('http://10.30.40.121:3219/lireUnUtil/'+this.props.match.params.id)
        .then(response =>{

            this.setState({
                code: response.data.code,
                nom: response.data.nom,
                prenom: response.data.prenom,
                id:this.props.match.params.id
            })
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(this.state.code);   
        console.log(this.props.match.params.id)

        axios.get('http://10.30.40.121:3219/lireDep')
        .then(response => {
            // console.log(response.data);
            if (response.data.length > 0){
                this.setState({
                    deps: response.data.map(depCourant=> depCourant.departement),
                     depCourant:response.data[0].departement
                    })
                }
            })
            .catch((error)=>{console.log(error);
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
            departement:this.state.depCourant
        }

        console.log(util);

        // axios.post('http://localhost:3026/updateUtil/'+this.props.match.params.id, util)
        axios.post('http://10.30.40.121:3219/updateUtil/'+this.props.match.params.id, util)
        .then(res=>console.log(res.data));

        //redirection vers page liste
        this.props.history.push('/liste/');

        
      
    }

    

    render(){

        return(
            
            <div className="container">
               <h3>Editer un utilisateur</h3>
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
                       <input type="submit" value="Éditer" className="btn btn-primary"/>
                   </div>
               </form>
            </div>
        )
    }
}

export default Edit;
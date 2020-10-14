import React from 'react';
import GenListe from './Genliste';
import axios from 'axios';



class Liste extends React.Component{
    constructor(props){
        super(props);

        this.state={
            utilisateurs:[]
          
        }
        this.deleteUtil = this.deleteUtil.bind(this);
    }

    componentDidMount(){

        // axios.get('http://localhost:3026/lireUtil')
        axios.get('http://10.30.40.121:3219/lireUtil/')
        .then(response => {
            // console.log(response.data);
            if (response.data.length > 0){
                this.setState({
                    utilisateurs: response.data})
                }
            })
            .catch((error)=>{
                console.log(error);
            })

    }

    


    userList(){
        return this.state.utilisateurs.map(utilCourant=>{

            return <GenListe utilisateur={utilCourant} deleteUtil={this.deleteUtil}key={utilCourant._id}/>

        })
        
        
    };
        


    deleteUtil(id){

        // axios.delete('http://localhost:3026/delUtil/'+id)
        axios.delete('http://10.30.40.121:3219/delUtil/'+id)
        .then(res =>console.log(res.data));
        this.setState({
            utilisateurs:this.state.utilisateurs.filter(remove => remove._id !== id)
        })

    }

    

    render(){

        return(
            <div className="container">
                <h3>Liste des utilisateurs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>departement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                       
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default Liste;
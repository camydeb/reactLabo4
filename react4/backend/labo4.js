
const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

const connection = mongoose.connection;
const app = express();
const Student = require('./models/modEtudiants');
const Departement = require('./models/modDep');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views','./views');
app.set('view engine','ejs');
app.use('/public',express.static('public')); 


// app.get('/',(req,res)=>{
//     res.render('index.ejs',{pageTitle : "Test ejs"});
// });
// app.get('/accueil/:nom',(req,res)=>{
//     const nom = req.params.nom;
//     res.render('accueil.ejs',{userName: nom, pageTitle : "Accueil"});
// });

// app.get('/accueil/',(req,res)=>{
//     res.render('accueil.ejs',{userName: 'N/A', pageTitle : "Accueil"});
// });


//ajout Departement
app.post('/ajoutDep',(req,res) => {
    console.log('req.body',req.body);

    const ajoutDep = new Departement(req.body);

    ajoutDep.save((err,ajout)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(201).json(ajout);
    });
});


//get Departements
app.get('/lireDep',(req,res)=>{
    Departement.find()
    .exec()
    .then(departement => res.status(200).json(departement));
});



//ajout Utilisateur
app.post('/ajoutUtil',(req,res) => {
    console.log('req.body',req.body);

    const ajout = new Student(req.body);

    ajout.save((err,ajout)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(201).json(ajout);
    });
});

//update
app.post('/updateUtil/:id',(req,res)=> {
    const id = req.params.id;
    
    Student.findByIdAndUpdate(id,req.body,(err,etu)=>{
        if(err){
            return res.status(500).json(err);

        }
        res.status(202).json({msg:`Utilisateur avec l'id ${etu._id} modifié`})

    })
});

//select liste
app.get('/lireUtil',(req,res)=>{
    Student.find()
    .exec()
    .then(etudiant => res.status(200).json(etudiant));
});

app.get('/lireUnUtil/:id',(req,res)=>{
    const id = req.params.id;
    Student.findById(id)
    .exec()
    .then(etudiant => res.status(200).json(etudiant));
});


//delete
app.delete('/delUtil/:id',(req,res)=> {

    const id = req.params.id;
    Student.findByIdAndDelete(id,(err,etu)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({msg:`Utilisateur avec l'id ${etu._id} supprimé`});
    });
});

    
connection.once('open',() => {
    console.log('connected to MongoDB');
});
mongoose.connect('mongodb+srv://123:123@cluster0.zzj0t.mongodb.net/test?authSource=admin&replicaSet=atlas-l05vgw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{useUnifiedTopology: true,useNewUrlParser: true});
// mongoose.connect('mongodb://camyV:bemondlocalhost:27017/dblabo4',{useUnifiedTopology: true,useNewUrlParser: true});

const PORT = 3026;
app.listen(PORT,()=>{
    console.log("j'ecoute le port 3026");
});
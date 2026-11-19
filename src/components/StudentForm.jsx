import {useState} from "react";
import "../StudentForm.css";

export const StudentForm=(props)=> {

const[nom,setNom]=useState("");
const[prenom,setPrenom]=useState("");
const[email,setEmail]=useState("");
const[telephone,setTelephone]=useState("");
const[filiere,setFiliere]=useState("");
const[image,setImage]=useState("");


function handleSubmit(e){
    
        e.preventDefault();
        
        const newEtudiant ={
            id: Date.now().toString(),
            nom:nom,
            prenom:prenom,
            email:email,
            telephone:telephone,
            filiere:filiere,
            image:image
        };
       
        props.onAjouter(newEtudiant);
    }

return (
<form className="student-form"  onSubmit={handleSubmit}>

    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom" onChange={(e) => setNom(e.target.value)} />
    
    <label for="prenom">Prénom:</label>
    <input type="text" id="prenom" name="prenom" onChange={(e) => setPrenom(e.target.value)} />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />

    <label for="telephone">Téléphone:</label>
    <input type="tel" id="telephone" name="telephone" onChange={(e) => setTelephone(e.target.value)} />

    <label for="filiere">Filiére:</label>
    <select id="filiere" name="filiere" onChange={(e) => setFiliere(e.target.value)}>
        <option value="">Choisir une filière</option>
        <option value="GLCI">GLCI</option>
        <option value="LCS">LCS</option>
        <option value="LBC">LBC</option>
    </select>

    <label for="image">Image:</label>
    <input type="file" id="image" name="image" accept="image/*" onChange={(e) => {
        const fichier=e.target.files[0]
        if(fichier){
            setImage(URL.createObjectURL(fichier));
            }
        }
    }
        />
   
   <div>    
    <button type="submit" > Ajouter </button>
    <button type="reset"> Réinitialiser </button>
    </div>


    </form>

);






















};

export default StudentForm;
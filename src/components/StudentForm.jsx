import {useState} from "react";
i
export const StudentForm=(props)=> {

const[nom,setNom]=useState("");
const[prenom,setPrenom]=useState("");
const[email,setEmail]=useState("");
const[telephone,setTelephone]=useState("");
const[filiere,setFiliere]=useState("");
const[image,setImage]=useState(null);


<form onSubmit={props.onAjouter}>
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
    <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>

    
    const new Etudiant ={
            





    }


    

    
    
   
   <div>
    
    
    <button type="submit"> Envoyer </button>
    <button type="reset"> Réinitialiser </button>
    
    
    </div>






    </form>
























};

export default StudentForm;
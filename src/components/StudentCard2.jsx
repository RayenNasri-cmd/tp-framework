
import {useState} from "react";
export const StudentCard2=(props)=> {

  const [cordonneVisible,setCordonneVisible]=useState(false)

    const basculerInformation = () => {
      setCordonneVisible(!cordonneVisible);
    };

  return (
      
    <div className="container">
    
      <div className="card">
        
        <img 
          src={props.image} 
          alt="Photo de l'étudiant" 
          style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }} 
        />
        
        <h1 style={{ color: "lightblue" }}>Fiche étudiant</h1>
        
        <p><strong>id :</strong> {props.id}</p>
        <div className="info-list">
          <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p> 
          {cordonneVisible && (
            <div>
            <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
          </div>
          )}
          

          <p><strong>Filière :</strong> {props.filiere}</p>
          <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
          <p><strong>Groupe :</strong> {props.groupe}</p>
          <p><strong>Ville :</strong> {props.ville}</p>
        </div>
        <br></br>
        <button style={{ 
        backgroundColor:"lightblue",
        width: "100px" , 
        borderRadius: " 10%",
        padding:"15px",
        margin:"15px ",
        border:"4px solid lightblue"}} 
        className="contact"> 
        Contacter
        </button>
        <button style={{padding:"15px",margin:"15px 0 ",backgroundColor:"tan",color:"",borderRadius:"10%"}} 
        onClick={basculerInformation}>
          Afficher/Masquer
        </button>
          
        <button style={{padding:"15px",border:"4px solid lightpink",backgroundColor:"lightpink",borderColor:"lightpink",width:"100px",borderRadius:"10%"}} onClick={() => props.onSupprimer(props.id)}
        >
            supprimer
        </button>
      </div>
    </div>
  );
  
};
export default StudentCard2;


import {useState} from "react";
import "../StudentCard2.css";


export const StudentCard2=(props)=> {

  const [cordonneVisible,setCordonneVisible]=useState(false)

    const basculerInformation = () => {
      setCordonneVisible(!cordonneVisible);
    };

  return (
      
    <div className="container" >
    
      <div className="card">
        
        <img 
        className="photo"
          src={props.image} 
          alt="Photo de l'étudiant" 
        />
        
        <h1 className="student-titre">Fiche étudiant</h1>
        
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


        <button  className="contact">
        Contacter
        </button>

        <button className="basculer" onClick={basculerInformation}>
          Afficher/Masquer
        </button>
          
        <button className="supprimer" onClick={() => props.onSupprimer(props.id)}>
            supprimer
        </button>

      </div>
    </div>
  );
  
};
export default StudentCard2;

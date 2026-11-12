import "./App.css";
import {useState} from "react";
import StudentCard2 from "./components/StudentCard2.jsx";
import studentImage1 from "./assets/student1.jpg"
import studentImage2 from "./assets/student2.jpg"
import studentImage3 from "./assets/student3.jpg"
import StudentForm from "./components/StudentForm.jsx";
import { Counter } from "./components/counter.jsx";
import { AjoutStudents } from "./components/ajoutStudent.jsx";
import StudentForm from "./components/StudentForm.jsx";
  const etudiants1 = [
  {
    id:"1",
    prenom: "Rayen",
    nom: "nasri",
    email: "Nwalid054@gmail.com",
    telephone: "+216 54548685",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: studentImage1,
  },
  {
    id:"2",
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: studentImage2,
  },
  {
    id:"3",
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: studentImage3,
  }
];

const newEtudiant = {
  prenom: "Test",
  nom: "Etudiant",
  email: "test@gmail.com",
  telephone: "+216 00 000 000",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneeEtude: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
  image: studentImage1,
};

function App() {

  const [etudiants ,setEtudiants]=useState(etudiants1);

  const functionSupp=(id)=>{
      setEtudiants(etudiants.filter((etudiant)=>etudiant.id!==id));
  }


  return (
    
    
  <div style={{alignItems:"center"}}>
    <header >
        <h1>Liste des étudiants</h1>
        <p>GLSI 2 - Année universitaire 2026-2027</p>
      </header>

      <nav>
        <a href="#">Accueil</a>
        <a href="#">Étudiants</a>
        <a href="#">Contact</a>
      </nav>

      
      <AjoutStudents etudiants={etudiants} setEtudiants={setEtudiants} newEtudiant={newEtudiant}/>

      <StudentForm/>


    {etudiants.map((etudiant) => (
      <StudentCard2
        id={etudiant.id}
        prenom={etudiant.prenom}
        nom={etudiant.nom}
        email={etudiant.email}
        key ={etudiant.email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        anneeEtude={etudiant.anneeEtude}
        groupe={etudiant.groupe}
        ville={etudiant.ville}
        image={etudiant.image}
        onSupprimer={functionSupp}
      />
    )
                  )   
      }
  </div>
  );
}

export default App;

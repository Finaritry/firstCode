let tableBody = document.querySelector(".tableau tbody");
function afficherDonnees(donnees){
    donnees.forEach(e => {
        const row = document.createElement("tr");

        const nom = document.createElement("td");
        nom.textContent = e.firstname;

        const prenom = document.createElement("td");
        prenom.textContent = e.lastname;

        const age = document.createElement("td");
        age.textContent = e.age;

        const note = document.createElement("td");
        note.textContent = e.note;

        row.appendChild(nom);
        row.appendChild(prenom);
        row.appendChild(age);
        row.appendChild(note);

        tableBody.appendChild(row);
    });
}
   
    function afficherMoyenne(tab) {
        const totalNotes = tab.reduce((acc, personne) => acc + personne.note, 0);
        const moyenne = totalNotes / tab.length;
    
        const moyenneElement = document.querySelector(".moyenne");
        moyenneElement.textContent = ` ${moyenne.toFixed(2)}`;
    }

    function afficherMeilleureNote(tab) {
        const meilleureNote = Math.max(...tab.map(personne => personne.note));
        
        const meilleursEleves = tab.filter(personne => personne.note === meilleureNote);
        
        const meilleureNoteElement = document.querySelector(".meilleureEleve");
        
        const texte = meilleursEleves.map(personne => `${personne.firstname} ${personne.lastname}
             a eu la meilleure note de ${personne.note}`).join('<br>');
        
        meilleureNoteElement.innerHTML = texte;
    }

    afficherDonnees(tab1);
    afficherMeilleureNote(tab1);
    afficherMoyenne(tab1);
    
  

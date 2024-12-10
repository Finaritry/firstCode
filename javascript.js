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
    afficherDonnees(tab1);

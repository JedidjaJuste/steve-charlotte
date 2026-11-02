const R = CONFIG.rsvp;

emailjs.init(R.emailjs.cle);


// ================= PAGE : infos du couple =================

document.title = `${CONFIG.prenom1} & ${CONFIG.prenom2} · RSVP`;

function initiales(nom){
    return nom.trim().charAt(0).toUpperCase();
}

const seal = document.getElementById("sealInitials");
if(seal){
    seal.innerHTML = `${initiales(CONFIG.prenom1)}&${initiales(CONFIG.prenom2)}`;
}

const deadline = document.getElementById("rsvpDeadline");
if(deadline){
    deadline.textContent = `Merci de répondre avant le ${R.dateLimite}`;
}


// ================= NOMBRE DE PERSONNES =================

const invitesGroup = document.getElementById("invitesGroup");
const invitesSelect = document.getElementById("invites");

for(let i = 1; i <= R.maxPersonnes; i++){
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i === 1 ? "1 personne" : `${i} personnes`;
    invitesSelect.appendChild(option);
}

document.querySelectorAll('input[name="presence"]').forEach(function(radio){
    radio.addEventListener("change", function(){
        const present = this.value.startsWith("Oui");
        invitesGroup.style.display = present ? "block" : "none";
    });
});


// ================= ENVOI =================

const form = document.querySelector(".rsvp-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const bouton = form.querySelector('button[type="submit"]');
    bouton.disabled = true;

    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const presence = document.querySelector(
        'input[name="presence"]:checked'
    ).value;

    const present = presence.startsWith("Oui");
    const invites = present ? invitesSelect.value : "0";

    const donnees = {
        nom: nom,
        email: email,
        presence: presence,
        invites: invites,
        message: message
    };

    // 1) courriel de notification (toujours)
    const envois = [
        emailjs.send(R.emailjs.service, R.emailjs.modele, donnees)
    ];

    // 2) tableau Google Sheets (formules Signature et Premium)
    if(R.feuilleUrl){
        envois.push(
            fetch(R.feuilleUrl, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(donnees)
            })
        );
    }

    Promise.allSettled(envois).then(function(resultats){

        const reussi = resultats.some(function(r){
            return r.status === "fulfilled";
        });

        if(reussi){
            alert("Merci pour votre réponse ❤️");
            form.reset();
            invitesGroup.style.display = "none";
        } else {
            alert("Une erreur est survenue.");
            console.log(resultats);
        }

        bouton.disabled = false;
    });

});

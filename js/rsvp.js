emailjs.init("cSaDzPncDCa_Yuunb");


const form = document.querySelector(".rsvp-form");


form.addEventListener("submit", function(e){

    e.preventDefault();


    const nom = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const presence = document.querySelector(
        'input[name="presence"]:checked'
    ).value;


    emailjs.send(
        "service_mk5uwbd",
        "template_5x1ocf3",
        {
            nom: nom,
            presence: presence,
            message: message
        }
    )
    .then(function(){

        alert("Merci pour votre réponse ❤️");

        form.reset();

    })
    .catch(function(error){

        alert("Une erreur est survenue.");

        console.log(error);

    });


});
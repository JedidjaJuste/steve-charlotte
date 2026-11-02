// =====================================================================
//  CONFIG — le SEUL fichier à modifier pour personnaliser un site.
//  (Sauf les balises d'aperçu du lien tout en haut de index.html.)
// =====================================================================
const CONFIG = {

  // ================= MARIÉS =================
  prenom1: "Steve",
  prenom2: "Charlotte",

  // ================= DATE DU MARIAGE =================
  dateMariage: "2026-09-19T00:00:00",

  // ================= HERO =================
  sousTitreHero: "19 Septembre 2026 — Québec",
  photoHero: "assets/images/hero.JPG",

  // ================= VERSET BIBLIQUE =================
  verset: {
    texte: "A peine les avais-je passés, Que j'ai trouvé celui que mon coeur aime; Je l'ai saisi, et je ne l'ai point lâché...",
    reference: "Cantique des Cantiques 3:4",
    texte2: "Comme un lys au milieu des épines, Telle est mon amie parmi les jeunes filles.",
    reference2: "Cantique des Cantiques 2:2"
  },

  // ================= HISTOIRE DU COUPLE =================
  histoire: "Notre histoire est celle de deux amoureux de Dieu qui ont décidé de lui offrir leur vie et leur union, pour servir à la réalisation de ses desseins. Nous sommes heureux de vous convier à la célébration de notre mariage !",

  // ================= PROGRAMME (formule Signature : heure de la cérémonie) =================
  programme: {
    heure: "12h30",
    description: "Célébration de notre union"
  },

  // ================= DRESS CODE =================
  // nom + couleur (code hexadécimal). Ajoute ou retire des couleurs librement.
  dressCode: {
    couleurs: [
      { nom: "Ivoire",    hex: "#F2EEE3" },
      { nom: "Champagne", hex: "#DEC59C" },
      { nom: "Beige",     hex: "#E2D2B9" },
      { nom: "Doré",      hex: "#B69248" },
      { nom: "Brun",      hex: "#4A4035" }
    ]
  },

  // ================= LIEU =================
  lieu: {
    nom: "Église Vases d'Honneur Québec",
    adresse: "3095 Bd Wilfrid-Hamel, Québec, QC G1P 2G9",
    adressePourCarte: "Église Vases d'Honneur Québec"
  },

  // ================= GALERIE =================
  galerie: [
    "assets/images/photo1.JPG",
    "assets/images/photo2.JPG",
    "assets/images/photo3.JPG",
    "assets/images/photo4.JPG",
    "assets/images/photo5.JPG",
    "assets/images/photo6.JPG",
    "assets/images/photo7.JPG",
    "assets/images/photo8.JPG"
  ],

  // ================= CADEAUX =================
  // Laisse une valeur vide ("") pour masquer la ligne.
  cadeaux: {
    especes: "+ 1 (418) 410-0989",
    interac: "steveetcharlotte@gmail.com"
  },

  // ================= RSVP =================
  rsvp: {
    dateLimite: "10 Septembre 2026",
    maxPersonnes: 6,          // nombre maximum de personnes par réponse

    // Courriel de notification (EmailJS)
    emailjs: {
      cle: "cSaDzPncDCa_Yuunb",
      service: "service_mk5uwbd",
      modele: "template_5x1ocf3"
    },

    // Tableau des réponses (Google Sheets) — formules Signature et Premium.
    // Colle ici l'URL du script Google (se termine par /exec). Laisse "" pour désactiver.
    feuilleUrl: "https://script.google.com/macros/s/AKfycbwDzsdTj_x_PMrLkghJeYME7I_ZfMZy-LZVmuPfEMvlBe3fwgKh2PCpyh_KgzfqqKuC/exec"
  }

};

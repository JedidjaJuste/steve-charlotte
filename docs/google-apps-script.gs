/**
 * Tableau des réponses RSVP (formules Signature et Premium)
 *
 * MISE EN PLACE (une fois par couple) :
 * 1. Crée une feuille Google Sheets au nom du couple.
 * 2. Renomme l'onglet « Réponses » et mets ces titres en ligne 1 :
 *    Date | Nom | Courriel | Présence | Nombre de personnes | Message
 * 3. Extensions > Apps Script : colle ce code, enregistre.
 * 4. Déployer > Nouveau déploiement > Application Web
 *    - Exécuter en tant que : moi
 *    - Qui a accès : tout le monde
 * 5. Copie l'URL qui se termine par /exec dans js/config.js (rsvp.feuilleUrl).
 * 6. Partage la feuille avec le couple (Partager > leur courriel).
 */

const NOM_ONGLET = 'Réponses';

function doPost(e) {
  const feuille = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOM_ONGLET);
  const d = JSON.parse(e.postData.contents);

  feuille.appendRow([
    new Date(),
    d.nom || '',
    d.email || '',
    d.presence || '',
    d.invites || '',
    d.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

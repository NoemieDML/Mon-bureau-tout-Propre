function calculer() {
  // Récupération des valeurs
  var surface = parseFloat(document.getElementById("surface").value) || 0;
  var frequence = document.getElementById("frequence").value;
  var vitres = document.querySelector('input[name="vitres"]:checked')?.value;

  // A. Tarif de base
  var prixBase = surface * 1.5;

  // B. Majoration selon la fréquence
  var multiplicateur = 1;
  if (frequence === "1x_semaine") multiplicateur = 1;
  else if (frequence === "2x_semaine") multiplicateur = 2;
  else if (frequence === "tous_les_jours") multiplicateur = 5;

  var totalHT = prixBase * multiplicateur;

  // C. Options supplémentaires (vitres incluses)
  if (vitres === "oui") {
    totalHT *= 1.1; // +10%
  }

  // D. Calcul TVA et TTC
  var tva = totalHT * 0.2; // TVA = 20% du HT
  var totalTTC = totalHT + tva; // TTC = HT + TVA

  // Affichages
  document.getElementById("total").innerText = totalHT;
  document.getElementById("tva").innerText = tva;
  document.getElementById("totalTTC").innerText = totalTTC;
}

function calculerUnPrix() {
  // Cette fonction calcule le prix total d’un service ou produit selon plusieurs critères (bureaux, fenêtres, sols, etc.)

  var bureaux = parseInt(document.getElementById("bureaux").value) || 0;
  // Récupère la valeur de l'élément avec l'ID "bureaux", la convertit en entier.
  // Si ce n'est pas un nombre, on prend 0 par défaut.

  var fenêtres = parseInt(document.getElementById("fenetres").value) || 0;
  // Idem pour "fenêtres"

  var sols = parseInt(document.getElementById("sols").value) || 0;
  // Idem pour "sols"

  var cuisine = parseInt(document.getElementById("cuisine").value) || 0;
  // Idem pour "cuisine"

  var toilettes = parseInt(document.getElementById("toilettes").value) || 0;
  // Idem pour "toilettes"

  var totalHT =
    bureaux * 5 + fenêtres * 5 + sols * 15 + cuisine * 10 + toilettes * 20;
  // Calcule le total hors taxes (HT) en multipliant chaque quantité par son prix unitaire
  // Bureaux et fenêtres = 5€ chacun, sols = 15€, cuisine = 10€, toilettes = 20€

  var totalTTC = totalHT * 1.2;
  // Calcule le total toutes taxes comprises (TTC) en ajoutant 20% de TVA

  document.getElementById("total").innerHTML = totalHT + "€";
  // Affiche le total HT dans l’élément avec l’ID "total"

  document.getElementById("totalTTC").innerHTML = totalTTC.toFixed(2);
  // Affiche le total TTC dans l’élément avec l’ID "totalTTC"
  // toFixed(2) permet de limiter l’affichage à deux chiffres après la virgule
}

// https://www.w3schools.com/howto/howto_js_filter_lists.asp
// Fonction qui permet la recherche de nom ou d'adresse
function recherche() {
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("food");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// function recherche() {
//   // Declare variables
//   let input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("Carte");
//   p = ul.getElementsByTagName('p');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < p.length; i++) {
//     a = p[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       p[i].style.display = "";
//     } else {
//       p[i].style.display = "none";
//     }
//   }
// }




// Fonction qui affiche le formulaire d'un nouveau message
function NewMail(){
  document.getElementById("formulaire").style.display = "block";
}

// Fonction qui ajoute un courriel à la liste d'envois lorsque "Envoyer" est appuyé
function addMail(){


}

// Fonction qui efface le courriel en cours lorsque "Abandonner" est appuyé
function deleteMail(){
  document.getElementById("Titre").value = " ";
  document.getElementById("Adresse").value = " ";
  document.getElementById("Contenu").value = " ";
  document.getElementById("formulaire").style.display = "none";
}
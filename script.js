/*var maVar ="ma valeur";
(function(){
    var maVar = "Valeur locale";
    console.log(maVar);
})();
*/

function reverseTab(tab) {
    let res = [];
    for (let i = tab.length -1; i > -1; i--) {
      res.push(tab[i]);
    }
    
    return res;
  }
  // Afficher la sortie
  console.log(reverseTab([1, 2, 3]));
  console.log(reverseTab([1, 1, 2, 2, 3]));
  
  function getLastElem (tab) {
    return tab[tab.length -1]

  }
  console.log(getLastElem ([1, 57, 5754]));
'use strict'; 

(function() {

 /* function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function() {return this.age > 18 }
  }

  function Student(firstName, lastName, age, level){
    Person.call(this, firstName, lastName, age)
    this.level=level;
  }

  function Stagiaire(firstName, lastName, age, exp){
    Person.call(this, firstName, lastName, age)
    this.exp=exp;
  }

  Student.prototype = Object.create(Person.prototype);
  Stagiaire.prototype = Object.create(Person.prototype);
  let rishi = new Student('Rishi', 'BEN', 21, 5);
  display(rishi);
  let lolo = new Stagiaire('Name', 'LOLO', 21, 6);
  display(lolo);*/


  function Document(numEnr, titre){
    this.numEnr= numEnr;
    this.titre = titre;
  }
  function Livre(numEnr, titre, auteur, nbrPages){
    Document.call(this, numEnr, titre)
    this.auteur = auteur;
    this.nbrPages= nbrPages;
      this.pages = function pages(){
        switch (true) {
          case this.nbrPages <= 100 :
            console.log('Il y a moins de 100 pages');
            break; 
          case this.nbrPages <= 200 :
              console.log('Il y a entre 101 et 200 pages');
            break;
            case this.nbrPages <= 300 :
            console.log('Il y a entre 201 et 300 pages');
            break; 
            default: 
              display('Il y a plus de 301 pages');
        
        }

      }
        
      }
  
  
  function Revue(numEnr, titre, mois, annee){
    Document.call(this, numEnr, titre)
    this.mois = mois;
    this.annee= annee;  
  }
  function Dictionnaire(numEnr, titre,langue){
    Document.call(this, numEnr, titre)
    this.langue = langue; 
  }

  Livre.prototype = Object.create(Document.prototype);
  Revue.prototype = Object.create(Document.prototype);
  Dictionnaire.protorype = Object.create(Document.prototype);
 
  let Snoopy = new Livre(20, "Snoopy", "Moi", 35 );
  display (Snoopy);
Snoopy.pages();
})(); 
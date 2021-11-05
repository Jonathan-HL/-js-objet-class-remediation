// Le personnage
let personnage = {
    idendite:{
        nom:"Hurtado",
        prenom :"Jonathan",
    },
    argent:0,
    lieu:"Moleneek",
    humeur:"",
// Humeur randome
changeDehumer () {
let humeur = ["positif","negatif"];
let changeHumeur = humeur[Math.floor(Math.random() * humeur.length)];
this.humeur = changeHumeur
return changeHumeur

}
}
personnage.changeDehumer();
console.log(personnage);
// Function deplacement
seDepalcer = (b) => {
        personnage.lieu = b
}
seDepalcer("lieu de travail")
// Argent
argent = () => {
    if (this.humeur == "positif") {
        for ( i = 0; i < 8; i++){
            this.argent = this.argent+15
        }
        return`Bonjours voici ton argent ${argent}`
    }if (this.humeur == "negatif") {
        for ( i = 0; i < 8; i++){
            this.argent = this.argent+10 
        } 
        return `bonjour voici votre paye ${argent}`
    }
}
argent()
console.log(personnage.argent());

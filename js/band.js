function Band(name) {
 this.name = name;
 this.dice = 0;
 this.victory = false;
 this.fans = 0;
 this.level = 0;
 this.characters = [];
}

Band.prototype.addCharacters = function(character){
  this.character.push(character);
};

// Band.prototype.battle = function (){
//
// };





exports.bandModule = Band;
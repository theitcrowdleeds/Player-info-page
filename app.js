(function(){
var app = angular.module('site', []);
app.controller('PlayerController', function(){
  this.products = players;

});


app.controller('TabController', function(){
  this.tab == 0;

  this.setTab = function(newValue){
    if(this.tab == 1){
      this.tab == 0;
    } else{
       this.tab = newValue;
    }
  }

  this.isSet = function(tabName){
    return this.tab == tabName;
  };
});

var players = [
{
  name: 'Aguero',
  age: '29',
  club:'Manchester City',
  clubShortName:'MNC',
  playerInfo: 'won the league in...',
  nationality: 'Argentina',
  goalsLastSeason: '30',
  gamesLastSeason: '35',
  currentBid: '0',
},
{
  name: 'Hazard',
  age: '25',
  club:'Chelsea',
  clubShortName:'CHE',
  playerInfo: 'won the league in...',
  nationality: 'Belgium',
  goalsLastSeason: '30',
  gamesLastSeason: '35',
  currentBid: '1',
},

];
})();

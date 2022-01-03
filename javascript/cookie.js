
function creercookie(nom,valeur,jour){
if(jour){
var date=new Date();
date.setTime(date.getTime()+jour*24*60*60*1000));
var expires = ';expires='+date+toGMTString();
}
else{
var expires='';
  }
  document.cookie= nom+'='+valeur+expires+'; path=/'
  }
  function lirecookie(nom){
  var nomEtEgal = nom + '=';
  var cTableau = document.cookie.split(';')
  for(var i=0;i<cTableau.length;i++){
  var c=cTableau[i];
  while (c.charAt(0)==''){
  c= c.substring(1, c.length);
  }
  if(c.index0f(nomEtEgal) == 0){
  return c.substring(nomEtEgal.lenght,c.lenght);}
  }
  return 'null'
  }

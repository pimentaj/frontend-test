// your code
function teste(evento){
  if (evento.target.readyState === 4) {
      var ranking  =  JSON.parse(evento.target.responseText);
      names(ranking.data);
  }

}

var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = teste;
httpRequest.open('GET', '/fazenda.json', true);
httpRequest.send();

function names(participants) {
  for (var i = 0; i < participants.length; i++) {
    var participant = participants[i];
    console.log(participant);

  }

}

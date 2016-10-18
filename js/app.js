  var cont = 0;
  var array = loadState();
function sizeControls() {
    var audioWhidth = $("audio").width();
    $(".input").css("width", audioWhidth + "px");
    // console.log(audioWhidth);
}

window.onload = sizeControls;
window.onresize = sizeControls;

$("#forward").click(function(){
  var audio = $("audio")[0];
  if(!audio.paused){
    audio.playbackRate += .25;
    $("#backward").html(audio.playbackRate+"X");
  }
})
$("#backward").click(function(){
  var audio = $("audio")[0];
    audio.playbackRate -= .25;
    $("#backward").html(audio.playbackRate+"X");
})

$("#btn-input").on('click', function(){
  var url = $("#load-audio").val();
  if(url === ''){
    alert('You need an url!');
  }else{
    $("#audio source").remove()
    $("#audioBox")[0].src= url;
    webStorage();

  }
})


$("#load-audio").on('click', function(){
  var load =  $('#load-audio').val();
  if(load != ''){
    $("#load-audio").val("");
  }
})


function webStorage(){
  var load =  $('#load-audio').val();
  var divchildren = $(".storage").find('h3');
  for (var i = 0; i < divchildren.length; i++) {
    if(load === array[i]){
    return alert('ou have this audio in your audio Box');
    }
    }
    array.push(load);
  $(".storage").append(`<a href="#"><h3 id="audio${cont}">${load}</h3><a>`);
    cont++;
    saveState();
    console.log(array);
}


function saveState(){
  localStorage.setItem("last-played", JSON.stringify(array));
}
// setInterval(saveState,1000);

function loadState(){
  var load = JSON.parse(localStorage.getItem("last-played"));
  if(!load){
    return [];
  }
  for (var i = 0; i < load.length; i++) {
    $(".storage").append(`<a href="#"><h3 id="audio${i}">${load[i]}</h3><a>`);
  }
  return load;
}

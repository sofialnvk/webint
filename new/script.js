/* Tab bar for what kind of post you want to create */
function openPost(evt, postName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(postName).style.display = "block";
    evt.currentTarget.className += " active";
}


/* MAP CODE */
//Created this function to try to make the map work but we should use the code under in some way
//If using another function than myMap(), update this part in the <script> in the htmlfile as it contains
//the function in the link
/*function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
}*/

//This is the code from the course website 
/**************************
//Script for the google map
**************************/

var map = null;
var geocoder = null;
var googleMap = document.getElementById('google-map');

function showPosition(position) {
//Fonction to be passed to the browser's geolocation function
    var latLng = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.setCenter(latLng);
    map.setZoom(15);
  }

  function showMap() {
    //This creates the initial map, or update it
    if (!map) {
      map = new google.maps.Map(googleMap, {
        zoom: 3,
        center: new google.maps.LatLng(37.4419, -94.1419),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    }
    if(!geocoder){
      geocoder = new google.maps.Geocoder();
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function updateMap(){
    var newLocation = document.getElementById("location-box").value;
    geocoder.geocode( { 'address': newLocation}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location, 8);
        var marker = new google.maps.Marker({
        map: map, 
        position: results[0].geometry.location
        });
      } else {
        alert("Error: " + status);
      }
    });
  }
  
  var map = new google.maps.Map(document.getElementById("google-map"), map);
  //Clicking on the "Show the map" will trigger the showMap() function
  document.getElementById('google-map').addEventListener('click',showMap, true);
  //Clicking on the update button will...update (the map)
  document.getElementById('update-map').addEventListener('click',updateMap, true);
  
  //For some reason, this doesn't work as expected : 
  //pressing "enter" when focused on the location field should return false...but I had to hard-code it in the HTML
  document.getElementById('geolocation-form').addEventListener('submit',function(){return false;},true);



/* Set time for video */ 
function setStartTime() { 
    var vid = document.getElementById('video');
    var setTime = document.getElementById('newTime').value;
    vid.currentTime = setTime;
} 

/* VIDEO CODE */
function updateUrl() {
  var vid = document.getElementById('video');
  var url = document.getElementById('newUrl').value;
  vid.src = url;
  vid.load();
  video.play()
}

//Rotates the video 23 degrees if it is not already rotated. Otherwise rotates video back to 0 degrees.
var rotated = false;
function rotate() {
    var video = document.getElementById("video");
    deg = rotated ? 0 : 23;
    video.style.transform = 'rotate('+deg+'deg)';

    rotated = !rotated;
}

//Hides and displays the controls on the video
function displayControls() {
    var video = document.getElementById("video");
    if ( document.getElementById("checkBox").checked == true) {
        video.controls = false;
    }
    else {
        video.controls = true;
    }
}


/*var videoSorces = ["https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9a/An-Investigation-on-the-Persistence-of-Uranium-Hydride-during-Storage-of-Simulant-Nuclear-Waste-pone.0132284.s001.ogv/An-Investigation-on-the-Persistence-of-Uranium-Hydride-during-Storage-of-Simulant-Nuclear-Waste-pone.0132284.s001.ogv.480p.webm",
"https://upload.wikimedia.org/wikipedia/commons/transcoded/2/21/Making_of_Elephants_Dream_-_title_origin.ogv/Making_of_Elephants_Dream_-_title_origin.ogv.360p.webm", 
"https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d6/Elaphants_Dream.ogv/Elaphants_Dream.ogv.480p.webm","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/DSCN0975.webm/DSCN0975.webm.480p.webm"];
var videoCount = videoSorces.length;*/



var videoSources = ["http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4", "http://www.html5videoplayer.net/videos/toystory.mp4", "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4", "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4", "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4"];

          var currentIndex = 0;
    // listener function changes src
          function myNewSrc() {
              var myVideo = document.getElementsByTagName('video1')[0];
              myVideo.src = videoSources[currentIndex];
              myVideo.load();
          }

         
    // add a listener function to the ended event
          function myAddListener(){
              var myVideo = document.getElementsByTagName('video1')[0];
              currentIndex = (currentIndex+1) % videoSources.length;
              myVideo.src = videoSources[currentIndex];
              myVideo.addEventListener('ended', myNewSrc, false);
              
          }

/*function run(){
  loop_int++;
  if (loop_int == (videoCount-1)) loop_int = 1;
  videoPlayer.setAttribute("src", videoSource[loop_int]);       
  video.play();

}*/

/*window.onload = function(e) {
/* JUKEBOX CODE 
var videoSorce = new Array();
videoSource[0] = "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9a/An-Investigation-on-the-Persistence-of-Uranium-Hydride-during-Storage-of-Simulant-Nuclear-Waste-pone.0132284.s001.ogv/An-Investigation-on-the-Persistence-of-Uranium-Hydride-during-Storage-of-Simulant-Nuclear-Waste-pone.0132284.s001.ogv.480p.webm";
videoSource[1] = "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/21/Making_of_Elephants_Dream_-_title_origin.ogv/Making_of_Elephants_Dream_-_title_origin.ogv.360p.webm";
videoSource[2] = "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d6/Elaphants_Dream.ogv/Elaphants_Dream.ogv.480p.webm";
videoSource[3] = "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/DSCN0975.webm/DSCN0975.webm.480p.webm";
var videoCount = videoSorce.length;


document.getElementById("jukebox").setAttribute("src",videoSource[0]);

function videoPlay(videoNum) {
  document.getElementById("jukebox").setAttribute("src",videoSource[videoNum]);
  document.getElementById("jukebox").load();
  document.getElementById("jukebox").play();
  /*var vid = document.getElementById('jukebox');
  vid.src = videoSource[videoNum];
  vid.load();
  video.play()
}

var i = 0;
document.getElementById('jukebox').addEventListener('ended',myHandler,false);
videoPlay(0); // play the video
function myHandler() {
    i++;
    if (i == (videoCount - 1)) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}
}*/
/*function myHandler() {
  for (var i = 1; i < videoCount; i++) {
    videoPlay(i);
    document.getElementById("display-message").innerHTML = "Now playing video" + i+1 +"/" + videoCount;
  }
}*/
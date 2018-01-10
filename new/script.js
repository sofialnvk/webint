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
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
}

//This is the code from the course website 
/**************************
//Script for the google map
**************************/

/*var map = null;
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
*/
/*
function jukeBox{
  var video = document.createElement("video");
  var source = document.createElement("source"); 
  source.type = "video/ogg";
  var videos = ["https://upload.wikimedia.org/wikipedia/commons/transcoded/3/36/History_of_the_Lake_Eola_Fountain.webm/History_of_the_Lake_Eola_Fountain.webm.240p.webm", "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/60/SunRail_Grand_Opening_at_Church_Street.webm/SunRail_Grand_Opening_at_Church_Street.webm.480p.webm", "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/SunRail_Grand_Opening_at_Florida_Hospital.webm/SunRail_Grand_Opening_at_Florida_Hospital.webm.480p.webm"];
  for(int i = 0; i < videos.length; i++){
    source.src = videos[i];
    video.appendChild(source);
    video.load();
    video.play();
  }
} */


var videos = ["https://upload.wikimedia.org/wikipedia/commons/transcoded/3/36/History_of_the_Lake_Eola_Fountain.webm/History_of_the_Lake_Eola_Fountain.webm.240p.webm", "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/60/SunRail_Grand_Opening_at_Church_Street.webm/SunRail_Grand_Opening_at_Church_Street.webm.480p.webm", "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/SunRail_Grand_Opening_at_Florida_Hospital.webm/SunRail_Grand_Opening_at_Florida_Hospital.webm.480p.webm"];
var called = 0;
/* Function to play 4 videos */
function jukeBox(){
  var vid = document.getElementById('videoJukeBox');
  vid.src = videos[called];
  vid.load();
  vid.play()
  document.getElementById("videoMessage").innerHTML = "Playing video " + (called+2) + "/4";
  called++;

}

/* Capture a preview of the video */
function capture() {
  var scalefactor = 0.5;
  var canvas = document.getElementById('canvas');
  var video = document.getElementById('video');
  canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);
  console.log(video.videoWidth);
}

/* Set time for video */ 
function setStartTime() { 
    var vid = document.getElementById('video');
    var setTime = document.getElementById('newTime').value;
    vid.currentTime = setTime;
} 

/*
/* Fix this!! enable button when field is not empty
function enableBtn() {
  /* var url = document.getElementById('newUrl').value;
  if (url != '') {
    document.getElementById("update-url").disabled = false; 
  } 
  var url = document.getElementById('newUrl');
  btn = document.getElementById('update-url');
  if (url.value){
    btn.disabled = false;
  }
}
*/

/* VIDEO CODE */
function updateUrl() {
  var vid = document.getElementById('video');
  var url = document.getElementById('newUrl').value;
  vid.src = url;
  vid.load();
  vid.play()
}

//Rotates the video 23 degrees if it is not already rotated. Otherwise rotates video back to 0 degrees.
var rotated = false;
function rotateVideo() {
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
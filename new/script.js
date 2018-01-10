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
function myMap() {

if(!!navigator.geolocation) {
        var map;
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        navigator.geolocation.getCurrentPosition(function(position) {
  
            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content:
                    '<h1>Location pinned from HTML5 Geolocation!</h1>' +
                    '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
                    '<h2>Longitude: ' + position.coords.longitude + '</h2>'
            });
            map.setCenter(geolocate);
        });
        
    } else {
        document.getElementById('google-maps').innerHTML = 'No Geolocation Support.';
    }
};


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
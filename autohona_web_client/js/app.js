$(document).ready(function() {

var coordinates=[];

     var point={
	 lattitude: 17.3660,
	 longitude: 78.4760
	 
	 }
 coordinates.push(pointsPair(point.lattitude,point.longitude));

 function pointsPair(lattitude, longitude) {
	return {
		lattitude : lattitude,
		longitude : longitude
	};
}
var sample=coordinates[0];
 console.log("check this:-----:"+sample.lattitude+ " , "+sample.longitude);
var myPoint=new google.maps.LatLng(coordinates[0].lattitude,coordinates[0].longitude);
 var mapOptions = {
    zoom: 8,
    center: myPoint,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  
  //var marker=new google.maps.Marker({
  //position:myPoint,
  //icon:'images/auto.png'
  //});

//marker.setMap(map);
  
 // google.maps.event.addListener(marker,'click',function() {
  //map.setZoom(9);
 // map.setCenter(marker.getPosition());
  //});
  google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(event.latLng);
  });

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
	icon:'images/auto.png'
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}
});
function initMap() {
    var Paris = {lat: 48.856754, lng: 2.351047};
    var Paris2  = {lat : 48.860198, lng : 2.318802};
    var Paris3 = {lat : 48.842162 , lng: 2.292766};
    var Paris4 = {lat : 48.830759, lng: 2.359204};
    var Paris5 = {lat : 48.857993 , lng: 2.381153};
    var Paris6 = {lat : 48.891305, lng: 2.352987};

var myicon = "https://mexicanofood-jordanazoulay.c9users.io/images/marker.png";
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: Paris,
          scrollwheel: false,
          zoom: 12
        });
        var markerParis = new google.maps.Marker({
    position: Paris,
    map: map,
    title: 'Paris',
    icon : myicon
  });
        var markerParis2 = new google.maps.Marker({
    position: Paris2,
    map: map,
    title: 'Paris',
    icon : myicon
  });
        var markerParis3 = new google.maps.Marker({
    position: Paris3,
    map: map,
    title: 'Paris',
    icon : myicon
  });
        var markerParis4 = new google.maps.Marker({
    position: Paris4,
    map: map,
    title: 'Paris',
    icon : myicon
  });
        var markerParis5 = new google.maps.Marker({
    position: Paris5,
    map: map,
    title: 'Paris',
    icon : myicon
  });
        var markerParis5 = new google.maps.Marker({
    position: Paris5,
    map: map,
    title: 'Paris',
    icon : myicon
  });

   google.maps.event.addListener(map, 'mousedown', function(event){
    this.setOptions({scrollwheel:true});
  });
  google.maps.event.addListener(map, 'mouseover', function(event){
    self = this;
    timer = setTimeout(function() {
      self.setOptions({scrollwheel:true});
    }, 1000);
  });
  google.maps.event.addListener(map, 'mouseout', function(event){
    this.setOptions({scrollwheel:false});
    clearTimeout(timer);
  });

      }

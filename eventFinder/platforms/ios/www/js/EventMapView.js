var EventMapView = function (events) {


    this.initialize = function() {
        this.$el = $('<div/>');
        this.showAllMap();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

  this.showAllMap =function() {

    var markersData = [];

    for(var event in events) {
        
        let newMaker = {'lat':events[event].geometry.coordinates[1], 
                        'lng':events[event].geometry.coordinates[0],
                        'title': 'Event Location',
                        'subtitle': events[event].properties.name, 
                        'image': 'www/img/markers/hi.jpg'};
        markersData.push(newMaker);
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            localStorage.longitude = position.coords.longitude
            localStorage.latitude = position.coords.latitude;
        },
        function() {
            alert('Error getting location');
    });

    Mapbox.show({
          style: 'emerald',
          margins: {
            'left': 0,
            'right': 0,
            'top': 48,
            'bottom': 0
          },
          center: {
            lat: localStorage.eventLat,
            lng: localStorage.eventLon 
          },
          zoomLevel: zoom, // 0 (the entire world) to 20, default 10
          showUserLocation: true, // default false
          hideAttribution: true, // default false
          hideLogo: true, // default false
          hideCompass: false, // default false
          disableRotation: false, // default false
          disableScroll: false, // default false
          disableZoom: false, // default false
          disablePitch: false, // default false
          markers: markersData
        },
        function (result) {
          console.log(JSON.stringify(result));
          // let's add a callback for these markers - invoked when the callout is tapped (Android) or the (i) icon in the marker callout (iOS)
          Mapbox.addMarkerCallback(function (selectedMarker) {
            alert("Marker selected: " + JSON.stringify(selectedMarker));
          });
        },
        function (error) {
          alert(error);
        }
    )
  }

    this.initialize();
}
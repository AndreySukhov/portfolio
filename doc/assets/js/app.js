$(document).ready(function(e){

  /**
   * заинитим графики*/
  var donutChart = $('.js-skill-pie__graphic');

  if (donutChart.length) {
    $(".js-skill-pie__graphic").peity("donut")
  }

});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 16,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(55.821965, 37.583834),
    scrollwheel:false,
    zoomControl:true,
    streetViewControl:false,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "weight": "2.00"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#9c9c9c"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#7b7b7b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#243994"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#243994"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#070707"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('js-map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.825894, 37.595139),
    map: map,
    icon:'assets/img/marker.svg'
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGUpe1xuXG4gIC8qKlxuICAgKiDQt9Cw0LjQvdC40YLQuNC8INCz0YDQsNGE0LjQutC4Ki9cbiAgdmFyIGRvbnV0Q2hhcnQgPSAkKCcuanMtc2tpbGwtcGllX19ncmFwaGljJyk7XG5cbiAgaWYgKGRvbnV0Q2hhcnQubGVuZ3RoKSB7XG4gICAgJChcIi5qcy1za2lsbC1waWVfX2dyYXBoaWNcIikucGVpdHkoXCJkb251dFwiKVxuICB9XG5cbn0pO1xuXG4vLyBXaGVuIHRoZSB3aW5kb3cgaGFzIGZpbmlzaGVkIGxvYWRpbmcgY3JlYXRlIG91ciBnb29nbGUgbWFwIGJlbG93XG5nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIEJhc2ljIG9wdGlvbnMgZm9yIGEgc2ltcGxlIEdvb2dsZSBNYXBcbiAgLy8gRm9yIG1vcmUgb3B0aW9ucyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBPcHRpb25zXG4gIHZhciBtYXBPcHRpb25zID0ge1xuICAgIC8vIEhvdyB6b29tZWQgaW4geW91IHdhbnQgdGhlIG1hcCB0byBzdGFydCBhdCAoYWx3YXlzIHJlcXVpcmVkKVxuICAgIHpvb206IDE2LFxuXG4gICAgLy8gVGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgdG8gY2VudGVyIHRoZSBtYXAgKGFsd2F5cyByZXF1aXJlZClcbiAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuODIxOTY1LCAzNy41ODM4MzQpLFxuICAgIHNjcm9sbHdoZWVsOmZhbHNlLFxuICAgIHpvb21Db250cm9sOnRydWUsXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6ZmFsc2UsXG5cbiAgICAvLyBIb3cgeW91IHdvdWxkIGxpa2UgdG8gc3R5bGUgdGhlIG1hcC5cbiAgICAvLyBUaGlzIGlzIHdoZXJlIHlvdSB3b3VsZCBwYXN0ZSBhbnkgc3R5bGUgZm91bmQgb24gU25henp5IE1hcHMuXG4gICAgc3R5bGVzOiBbXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIndlaWdodFwiOiBcIjIuMDBcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5YzljOWNcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5tYW5fbWFkZVwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZWVlZWVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3YjdiN2JcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzI0Mzk5NFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMyNDM5OTRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwNzA3MDdcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIC8vIEdldCB0aGUgSFRNTCBET00gZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB5b3VyIG1hcFxuICAvLyBXZSBhcmUgdXNpbmcgYSBkaXYgd2l0aCBpZD1cIm1hcFwiIHNlZW4gYmVsb3cgaW4gdGhlIDxib2R5PlxuICB2YXIgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1tYXAnKTtcblxuICAvLyBDcmVhdGUgdGhlIEdvb2dsZSBNYXAgdXNpbmcgb3VyIGVsZW1lbnQgYW5kIG9wdGlvbnMgZGVmaW5lZCBhYm92ZVxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgLy8gTGV0J3MgYWxzbyBhZGQgYSBtYXJrZXIgd2hpbGUgd2UncmUgYXQgaXRcbiAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1LjgyNTg5NCwgMzcuNTk1MTM5KSxcbiAgICBtYXA6IG1hcCxcbiAgICBpY29uOidhc3NldHMvaW1nL21hcmtlci5zdmcnXG4gIH0pO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

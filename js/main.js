/* contact-map */
function initMap() {

  var map = new google.maps.Map(document.getElementById("page-map"), {
    zoom: 16,
    scrollwheel: false,
    center: {
      lat: 59.94135,
      lng: 30.32308
    }

  });

  var contactLatLng = {
    lat: 59.93879,
    lng: 30.32308
  };

  var contactLogo = {
    url: "img/icon-map-pointer.png"
  };

  var marker = new google.maps.Marker({
    position: contactLatLng,
    icon: contactLogo,
    draggable: true,
    map: map
  });

}

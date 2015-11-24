/* contact-map */
function initMap() {

  var map = new google.maps.Map(document.getElementById("page-map"), {
    zoom: 16,
    scrollwheel: false,
    center: {
      lat: 59.938794,
      lng: 30.323083
    }

  });

  var contactLatLng = {
    lat: 59.938794,
    lng: 30.323083
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

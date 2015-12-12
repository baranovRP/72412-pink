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
    draggable: false,
    map: map
  });
}

/* menu */
var PAGE_HEADER_BL = "page-header";
var PAGE_APPS_BL = "page-apps";

var TOGGLE_EL = "__toggle";
var NAV_WRAP_EL = "__nav-wrap";
var CONTAINER_EL = "__container";
var INNER_EL = "__inner";

var HIDDEN_STATE = "--hidden";
var CLOSE_STATE = "--close";
var OPEN_STATE = "--open";

var toggle = document.querySelector("." + PAGE_HEADER_BL + TOGGLE_EL);
var nav = document.querySelector("." + PAGE_HEADER_BL + NAV_WRAP_EL);
var headerContainer = document.querySelector("." + PAGE_HEADER_BL + CONTAINER_EL);
var headerInner = document.querySelector("." + PAGE_HEADER_BL + INNER_EL);
var pageApps = document.querySelector("." + PAGE_APPS_BL);


toggle.addEventListener("click", function(event) {
  event.preventDefault();

  if (isNavHidden()) {
    showNav();
  } else {
    hideNav();
  }
});


function isNavHidden() {
  return document.querySelector("." + PAGE_HEADER_BL + NAV_WRAP_EL + HIDDEN_STATE);
}

function showNav() {
  showToggle();
  showHeader();
  showMenu();
}


function hideNav() {
  hideToggle();
  hideHeader();
  hideMenu();
}


function showToggle() {
  toggle.classList.remove(PAGE_HEADER_BL + TOGGLE_EL + CLOSE_STATE);
  toggle.classList.add(PAGE_HEADER_BL + TOGGLE_EL + OPEN_STATE);
}

function hideToggle() {
  toggle.classList.remove(PAGE_HEADER_BL + TOGGLE_EL + OPEN_STATE);
  toggle.classList.add(PAGE_HEADER_BL + TOGGLE_EL + CLOSE_STATE);
}

function showHeader() {
  headerContainer.classList.add(PAGE_HEADER_BL + CONTAINER_EL + OPEN_STATE);
  headerInner.classList.add(PAGE_HEADER_BL + INNER_EL + OPEN_STATE);
}

function hideHeader() {
  headerContainer.classList.remove(PAGE_HEADER_BL + CONTAINER_EL + OPEN_STATE);
  headerInner.classList.remove(PAGE_HEADER_BL + INNER_EL + OPEN_STATE);
}

function showMenu() {
  nav.classList.remove(PAGE_HEADER_BL + NAV_WRAP_EL + HIDDEN_STATE);
  if (isAppsPresent()) {
    pageApps.classList.add(PAGE_APPS_BL + OPEN_STATE);
  }
}

function hideMenu() {
  if (isAppsPresent()) {
    pageApps.classList.remove(PAGE_APPS_BL + OPEN_STATE);
  }
  nav.classList.add(PAGE_HEADER_BL + NAV_WRAP_EL + HIDDEN_STATE);
}

function isAppsPresent() {
  return document.querySelector("." + PAGE_APPS_BL);
}

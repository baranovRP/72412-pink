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
var MODAL_CONTENT_BL = "modal-content";
var BTN_BL = "btn";

var TOGGLE_EL = "__toggle";
var NAV_WRAP_EL = "__nav-wrap";
var CONTAINER_EL = "__container";
var INNER_EL = "__inner";

var HIDDEN_STATE = "--hidden";
var CLOSE_STATE = "--close";
var OPEN_STATE = "--open";
var SHOW_STATE = "--show";
var FAILURE_STATE = "--failure";
var OK_STATE = "--ok";
var CONFIRM_STATE = "--confirmation";

var toggle = document.querySelector("." + PAGE_HEADER_BL + TOGGLE_EL);
var nav = document.querySelector("." + PAGE_HEADER_BL + NAV_WRAP_EL);
var headerContainer = document.querySelector("." + PAGE_HEADER_BL + CONTAINER_EL);
var headerInner = document.querySelector("." + PAGE_HEADER_BL + INNER_EL);
var pageApps = document.querySelector("." + PAGE_APPS_BL);

var desktopScreenSize = 960;


toggle.addEventListener("click", function(event) {
  event.preventDefault();

  if (isNavHidden()) {
    showNav();
  } else {
    hideNav();
  }
});

window.addEventListener("resize", function(event) {
  event.preventDefault();

  if (!isNavHidden() && isDesktop(desktopScreenSize)) {
    hideNav();
  }
});


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

function isNavHidden() {
  return document.querySelector("." + PAGE_HEADER_BL + NAV_WRAP_EL + HIDDEN_STATE);
}

function isAppsPresent() {
  return document.querySelector("." + PAGE_APPS_BL);
}

function isDesktop(size) {
  return window.matchMedia("(min-width: " + size + "px)").matches;
}


/* submit form */
var firstEl = 0;
var nameAttr = "name";

var form = document.querySelector("#form-registration");
var popupFailure = document.querySelector("." + MODAL_CONTENT_BL + FAILURE_STATE);
var popupSuccess = document.querySelector("." + MODAL_CONTENT_BL);
var buttonOk = document.querySelector("." + BTN_BL + OK_STATE);
var buttonConfirm = document.querySelector("." + BTN_BL + CONFIRM_STATE);
var outputDuration = document.getElementsByName("duration-days-output")[firstEl];
var outputPersons = document.getElementsByName("persons-output")[firstEl];

(function() {

  if (!("FormData" in window) || !("FileReader" in window) || !form) {
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);
    data.append(outputDuration.getAttribute(nameAttr), outputDuration.value);
    data.append(outputPersons.getAttribute(nameAttr), outputPersons.value);

    request(data, function(response) {
      console.log(response);
    });
  });

  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);

    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });

    xhr.addEventListener("load", function() {
      popupSuccess.classList.remove(MODAL_CONTENT_BL + HIDDEN_STATE);
      popupSuccess.classList.add(MODAL_CONTENT_BL + SHOW_STATE);
      form.reset();
    });

    xhr.addEventListener("error", function() {
      popupFailure.classList.remove(MODAL_CONTENT_BL + HIDDEN_STATE);
      popupSuccess.classList.add(MODAL_CONTENT_BL + SHOW_STATE);
    });

    xhr.send(data);
  }

  buttonConfirm.addEventListener("click", function(event) {
    event.preventDefault();
    popupSuccess.classList.remove(MODAL_CONTENT_BL + SHOW_STATE);
    popupSuccess.classList.add(MODAL_CONTENT_BL + HIDDEN_STATE);
  });

  buttonOk.addEventListener("click", function(event) {
    event.preventDefault();
    popupFailure.classList.remove(MODAL_CONTENT_BL + SHOW_STATE);
    popupFailure.classList.add(MODAL_CONTENT_BL + HIDDEN_STATE);
  });
})();


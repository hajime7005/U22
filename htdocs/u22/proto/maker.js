function initMap() {
    var uluru = {lat: 33.8455812, lng: 132.7633459};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
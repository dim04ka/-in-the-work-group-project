ymaps.ready(init);
    function init(){ 
        myMap = new ymaps.Map("map", {
        center: [53.910935, 27.556880],
        zoom: 16
    });  
    var myPlacemark = new ymaps.Placemark([53.910935, 27.556880], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [134, 110],
        iconImageOffset: [-70, -100]
    });
    myMap.geoObjects.add(myPlacemark);
    }
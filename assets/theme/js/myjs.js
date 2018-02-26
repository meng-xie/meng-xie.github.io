function myprint(){

  window.print();

}


function openMap() {
    var earthquakeAuth = {lat:37.335480, lng:-121.893028};
           
     var map = new google.maps.Map(document.getElementById('map-contact'), {
        zoom:12,
        center: earthquakeAuth
    });

    var marker = new google.maps.Marker({
    position: earthquakeAuth,
    map: map
    });

    var contentString = 
 
    	 ' <div  >'+
    	 '  <h4 class="no-margin-top font-alt">I am Here</h4>'+
    	 '  <p><i class="fa fa-map-marker"></i> <strong>Address:</strong> San Francisco</p>'+
    	 '  <p><i class="fa fa-mobile"></i> <strong>Phone:</strong> 415-629-1552 </p>'+
    	 ' <p><i class="fa fa-envelope"></i> <strong>Email:</strong> myxj128@gmail.com</p>'+
 
    	 ' </div>';
    var infowindow = new google.maps.InfoWindow({
           content: contentString
         });

         marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}
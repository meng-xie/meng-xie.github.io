
                    function openMap() {
                        var earthquakeAuth = {lat:37.773972, lng: -122.431297};

                                  var earthquakeAuth2 = {lat:39.580302, lng: -120.496080};
                                          var earthquakeAuth3 = {lat:37.580302, lng: -120.496080};
                         var map = new google.maps.Map(document.getElementById('map_canvas'), {
                            zoom:12,
                            center: earthquakeAuth
                        });

                        var marker = new google.maps.Marker({
                        position: earthquakeAuth,
                        map: map
                        });

                        var contentString = '<div id="content">'+
                      '<div id="siteNotice">'+
                      '</div>'+

                      '<div id="bodyContent">'+
                      '<p><strong> I live in here! </strong></p>'+

                      '</div>'+
                      '</div>';
                        var infowindow = new google.maps.InfoWindow({
                               content: contentString
                             });

                             marker.addListener('click', function() {
                              infowindow.open(map, marker);
                            });
                    }

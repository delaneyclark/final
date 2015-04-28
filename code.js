$(document).ready(function(){
              $.getJSON("http://cooper-union-stars-proxy.herokuapp.com/api/v1/stars", 
                  function(response) {
           		console.log(response);

            		for(var i=0; i<500; i++) {
  							console.log(response[i].colorb_v);
					// 	if ( == 1) {
							
					// 	} else if () {

					// 	} else if () {

					// 	} else {
							
					// 		}
					};
                    }    
                    
                   )     
            
            
            })
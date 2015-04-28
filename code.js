$(document).ready(function(){
              $.getJSON("http://cooper-union-stars-proxy.herokuapp.com/api/v1/stars", 
                  function(response) {
           		console.log(response);

            		for(var i=0; i<500; i++) {
  							console.log(response[i].colorb_v);

						if (response[i].colorb_v === -0.32 ) { 
							$("ul").append("<div style=\"background-color:#9bb0ff\"></div>" )

						} else if (response[i].colorb_v <= )
					// 	} else if () {

					// 	} else if () {

					// 	} else {
							
					// 		}
					};
                    }    
                    
                   )     
            
            
            })
$(document).ready(function(){
              $.getJSON("http://cooper-union-stars-proxy.herokuapp.com/api/v1/stars", 
                  function(response) {
           		console.log(response);

                    }    

                   )     
            
            
            })
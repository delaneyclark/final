$(document).ready(function(){
              $.getJSON("http://cooper-union-stars-proxy.herokuapp.com/api/v1/stars", 
                  function(response) {
           		console.log(response);


            		for(var i=0; i<87; i++) {
  						console.log(response[i].colorb_v);
						if (response[i].colorb_v === -0.32 ) { 

							// response[i].x
						$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +"style=\"background-color:#9bb0ff\"></div>")

							
						} else if (response[i].colorb_v <= -0.30 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#a2b8ff\"></div>")
							
							
						} else if (response[i].colorb_v <= -0.28 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#9db1ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.26 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#9db1ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.24 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#9ab2ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.22 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#a4baff\"></div>")
							

						} else if (response[i].colorb_v <= -0.20 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#9cb2ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.18 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"backgrouivnd-color:#a7bcff\"></div>")
							

						} else if (response[i].colorb_v <= -0.16 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#a0b6ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.14 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#a0b4ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.12 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#a5b9ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.10 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#a4b8ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.8 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#aabfff\"></div>")
							

						} else if (response[i].colorb_v <= -0.6 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#acbdff\"></div>")
							

						} else if (response[i].colorb_v <= -0.4 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#adbfff\"></div>")
							

						} else if (response[i].colorb_v <= -0.2 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#b1c3ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.1 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#b5c6ff\"></div>")
							

						} else if (response[i].colorb_v <= 0 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#b9c9ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.04 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#b5c7ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.06 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#bbcbff\"></div>")
							

						} else if (response[i].colorb_v <= 0.08 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#bfcfff\"></div>")
							

						} else if (response[i].colorb_v <= 0.12 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#cad7ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.16 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#c7d4ff \"></div>")
							

						} else if (response[i].colorb_v <= 0.20 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#c8d5ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.24 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#d5deff\"></div>")
							

						} else if (response[i].colorb_v <= 0.28 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#dbe0ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.31 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#e0e5ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.35 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ecefff\"></div>")
							

						} else if (response[i].colorb_v <= 0.39 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#e0e2ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.43 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#f8f7ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.47 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#f4f1ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.50 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#f6f3ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.53 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff7fc\"></div>")
							

						} else if (response[i].colorb_v <= 0.56 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff7fc\"></div>")
							

						} else if (response[i].colorb_v <= 0.59 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff8fc\"></div>")
							

						} else if (response[i].colorb_v <= 0.62 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff7f8\"></div>")
							

						} else if (response[i].colorb_v <= 0.65 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff5f2\"></div>")
							

						} else if (response[i].colorb_v <= 0.68 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff1e5\"></div>")
							

						} else if (response[i].colorb_v <= 0.71 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff4ea\"></div>")
							

						} else if (response[i].colorb_v <= 0.74 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ff4eb\"></div>")
							

						} else if (response[i].colorb_v <= 0.77 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#fff4eb\"></div>")
							

						} else if (response[i].colorb_v <= 0.80 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffedde\"></div>")
							

						} else if (response[i].colorb_v <= 0.81 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffefdd\"></div>")
							

						} else if (response[i].colorb_v <= 0.82 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffeedd\"></div>")
							

						} else if (response[i].colorb_v <= 0.89 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffe0bc\"></div>")
							

						} else if (response[i].colorb_v <= 0.96 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffe3c4\"></div>")
							

						} else if (response[i].colorb_v <= 1.03 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffdec3\"></div>")
							

						} else if (response[i].colorb_v <= 1.09 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffd8b5\"></div>")
							

						} else if (response[i].colorb_v <= 1.17 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffd2a1\"></div>")
							

						} else if (response[i].colorb_v <= 1.24 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffc78e\"></div>")
							

						} else if (response[i].colorb_v <= 1.31 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffd1ae\"></div>")
							

						} else if (response[i].colorb_v <= 1.41 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffc38b\"></div>")
							

						} else if (response[i].colorb_v <= 1.48 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffcc8e\"></div>")
							

						} else if (response[i].colorb_v <= 1.53 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffc483\"></div>")
							

						} else if (response[i].colorb_v <= 1.64 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffce81\"></div>")
							

						} else if (response[i].colorb_v <= 1.75 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffc97f\"></div>")
							

						} else if (response[i].colorb_v <= 1.85 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffcc6f\"></div>")
							

						} else if (response[i].colorb_v <= 1.96 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffc370\"></div>")
							

						} else if (response[i].colorb_v <= 2.00 ) { 
							$("ul").append("<div data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z +" style=\"background-color:#ffc66d\"></div>")
							

						} else { $("ul").append("<div style=\"background-color:#ababa\"></div>")
							}
						
					};

							$("div").click(function() {

								var x = $(this).attr("data-x");
								var y = $(this).attr("data-y");
								var z = $(this).attr("data-z");

							 	$("body").append("<p>" + x + "</p>");
							 	$("body").append("<p>" + y + "</p>");
							 	$("body").append("<p>" + z + "</p>")
							 })

								$("#hello").click(function(item){
					console.log($(this).attr("data-x"))
				})


                    }    
                    
                   )     
            
            
            })
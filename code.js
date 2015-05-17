$(document).ready(function(){
              $.getJSON("http://cooper-union-stars-proxy.herokuapp.com/api/v1/stars", 
                  function(response) {
           		console.log(response);


            		for(var i=0; i<493; i++) {
  						console.log(response[i].colorb_v);
						if (response[i].colorb_v === -0.32 ) { 

							// response[i].x
						$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#9bb0ff\"></div>")

							
						} else if (response[i].colorb_v <= -0.30 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a2b8ff\"></div>")
							
							
						} else if (response[i].colorb_v <= -0.28 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#9db1ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.26 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#9db1ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.24 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#9ab2ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.22 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a4baff\"></div>")
							

						} else if (response[i].colorb_v <= -0.20 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#9cb2ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.18 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a7bcff\"></div>")
							

						} else if (response[i].colorb_v <= -0.16 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a0b6ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.14 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a0b4ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.12 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a5b9ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.10 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#a4b8ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.8 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#aabfff\"></div>")
							

						} else if (response[i].colorb_v <= -0.6 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#acbdff\"></div>")
							

						} else if (response[i].colorb_v <= -0.4 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#adbfff\"></div>")
							

						} else if (response[i].colorb_v <= -0.2 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#b1c3ff\"></div>")
							

						} else if (response[i].colorb_v <= -0.1 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#b5c6ff\"></div>")
							

						} else if (response[i].colorb_v <= 0 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#b9c9ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.04 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#b5c7ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.06 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#bbcbff\"></div>")
							

						} else if (response[i].colorb_v <= 0.08 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#bfcfff\"></div>")
							

						} else if (response[i].colorb_v <= 0.12 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#cad7ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.16 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#c7d4ff \"></div>")
							

						} else if (response[i].colorb_v <= 0.20 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#c8d5ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.24 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#d5deff\"></div>")
							

						} else if (response[i].colorb_v <= 0.28 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#dbe0ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.31 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#e0e5ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.35 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ecefff\"></div>")
							

						} else if (response[i].colorb_v <= 0.39 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#e0e2ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.43 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#f8f7ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.47 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#f4f1ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.50 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#f6f3ff\"></div>")
							

						} else if (response[i].colorb_v <= 0.53 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff7fc\"></div>")
							

						} else if (response[i].colorb_v <= 0.56 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff7fc\"></div>")
							

						} else if (response[i].colorb_v <= 0.59 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff8fc\"></div>")
							

						} else if (response[i].colorb_v <= 0.62 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff7f8\"></div>")
							

						} else if (response[i].colorb_v <= 0.65 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff5f2\"></div>")
							

						} else if (response[i].colorb_v <= 0.68 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff1e5\"></div>")
							

						} else if (response[i].colorb_v <= 0.71 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff4ea\"></div>")
							

						} else if (response[i].colorb_v <= 0.74 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ff4eb\"></div>")
							

						} else if (response[i].colorb_v <= 0.77 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#fff4eb\"></div>")
							

						} else if (response[i].colorb_v <= 0.80 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffedde\"></div>")
							

						} else if (response[i].colorb_v <= 0.81 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffefdd\"></div>")
							

						} else if (response[i].colorb_v <= 0.82 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffeedd\"></div>")
							

						} else if (response[i].colorb_v <= 0.89 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffe0bc\"></div>")
							

						} else if (response[i].colorb_v <= 0.96 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffe3c4\"></div>")
							

						} else if (response[i].colorb_v <= 1.03 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffdec3\"></div>")
							

						} else if (response[i].colorb_v <= 1.09 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffd8b5\"></div>")
							

						} else if (response[i].colorb_v <= 1.17 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffd2a1\"></div>")
							

						} else if (response[i].colorb_v <= 1.24 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffc78e\"></div>")
							

						} else if (response[i].colorb_v <= 1.31 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffd1ae\"></div>")
							

						} else if (response[i].colorb_v <= 1.41 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffc38b\"></div>")
							

						} else if (response[i].colorb_v <= 1.48 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffcc8e\"></div>")
							

						} else if (response[i].colorb_v <= 1.53 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffc483\"></div>")
							

						} else if (response[i].colorb_v <= 1.64 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffce81\"></div>")
							

						} else if (response[i].colorb_v <= 1.75 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffc97f\"></div>")
							

						} else if (response[i].colorb_v <= 1.85 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffcc6f\"></div>")
							

						} else if (response[i].colorb_v <= 1.96 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffc370\"></div>")
							

						} else if (response[i].colorb_v <= 2.00 ) { 
							$("ul.colors").append("<div class=\"color\" data-x = " +response[i].x + " data-y = " +response[i].y + " data-z = " +response[i].z + " data-label = " + response[i].label + " style=\"background-color:#ffc66d\"></div>")
							

						} else { $("ul.colors").append("<div class=\"color\" style=\"background-color:#ababa\"></div>")
							}
						
					};

							$("div.color").click(function() {

								

								var x = $(this).attr("data-x");
								var y = $(this).attr("data-y");
								var z = $(this).attr("data-z");
								var label = $(this).attr("data-label");

								
								$("div.title").html("<h1 id=\"name\">That is the " + label + " star</h1>");
							 	$("ul.xyz").html("<li id=\"loc\">" + x + "</li><li id=\"loc\">" + y + "</li><li id=\"loc\">" + z + "</li>");
							 	
							 	
							 	// $("ul.title").toggleId("show")
							 })

							$("div.question").click(function() {

							})

							
							// $("p").live('a', 'click', function() {

							// 	$("div").toggleClass("show")

							// })
						


								$("#data").click(function(item){
					console.log($(this).attr("data-x"))
				})


                    }    
                    
                   )     
            
            
            })

												
						var ctx;										
						var ad=10;			
						var ae=10;
						var ac=10;
						var ab=10;				
					 var x=10;
					 var y=10;
					 var w=100;
					 var h=100;
					 var canvas;
					 var can;
					 var dir;
					 var dis;
					 var fnr;
						var cfn;
						var ay=10;
						var ax=10;
						
						loop();
						function loop(){								
						can=document.getElementById("tc");
						ctx=can.getContext("2d");								
						ctx.clearRect(x, y, w, h);											
						ctx.fillStyle = "blue";														
						ctx.fillRect(x , y, w, h);
						requestAnimationFrame(loop) 
				
						} 						
						function fr(){
						
						} 
						
																
		
										 
			
			$('#dir').on('touchstart',function(){ 
			dis=1;		
			dire();
							console.log("dir=1")			
								
							 }); 
			$('#dir').on('touchend',function(){
			console.log("2");
			dis=2;
			 });
			 		$('#esq').on('touchstart',function(){ 
			esq=1;		
		 esqu();
							console.log("esq=1")			
								
							 }); 
			$('#esq').on('touchend',function(){
			console.log("esq=2");
			esq=2;
			 });
			 $('#cim').on('touchstart',function(){ 
			cim=1;		
		 cima();
							console.log("cim=1")			
								
							 }); 
			$('#cim').on('touchend',function(){
			console.log("cim=2");
			cim=2;
			 });
			$('#bax').on('touchstart',function(){ 
			bax=1;		
		 baix();
							console.log("bax=1")			
								
							 }); 
			$('#bax').on('touchend',function(){
			console.log("bax=2");
			bax=2;
			 });
		function dire(){
		if(dis==1) {

									ctx.clearRect(x, y, w, h);
																ax=ax+1;											
										x=ax;						
									
													
									
										setTimeout(dire, 0,1)	;
										}
					
		}
function esqu(){
		if(esq==1) {

									ctx.clearRect(x, y, w, h);
																ax=ax-1;															
										x=ax;						
									
													
									
										setTimeout(esqu, 0,1)	;
										}
					
		}
		function cima(){
		if(cim==1) {

									ctx.clearRect(x, y, w, h);
																ay=ay-1;															
										y=ay;						
									
													
									
										setTimeout(cima, 0,1)	;
										}
					
		}
		function baix(){
		if(bax==1) {

									ctx.clearRect(x, y, w, h);
																ay=ay+1;															
										y=ay;						
									
													
									
										setTimeout(baix, 0,1)	;
										}
					
		}
				
											

						
						
												

											

						
						
												
		
											

						
						
												

											

						
						
												

$(document).ready(function(){
	
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');

	var image = new Image(450, 268);   // using optional size for image
	image.onload = drawImageActualSize; // draw when image has loaded

	// load an image of intrinsic size 300x227 in CSS pixels
	image.src = 'images/diano.png';
var imgWidth;
var imgHeight;
	function drawImageActualSize() {
	  // use the intrinsic size of image in CSS pixels for the canvas element
	  canvas.width = this.naturalWidth;
	  canvas.height = this.naturalHeight;

	  // will draw the image as 300x227 ignoring the custom size of 60x45
	  // given in the constructor
	  ctx.drawImage(this, 0, 0);

	  // To use the custom size we'll have to specify the scale parameters 
	  // using the element's width and height properties - lets draw one 
	  // on top in the corner:
	  ctx.drawImage(this, 0, 0, this.width, this.height);
	  
	} 
	
	$('#mycanvas').click(function(e){
		var x = e.clientX;
		var y = e.clientY ;  
		console.log(x,"--",y);
		
	});

	
	var imgData,
     width = 281,
    height = 364;
var imgPos;
var xVal,yVal;
	$('#snail').bind('mousemove', function(ev){
		if(!imgData){ initCanvas(); }
		imgPos = $(this).offset();
		
		xVal = ev.pageX - imgPos.left;
		yVal = ev.pageY - imgPos.top;
		var mousePos = {x : ev.pageX - imgPos.left, y : ev.pageY - imgPos.top};//
		var pixelPos = 1*(mousePos.x + height*mousePos.y);
		var alpha = imgData.data[pixelPos+1];
			console.log('Opacity = ' + ((100*alpha/255) << 0) + '%');
			
	});

	function initCanvas(){
		var canvas = $('<canvas width="'+width+'" height="'+height+'" />')[0],
			ctx = canvas.getContext('2d');

		ctx.drawImage($('#snail')[0], 0, 0);
		imgData = ctx.getImageData(0, 0, width, height);
		console.log(ctx.getImageData(xVal,yVal,1,1).data[3])
		
	}
});

$(document).ready(function(){
	var arcArr = [[50,30,1],[240,30,2],[50,120,3],[240,120,4]];
	var textArr = [[1,46,34],[2,236,34],[3,236,124],[4,46,124]];
	
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	/*for(var i = 0;i<4;i++){
		ctx.className = "mystyle"; 
		ctx.beginPath();
		ctx.arc(arcArr[i][0], arcArr[i][1], 10, 0, 2 * Math.PI);
		var grd = ctx.createLinearGradient(0, 0, 500, 0);
		grd.addColorStop(0, "red");
		grd.addColorStop(1, "white");
		// Fill with gradient
		ctx.strokeStyle = "blue";
		//ctx.fillStyle   = fillColor;
		ctx.lineWidth   = 3;
		ctx.fillStyle = "red"; //grd
		ctx.font = "18px Georgia";
		ctx.fillText(textArr[i][0],textArr[i][1],textArr[i][2]); 
		//ctx.fill();
		ctx.stroke(); 
	}
	$(".mystyle").on("click",function(){
		alert("here");
	});*/
	$('<div class="iviewer_image_mask" style="position:absolute;width:50px;height:50px;border:1px solid red"></div>').appendTo("#mycanvas");
});

function createWaterFall(areaDom,urls,everyWidth){
	var colNumber;
	var gap;
	
	createImgDoms(); 
	setImgPosition();
	
	
	function createImgDoms (){
		for(var i=0;i<urls.length; i++){
			var url=urls[i];
			var img=document.createElement("img");
			img.src=url;
			img.style.width=everyWidth+'PX';
			img.style.position='absolute';
			img.onload=function(){
				setImgPosition();
			}
			areaDom.appendChild(img);
		}
	}
	
	var timer=null;
	window.onresize=function(){
		if(timer){
			clearInterval(timer);
		}
		timer=setTimeout(function(){
			
			setImgPosition();
		},500);
		
		setImgPosition
	}
	
	function cal(){
		var containerWidth=parseInt(areaDom.clientWidth);
		colNumber=Math.floor(containerWidth/everyWidth);//算出列数
		var space=containerWidth-colNumber*everyWidth;
		gap=space/(colNumber+1);
	}
	
	
	function setImgPosition () {
		cal();
		var colY=new Array(colNumber);
		colY.fill(0);
		for (var i=0; i<areaDom.children.length; i++) {
			var img=areaDom.children[i];
			
		var	y = Math.min(...colY);//找出数组中最小的一个
		
		
		var index=colY.indexOf(y);
		var x=(index+1)*gap+index*everyWidth;
		
		img.style.left=x+'px';
		img.style.top=y+'px';
		
		colY[index]+=parseInt(img.height)+gap;
		
		
		
		
		}
		
		var height=Math.max(...colY);
		areaDom.style.height=height+'px';
		
		
		
	}
}

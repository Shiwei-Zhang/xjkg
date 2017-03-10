var $ = require('../utils/jquery-3.1.1.min.js');
var scrollMyself={
	drewScroll:	function drag(drageEle,direction){
		console.log($('.scrollBarBottom'))
		var oBox=drageEle;  
		var direction=direction || undefined;
    oBox.onmousedown=down;
    var disX=null;
    var disY=null;
    function down(e){
        e=e || window.event;
        disX=e.clientX-this.offsetLeft;
        disY=e.clientY-this.offsetTop;
        if(this.setCapture){
            this.setCapture();
            oBox.onmousemove=move;
            oBox.onmouseup=up;
        }else {
            var _this=this;
            document.onmousemove=function(){
                move.call(_this)
            };
            document.onmouseup=function(){
                up.call(_this)
            };
            e.preventDefault();
        }

    }
		

    function move(e){
    
        e=e || window.event;
      
        var T=e.clientY-disY;
        var L=e.clientX-disX+"px";
        
        if(parseFloat(L)<=0){
        	L=0;
        }else if(parseFloat(L)>=270){
        	L=270
        }
        if(parseFloat(T)<=45){
        	$(oBox).siblings(".tableBox").children()[0].style.top=0;
        	return 0
        	
        }else if(parseFloat(T)>=140){
        	$(oBox).siblings(".tableBox").children()[0].style.top=140;
        }
//       L = L/100  + 'rem';
            T = T/100 + 0.1 + 'rem';
        if(direction=="left"){
        	this.style.left= L;
//      	$listContainer.css("left","-"+L);
			//oBox.siblings('table')
			$(oBox).siblings(".tableBox").children()[0].style.left="-"+L;
			$(oBox).siblings(".tableBox").children()[0].style.marginLeft='0.17rem';
			$(oBox).siblings(".trafficList_title").find('.table_title')[0].style.left="-"+L;
        	//$tableT.css("left","-"+L);
        	return;
        }else if(direction=="top"){
        	this.style.top= T;
        	//$listContainer.css("top","-"+T);
        	$(oBox).siblings(".tableBox").children()[0].style.top="-"+T;
        	return;
        }
        this.style.left= L;
        this.style.top= T;
    }
    function up(){
        if(this.releaseCapture){
            this.releaseCapture();
            this.onmousemove=null;
            this.onmouseup=null;
        }else {
            document.onmousemove=null;
            document.onmouseup=null;
        }

    }
	}
		
	
}

module.exports = scrollMyself;
	
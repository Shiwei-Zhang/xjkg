var $ = require('../utils/jquery-3.1.1.min.js');
var scrollMyself2={
	drewScroll:function drag(drageEle,direction, moveEle) {
	    var parentDomHeight = $(moveEle.parent()).height();
	    var moveDomHeight = moveEle.height();
        var oBox = drageEle;
        var direction = direction || undefined;
        oBox.onmousedown = down;
        var disX = null;
        var disY = null;
        function down(e) {
            e = e || window.event;
            disX = e.clientX - this.offsetLeft;
            disY = e.clientY - this.offsetTop;
            if (this.setCapture) {
                this.setCapture();
                oBox.onmousemove = move;
                oBox.onmouseup = up;
            } else {
                var _this=this;
                document.onmousemove = function(){
                    move.call(_this)
                };
                document.onmouseup = function(){
                    up.call(_this)
                };
                e.preventDefault();
            }
        }
        function move(e){
            e = e || window.event;
            var L = e.clientX - disX;
            var T = e.clientY - disY;
            // TODO 先写一个默认值 后期根据表格高度重新定义
            if (parseFloat(T) <= 45){
            	moveEle.css("top", 0);
                return;
            } else if(parseFloat(T) >= 200){
                return;
            }
            L = L/100  + 'rem';
            T = T/100 + 0.1;
            if (direction === "left" ) {
                this.style.left = L;
                moveEle.css("left", "-" + L);
                return;
            } else if (direction === "top"){
                this.style.top =  T + 'rem';
                moveEle.css("top", "-" + (T * parseInt(moveDomHeight / parentDomHeight, 10)) + 'rem');
                return;
            }
            this.style.left = L;
            this.style.top = T;
        }
        function up() {
            if (this.releaseCapture) {
                this.releaseCapture();
                this.onmousemove = null;
                this.onmouseup = null;
            } else {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }

   

   
	
}

module.exports = scrollMyself2;
	
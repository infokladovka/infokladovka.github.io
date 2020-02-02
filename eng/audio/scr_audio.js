
		var arr_shelf=[];
		var b_start=false;
		
window.onload=function(){
}

		window.onresize=recount_margin;	
		
		height_table=document.getElementById("table");
		height_lChair=document.getElementById("l_chair");
		height_rChair=document.getElementById("r_chair");
		height_center=document.getElementById("center");
		height_left=document.getElementById("left");
		height_right=document.getElementById("right");
		width_content=document.getElementById("content");
		width_l_frame=document.getElementById("l_frame");
		width_r_frame=document.getElementById("r_frame");
		width_l_chair=document.getElementById("l_chair");
		width_r_chair=document.getElementById("r_chair");
		width_left=document.getElementById("left");
		width_right=document.getElementById("right");
		width_header=document.getElementById("header");
		width_floor=document.getElementById("floor");
		width_footer=document.getElementById("footer");
		
		arr_shelf = getElementsByClassName(document.body,'shelf');		
		int_shelf=arr_shelf.length;
		
		document.getElementById("cbut_home").onclick=butClick;
		document.getElementById("cbut1").onclick=butClick;
		document.getElementById("cbut2").onclick=butClick;
		document.getElementById("cbut3").onclick=butClick;
		document.getElementById("cbut4").onclick=butClick;
		
			var myWidth = 0, myHeight = 0;
			var int1=0;
			
		recount_margin();
		recount_height();

//---------------------reference on page------------------
		function butClick(){
			switch(this.id){
			case "cbut_home" : window.location.href="../../index.html";berak;
			case "cbut1" : window.location.href="../books/index.html";berak;
			//case "cbut2" : window.location.href="../audio/index.html";berak;
			case "cbut3" : window.location.href="../video/index.html";berak;
			case "cbut4" : window.location.href="../others/index.html";berak;
			}
		}

//--------------------------------------------------------
//-----------------------------------count height------------------------------
		function getElementsByClassName(node, classname) {
			var a = [];
			var re = new RegExp('(^| )'+classname+'( |$)');
			var els = node.getElementsByTagName("*");
			for(var i=0,j=els.length; i<j; i++)
				if(re.test(els[i].className))a.push(els[i]);
			return a;
		}
 /*если вам нужна только поддержка IE8 +, тогда это будет работать:

if(!document.getElementsByClassName) {
    document.getElementsByClassName = function(className) {
        return this.querySelectorAll("." + className);
    };
    Element.prototype.getElementsByClassName = document.getElementsByClassName;
}
Используйте его, как обычно:

var tabs = document.getElementsByClassName('tab');
*/

		function recount_height(){
			height_center.style.height=int_shelf*345+200+"px";
			height_left.style.height=int_shelf*345+200+"px";
			height_right.style.height=int_shelf*345+200+"px";
			height_table.style.top=int_shelf*345+250+"px";
			//height_table.style.top=int_shelf*345-95+"px";
			height_lChair.style.top=int_shelf*345+42-500+"px";
			height_rChair.style.top=int_shelf*345+42-500+"px";
		}
//----------------------------------------------------------------------------------
		
		function recount_margin(){
			
			
			alertSize();
			var int_width=myWidth-1322;
			var int_width_side=int_width/2;
			if(int_width < 2){
			width_left.style.width=310+"px";
			width_right.style.width=310+"px";
			width_content.style.width=1322+"px";
			width_header.style.width=1322+"px";
			width_footer.style.width=1322+"px";
			}else {
				width_left.style.width=int_width_side+310+"px";
				width_right.style.width=int_width_side+310+"px";
				width_content.style.width=myWidth+"px";
				width_header.style.width=myWidth+"px";
				width_footer.style.width=myWidth+"px";
			}
			
			var int_mrg=0;
			if(myWidth>1322 || b_start==false){
			b_start=true
			int_mrg=(myWidth-2000)/2;
			width_floor.style.marginLeft=int_mrg+"px";
			width_floor.style.minWidth=(-1*int_mrg+1322)+"px";
			}
			if(myWidth<1322){
				width_l_chair.style.marginLeft=-1*(396-310)+"px";
			}else{
				width_l_chair.style.marginLeft=int_width_side-86+"px";
			}
			
			if(myWidth<1322){
				width_l_frame.style.marginLeft=0+"px";
				width_r_frame.style.marginLeft=0+"px";
			}else{
				width_l_frame.style.marginLeft=(int_width_side)/2+"px";
				width_r_frame.style.marginLeft=(int_width_side)/2+"px";
			}  
		}
		
	function alertSize() {

  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth-17;
    myHeight = window.innerHeight;
    int1=1;
  } else if( document.documentElement && ( document.documentElement.clientWidth ||
document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
    int1=2;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
    int1=3;
  }
}
	
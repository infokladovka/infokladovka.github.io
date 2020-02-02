
		var arr_shelf=[];
		
//window.onload=function(){
		
		width_content=document.getElementById("content");
		height_center=document.getElementById("center");
		height_left=document.getElementById("left");
		height_right=document.getElementById("right");
		width_l_frame=document.getElementById("l_frame");
		width_r_frame=document.getElementById("r_frame");
		width_left=document.getElementById("left");
		width_right=document.getElementById("right");
		width_header=document.getElementById("header");
		width_floor=document.getElementById("floor");
		width_footer=document.getElementById("footer");
		arr_shelf = getElementsByClassName(document.body,'shelf');		
		int_shelf=arr_shelf.length;
		
		var content=document.getElementById("content");
		content.style.display="block";
		
		window.onresize=recount_margin;	
		document.getElementById("cbut_home").onclick=butHome;
		
		for(i=0; i<int_shelf; i++){
			//arr_shelf[i].id="img"+i;
			arr_shelf[i].onclick=download;	
		}
		
		
			var myWidth = 0, myHeight = 0;
			var int1=0;
			
		recount_margin();
		recount_height();
//}
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
			if(int_shelf<5){
				height_center.style.height=5*121+95+"px";
				height_left.style.height=5*121+95-50+"px";
				height_right.style.height=5*121+95-50+"px";
			}else{
				height_center.style.height=int_shelf*121+95+"px";
				height_left.style.height=int_shelf*121+95-50+"px";
				height_right.style.height=int_shelf*121+95-50+"px";	
			}
			
			
		}
//----------------------------------------------------------------------------------

//---------------------on click functions-------------------------------------------
		function butHome(){
			window.location.href = "../../../index.html";
		}
//-----------------------------------
		function download(){
			var a_href=this.firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("href");
			//alert("attribute= "+a_href);
			
			//window.location.href=a_href;
			window.open(a_href,"_blank");
			/*
			switch(this.id){
				case "img0": window.location.href="../books.html";break;
				case "img1": window.location.href="../audio.html";break;
				case "img2": window.location.href="../video.html";break;
				case "img3": window.location.href="../others.html";break;
				
			}*/
		}

//----------------------------------------------------------------------------------

//---------------------count width--------------------------------------------------		
		function recount_margin(){
			
			
			alertSize();
			var int_width=myWidth-1242;
			var int_width_side=int_width/2;
			if(int_width < 2){
			width_left.style.width=310+"px";
			width_right.style.width=310+"px";
			width_content.style.width=1242+"px";
			width_header.style.width=1242+"px";
			width_footer.style.width=1242+"px";
			}else {
				width_left.style.width=int_width_side+310+"px";
				width_right.style.width=int_width_side+310+"px";
				width_content.style.width=myWidth+"px";
				width_header.style.width=myWidth+"px";
				width_footer.style.width=myWidth+"px";
			}
			
			var int_mrg=0;
			if(myWidth>1242){
			int_mrg=(myWidth-2000)/2;
			width_floor.style.marginLeft=int_mrg+"px";
			width_floor.style.minWidth=(-1*int_mrg+1242)+"px";
			}else{
				width_floor.style.marginLeft=-380+"px";
				width_floor.style.minWidth=(380+1242)+"px";
			}
			if(myWidth<1242){
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
//-------------------------------------------------------------------------------------------
	
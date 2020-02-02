
		var arr_shelf=[];
		var arr_series=[];
		
window.onload=function(){
	
}
		
		var listH1 = document.getElementsByTagName("H1")
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
		var my_frame=document.getElementById('my_frame');
		var caption=document.getElementById('caption');
		arr_shelf = getElementsByClassName(document.body,'shelf');		
		int_shelf=arr_shelf.length;
		arr_series = getElementsByClassName(document.body,'num_series');		
		int_series=arr_series.length;
		
		var content=document.getElementById("content");
		content.style.display="block";
		
		window.onresize=recount_margin;	
		document.getElementById("cbut_home").onclick=butHome;
		
		
		for(i=0; i<int_series; i++){
			arr_series[i].id="num"+i;
			arr_series[i].onclick=new_frame;	
		}
		
		
			var myWidth = 0, myHeight = 0;
			var int1=0;
			
		recount_margin();
		recount_height();


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
			if(int_shelf<2){
				height_center.style.height=550+"px";
				height_left.style.height=550-50+"px";
				height_right.style.height=550-50+"px";
				listH1[0].style.marginTop=550-75-345+"px";
			}else{
				height_center.style.height=int_shelf*455-25+"px";
				height_left.style.height=int_shelf*455-25-50+"px";
				height_right.style.height=int_shelf*455-25-50+"px";	
			}
			
			
		}
//----------------------------------------------------------------------------------

//---------------------on click functions-------------------------------------------
		function butHome(){
			window.location.href = "../../../../../../index.html";
		}

//-----------------------------------
		function new_frame(){
			//var a_href=this.firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("href");
			//alert("attribute= "+a_href);
			
			//window.location.href=a_href;
			//window.open(a_href,"_blank");
			
			switch(this.id){
				case "num0": my_frame.src = "https://www.youtube.com/embed/LrhyihlqB-U";
					caption.innerHTML=this.innerHTML; break;
				case "num1": my_frame.src = "https://www.youtube.com/embed/85wd0n9g2HY";
					caption.innerHTML=this.innerHTML; break;
				case "num2": my_frame.src = "https://www.youtube.com/embed/kxzGEr5gGW4";
					caption.innerHTML=this.innerHTML; break;
				case "num3": my_frame.src = "https://www.youtube.com/embed/8MJFDVmO6q8";
					caption.innerHTML=this.innerHTML; break;
				case "num4": my_frame.src = "https://www.youtube.com/embed/ocoj1w-yuAg";
					caption.innerHTML=this.innerHTML; break;
				case "num5": my_frame.src = "https://www.youtube.com/embed/eIB06Swazs0";
					caption.innerHTML=this.innerHTML; break;
				case "num6": my_frame.src = "https://www.youtube.com/embed/p3G-lpdNwrc";
					caption.innerHTML=this.innerHTML; break;
				case "num7": my_frame.src = "https://www.youtube.com/embed/3qzE9_7a_EM";
					caption.innerHTML=this.innerHTML; break;
				case "num8": my_frame.src = "https://www.youtube.com/embed/PCVcDMv9dBc";
					caption.innerHTML=this.innerHTML; break;
				case "num9": my_frame.src = "https://www.youtube.com/embed/HBMLIwGE5vg";
					caption.innerHTML=this.innerHTML; break;
				case "num10": my_frame.src = "https://www.youtube.com/embed/3Y_0d4_hqUU";
					caption.innerHTML=this.innerHTML; break;
				case "num11": my_frame.src = "https://www.youtube.com/embed/6Z1fYUrAFk4";
					caption.innerHTML=this.innerHTML; break;
				case "num12": my_frame.src = "https://www.youtube.com/embed/zj4yg0WvjYU";
					caption.innerHTML=this.innerHTML; break;
				case "num13": my_frame.src = "https://www.youtube.com/embed/F7WUW2SIUWg";
					caption.innerHTML=this.innerHTML; break;
				case "num14": my_frame.src = "https://www.youtube.com/embed/leS4ejmxe90";
					caption.innerHTML=this.innerHTML; break;
				case "num15": my_frame.src = "https://www.youtube.com/embed/ptKqHiYeioE";
					caption.innerHTML=this.innerHTML; break;
				
				
			}
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
	
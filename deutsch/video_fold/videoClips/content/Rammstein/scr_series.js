
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
				//case "num0": my_frame.src = "https://www.youtube.com/embed/U5Y-qSrLZzA";
				case "num0": my_link = "https://archive.org/download/ichwillrammstein/Ich%20Will%20-%20Rammstein.mp4";
					my_frame.src ="frame2.html";
					caption.innerHTML=this.innerHTML; break;
				//case "num1": my_frame.src = "https://www.youtube.com/embed/dVP8tg3GVtA";
				case "num1": my_link = "https://thallium.cdn.apollostream.xyz/521cf9f7b8e050b86c8af299de260b12:2019082600:1394065122/flv/2bf27b37448c38e74fe1bd93b7fc4c56.mp4";
					my_frame.src ="frame.html";
					caption.innerHTML=this.innerHTML; break;
				case "num2": my_frame.src = "https://www.youtube.com/embed/XUx-bHxe48o";
					caption.innerHTML=this.innerHTML; break;
				case "num3": my_frame.src = "https://www.youtube.com/embed/QVNC2XYkeN8";
					caption.innerHTML=this.innerHTML; break;
				case "num4": my_frame.src = "https://www.youtube.com/embed/T-nOhblp-xI";
					caption.innerHTML=this.innerHTML; break;
				case "num5": my_frame.src = "https://www.youtube.com/embed/qUdVvwb6K58";
					caption.innerHTML=this.innerHTML; break;
				case "num6": my_frame.src = "https://www.youtube.com/embed/jdhso_BUVEk";
					caption.innerHTML=this.innerHTML; break;
				case "num7": my_frame.src = "https://www.youtube.com/embed/y6kCQe8321Q";
					caption.innerHTML=this.innerHTML; break;
				case "num8": my_frame.src = "https://www.youtube.com/embed/MCFnxtMgLUY";
					caption.innerHTML=this.innerHTML; break;
				case "num9": my_frame.src = "https://www.youtube.com/embed/R9Ssc0KFmmE";
					caption.innerHTML=this.innerHTML; break;
				case "num10": my_frame.src = "https://www.youtube.com/embed/GCoj1s8kE3g";
					caption.innerHTML=this.innerHTML; break;
				case "num11": my_frame.src = "https://www.youtube.com/embed/pr6MIwbdpWc";
					caption.innerHTML=this.innerHTML; break;
				case "num12": my_frame.src = "https://www.youtube.com/embed/z8-ha0nFRnk";
					caption.innerHTML=this.innerHTML; break;
				case "num13": my_frame.src = "https://www.youtube.com/embed/-bHvP5skD10";
					caption.innerHTML=this.innerHTML; break;
				case "num14": my_frame.src = "https://www.youtube.com/embed/LKHR643eflk";
					caption.innerHTML=this.innerHTML; break;
				case "num15": my_frame.src = "https://www.youtube.com/embed/6EoS4KkLShc";
					caption.innerHTML=this.innerHTML; break;
				case "num16": my_frame.src = "https://www.youtube.com/embed/JtwKypYDvx0";
					caption.innerHTML=this.innerHTML; break;
				case "num17": my_frame.src = "https://www.youtube.com/embed/SMDCtpZKuXM";
					caption.innerHTML=this.innerHTML; break;
				case "num18": my_frame.src = "https://www.youtube.com/embed/0a3F7NYXpmg";
					caption.innerHTML=this.innerHTML; break;
				case "num19": my_frame.src = "https://www.youtube.com/embed/Eaz8_rPEKZw";
					caption.innerHTML=this.innerHTML; break;
				case "num20": my_frame.src = "https://www.youtube.com/embed/JHFE5sB2ABw";
					caption.innerHTML=this.innerHTML; break;
				case "num21": my_frame.src = "https://www.youtube.com/embed/yKwF1mNuQOI";
					caption.innerHTML=this.innerHTML; break;
				case "num22": my_frame.src = "https://www.youtube.com/embed/0BGMok-ldt8";
					caption.innerHTML=this.innerHTML; break;
				case "num23": my_frame.src = "https://www.youtube.com/embed/xn-QlcyqH_w";
					caption.innerHTML=this.innerHTML; break;
				case "num24": my_frame.src = "https://www.youtube.com/embed/72zCVEqSH0w";
					caption.innerHTML=this.innerHTML; break;
				case "num25": my_frame.src = "https://www.youtube.com/embed/G7SB_lSXIF8";
					caption.innerHTML=this.innerHTML; break;
				case "num26": my_frame.src = "https://www.youtube.com/embed/LGPXJDLF-WA";
					caption.innerHTML=this.innerHTML; break;
				case "num27": my_frame.src = "https://www.youtube.com/embed/a3uQngm3ikQ";
					caption.innerHTML=this.innerHTML; break;
				case "num28": my_frame.src = "https://www.youtube.com/embed/omSmYr04TO4";
					caption.innerHTML=this.innerHTML; break;
				case "num29": my_frame.src = "https://www.youtube.com/embed/SqR0Z9q0Elo";
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
	

		var b_start=false;
		
window.onload=function(){

		window.onresize=recount_margin;	
		marg_content=document.getElementById("content");
		marg_header=document.getElementById("header");
		marg_main=document.getElementById("main");
	
			var myWidth = 0, myHeight = 0;
			var int1=0;
			
		recount_margin();	
}
		
		function recount_margin(){
			
			var int_mrg=0;
			alertSize();
			if(myWidth>700 || b_start==false){
			b_start=true
			int_mrg=(myWidth-1780)/2;
			marg_content.style.marginLeft=int_mrg+"px";
			marg_content.style.minWidth=(-1*int_mrg+700)+"px";
			marg_header.style.marginLeft=(-1*int_mrg)+"px";
			marg_main.style.marginLeft=(-1*int_mrg)+"px";
			}
		}
		
	function alertSize() {

  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
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
	
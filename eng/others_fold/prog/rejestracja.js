
const kolejka=8; //kolejka D=3; E=4; I=8;
const num_czas=1; //numer czasu na liscie 0 = first; 1 = second; 2 = third; ...
//const data_start="2019-08-15T00:00:00";
const data_start="2019-08-15T23:59:58";

//-----------------------------------------search footer button----------------
	var my_but_footer = document.getElementsByClassName("footer-btn");
	function click_footer_but(){
		my_but_footer[0].style.backgroundColor="red";
		my_but_footer[0].click();
	}	
	
//-----------------------------------------search next button----------------	
	var my_but_next = document.getElementsByClassName("next");
	function my_next(){
		my_but_next[0].click();
	}
//-----------------------------------------search day----------------	
	var my_but_day = document.getElementsByClassName("cell");
	length_cell=my_but_day.length-1;
	
	function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
	}
	function search_day(){
	for(i=0;i<=length_cell;i++){
		if((hasClass(my_but_day[i],"disabled")==false ) && (hasClass(my_but_day[i],"blank")==false )&& (hasClass(my_but_day[i],"day-header")==false )){
			my_but_day[i].style.backgroundColor="gold";
			my_but_day[i].click();
			return;
		}	
		}
	}
//---------------------------------------------------------------------
//-----------------------------------------search main choice----------------
	var my_but_info = document.getElementsByClassName("btn");
	
//-----------------------------------------click choice button----------------	
	function click_but(){
	my_but_info[kolejka].click();
	my_but_info[kolejka].style.backgroundColor="red";
	}
	
//-----------------------------------------choice time----------------
	var my_choice_time=document.getElementById("__BVID__15");
	function choice_time(){
		
		document.getElementById('__BVID__15').selectedIndex = num_czas;
		document.getElementById('__BVID__15').dispatchEvent(new Event('change'));
	}
	
//-----------------------------------------set and compare time----------------	
	var t_zad=new Date(data_start);
	t_zad=Date.parse(t_zad);
	var end=false;
	
	function compare_time(){
	var t_ms=new Date();
	t_ms=t_ms.getTime();
		if((t_ms>=t_zad) && end==false){
			end=true;
			start();
		}
	}
	
	function start(){
			var t=200;
			var t2=t+100;
			var t3=t2+100;
			var t4=t3+50;
			var t5=t4+500;
			var t6=t5+50;
			click_but();
			setTimeout(click_footer_but,t);
			setTimeout(my_next,t2);
			setTimeout(my_next,t3);
			setTimeout(search_day,t4);
			setTimeout(choice_time,t5);
			setTimeout(click_footer_but,t6);
			}

	setInterval(compare_time,100);
	//start();
	

	
	

	
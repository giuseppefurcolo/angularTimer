////Giuseppe Furcolo. Originally done on January 29, 2016 in New York.

/////////////////////////////SIZE&PLACING
function size() {
	var limit = 1500;
	var W = window.innerWidth;
  var H = window.innerHeight;
	var cH = document.getElementById("container").clientHeight;
	var cW = document.getElementById("container").clientWidth;
	var newtop = ((H/2)-(cH/2)).toString()+'px';
	var newleft = ((W/2)-(cW/2)).toString()+'px';
	var newW = (W).toString()+'px';
	var factor = W/limit;
	var factorstring = 'scale('+factor.toString()+')';

document.getElementById("container").style.top = newtop;
document.getElementById("container").style.left = newleft;
	if (W<limit) { 
	document.getElementById("container").style.WebkitTransform = factorstring;
	} else {
	document.getElementById("container").style.WebkitTransform = 1;
	}	
}

/////////////////////////////is even?
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

/////////////////////////////whatNext
        function whatNext() {
			var d = new Date;
			var h = d.getHours();
			var h_l; 
			var h_d;  
			if (h>9) { h_l = h.toString().substr(0, 1);} else {h_l = 0; }
			if (h>9) { h_d = h.toString().substr(1, 2);} else {h_d = h; }
			
			var m = d.getMinutes();
	  		var m_l; 
			var m_d;  
			if (m>9) { m_l = m.toString().substr(0, 1);} else {m_l = 0; }
			if (m>9) { m_d = m.toString().substr(1, 2);} else {m_d = m; }
			
			var s = d.getSeconds();
            var s_l; 
			var s_d;  
			if (s>9) { s_l = s.toString().substr(0, 1);} else {s_l = 0; }
			if (s>9) { s_d = s.toString().substr(1, 2);} else {s_d = s; }			

document.getElementById('box1line1').style.transform = 'rotate(' + value1[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line1').style.opacity = 0;
else document.getElementById('box1line1').style.opacity = 1;

document.getElementById('box1line2').style.transform = 'rotate(' + value2[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line2').style.opacity = 0;
else document.getElementById('box1line2').style.opacity = 1;

document.getElementById('box1line3').style.transform = 'rotate(' + value3[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line3').style.opacity = 0;
else document.getElementById('box1line3').style.opacity = 1;

document.getElementById('box1line4').style.transform = 'rotate(' + value4[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line4').style.opacity = 0;
else document.getElementById('box1line4').style.opacity = 1;

document.getElementById('box1line5').style.transform = 'rotate(' + value5[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line5').style.opacity = 0;
else document.getElementById('box1line5').style.opacity = 1;

document.getElementById('box1line6').style.transform = 'rotate(' + value6[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line6').style.opacity = 0;
else document.getElementById('box1line6').style.opacity = 1;

document.getElementById('box1line7').style.transform = 'rotate(' + value7[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line7').style.opacity = 0;
else document.getElementById('box1line7').style.opacity = 1;

document.getElementById('box1line8').style.transform = 'rotate(' + value8[s_d] + 'deg)';
if (s_d == 0) document.getElementById('box1line8').style.opacity = 0;
else document.getElementById('box1line8').style.opacity = 1;

if (s_d == 0) document.getElementById('box1line9').style.opacity = 0;
else document.getElementById('box1line9').style.opacity = 1;
 
/////////////////////////////////////////////////////////////////////END BOX 1
          
document.getElementById('box2line1').style.transform = 'rotate(' + value1[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line1').style.opacity = 0;
else document.getElementById('box2line1').style.opacity = 1;

document.getElementById('box2line2').style.transform = 'rotate(' + value2[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line2').style.opacity = 0;
else document.getElementById('box2line2').style.opacity = 1;

document.getElementById('box2line3').style.transform = 'rotate(' + value3[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line3').style.opacity = 0;
else document.getElementById('box2line3').style.opacity = 1;

document.getElementById('box2line4').style.transform = 'rotate(' + value4[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line4').style.opacity = 0;
else document.getElementById('box2line4').style.opacity = 1;

document.getElementById('box2line5').style.transform = 'rotate(' + value5[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line5').style.opacity = 0;
else document.getElementById('box2line5').style.opacity = 1;

document.getElementById('box2line6').style.transform = 'rotate(' + value6[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line6').style.opacity = 0;
else document.getElementById('box2line6').style.opacity = 1;

document.getElementById('box2line7').style.transform = 'rotate(' + value7[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line7').style.opacity = 0;
else document.getElementById('box2line7').style.opacity = 1;

document.getElementById('box2line8').style.transform = 'rotate(' + value8[s_l] + 'deg)';
if (s_l == 0) document.getElementById('box2line8').style.opacity = 0;
else document.getElementById('box2line8').style.opacity = 1;

if (s_l == 0) document.getElementById('box2line9').style.opacity = 0;
else document.getElementById('box2line9').style.opacity = 1;
          
/////////////////////////////////////////////////////////////////////END BOX 2

document.getElementById('box4line1').style.transform = 'rotate(' + value1[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line1').style.opacity = 0;
else document.getElementById('box4line1').style.opacity = 1;

document.getElementById('box4line2').style.transform = 'rotate(' + value2[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line2').style.opacity = 0;
else document.getElementById('box4line2').style.opacity = 1;

document.getElementById('box4line3').style.transform = 'rotate(' + value3[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line3').style.opacity = 0;
else document.getElementById('box4line3').style.opacity = 1;

document.getElementById('box4line4').style.transform = 'rotate(' + value4[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line4').style.opacity = 0;
else document.getElementById('box4line4').style.opacity = 1;

document.getElementById('box4line5').style.transform = 'rotate(' + value5[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line5').style.opacity = 0;
else document.getElementById('box4line5').style.opacity = 1;

document.getElementById('box4line6').style.transform = 'rotate(' + value6[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line6').style.opacity = 0;
else document.getElementById('box4line6').style.opacity = 1;

document.getElementById('box4line7').style.transform = 'rotate(' + value7[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line7').style.opacity = 0;
else document.getElementById('box4line7').style.opacity = 1;

document.getElementById('box4line8').style.transform = 'rotate(' + value8[m_d] + 'deg)';
if (m_d == 0) document.getElementById('box4line8').style.opacity = 0;
else document.getElementById('box4line8').style.opacity = 1;

if (m_d == 0) document.getElementById('box4line9').style.opacity = 0;
else document.getElementById('box4line9').style.opacity = 1;
          
/////////////////////////////////////////////////////////////////////END BOX4

document.getElementById('box5line1').style.transform = 'rotate(' + value1[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line1').style.opacity = 0;
else document.getElementById('box5line1').style.opacity = 1;

document.getElementById('box5line2').style.transform = 'rotate(' + value2[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line2').style.opacity = 0;
else document.getElementById('box5line2').style.opacity = 1;

document.getElementById('box5line3').style.transform = 'rotate(' + value3[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line3').style.opacity = 0;
else document.getElementById('box5line3').style.opacity = 1;

document.getElementById('box5line4').style.transform = 'rotate(' + value4[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line4').style.opacity = 0;
else document.getElementById('box5line4').style.opacity = 1;

document.getElementById('box5line5').style.transform = 'rotate(' + value5[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line5').style.opacity = 0;
else document.getElementById('box5line5').style.opacity = 1;

document.getElementById('box5line6').style.transform = 'rotate(' + value6[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line6').style.opacity = 0;
else document.getElementById('box5line6').style.opacity = 1;

document.getElementById('box5line7').style.transform = 'rotate(' + value7[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line7').style.opacity = 0;
else document.getElementById('box5line7').style.opacity = 1;

document.getElementById('box5line8').style.transform = 'rotate(' + value8[m_l] + 'deg)';
if (m_l == 0) document.getElementById('box5line8').style.opacity = 0;
else document.getElementById('box5line8').style.opacity = 1;

if (m_l == 0) document.getElementById('box5line9').style.opacity = 0;
else document.getElementById('box5line9').style.opacity = 1;
 
/////////////////////////////////////////////////////////////////////END box5

document.getElementById('box7line1').style.transform = 'rotate(' + value1[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line1').style.opacity = 0;
else document.getElementById('box7line1').style.opacity = 1;

document.getElementById('box7line2').style.transform = 'rotate(' + value2[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line2').style.opacity = 0;
else document.getElementById('box7line2').style.opacity = 1;

document.getElementById('box7line3').style.transform = 'rotate(' + value3[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line3').style.opacity = 0;
else document.getElementById('box7line3').style.opacity = 1;

document.getElementById('box7line4').style.transform = 'rotate(' + value4[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line4').style.opacity = 0;
else document.getElementById('box7line4').style.opacity = 1;

document.getElementById('box7line5').style.transform = 'rotate(' + value5[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line5').style.opacity = 0;
else document.getElementById('box7line5').style.opacity = 1;

document.getElementById('box7line6').style.transform = 'rotate(' + value6[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line6').style.opacity = 0;
else document.getElementById('box7line6').style.opacity = 1;

document.getElementById('box7line7').style.transform = 'rotate(' + value7[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line7').style.opacity = 0;
else document.getElementById('box7line7').style.opacity = 1;

document.getElementById('box7line8').style.transform = 'rotate(' + value8[h_d] + 'deg)';
if (h_d == 0) document.getElementById('box7line8').style.opacity = 0;
else document.getElementById('box7line8').style.opacity = 1;

if (h_d == 0) document.getElementById('box7line9').style.opacity = 0;
else document.getElementById('box7line9').style.opacity = 1; 
/////////////////////////////////////////////////////////////////////END box7

document.getElementById('box8line1').style.transform = 'rotate(' + value1[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line1').style.opacity = 0;
else document.getElementById('box8line1').style.opacity = 1;

document.getElementById('box8line2').style.transform = 'rotate(' + value2[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line2').style.opacity = 0;
else document.getElementById('box8line2').style.opacity = 1;

document.getElementById('box8line3').style.transform = 'rotate(' + value3[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line3').style.opacity = 0;
else document.getElementById('box8line3').style.opacity = 1;

document.getElementById('box8line4').style.transform = 'rotate(' + value4[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line4').style.opacity = 0;
else document.getElementById('box8line4').style.opacity = 1;

document.getElementById('box8line5').style.transform = 'rotate(' + value5[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line5').style.opacity = 0;
else document.getElementById('box8line5').style.opacity = 1;

document.getElementById('box8line6').style.transform = 'rotate(' + value6[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line6').style.opacity = 0;
else document.getElementById('box8line6').style.opacity = 1;

document.getElementById('box8line7').style.transform = 'rotate(' + value7[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line7').style.opacity = 0;
else document.getElementById('box8line7').style.opacity = 1;

document.getElementById('box8line8').style.transform = 'rotate(' + value8[h_l] + 'deg)';
if (h_l == 0) document.getElementById('box8line8').style.opacity = 0;
else document.getElementById('box8line8').style.opacity = 1;

if (h_l == 0) document.getElementById('box8line9').style.opacity = 0;
else document.getElementById('box8line9').style.opacity = 1;  
}

//ARRAY 1
var value1 = [], x = -1;
value1[0] = 0;
value1[1] = 0;
value1[2] = 90;
value1[3] = 360/3*2;
value1[4] = 360/4*3;
value1[5] = 360/5*4;
value1[6] = 360/6*5;
value1[7] = 360/7*6;
value1[8] = 360/8*7;
value1[9] = 360/9*8;

//ARRAY 2
var value2 = [], x = -1;
value2[0] = 0;
value2[1] = 0;
value2[2] = 0;
value2[3] = 120;
value2[4] = 360/4*2;
value2[5] = 360/5*3;
value2[6] = 360/6*4;
value2[7] = 360/7*5;
value2[8] = 360/8*6;
value2[9] = 360/9*7;

//ARRAY 3
var value3 = [], x = -1;
value3[0] = 0;
value3[1] = 0;
value3[2] = 0;
value3[3] = 0;
value3[4] = 360/4;
value3[5] = 360/5*2;
value3[6] = 360/6*3;
value3[7] = 360/7*4;
value3[8] = 360/8*5;
value3[9] = 360/9*6;

//ARRAY 4
var value4 = [], x = -1;
value4[0] = 0;
value4[1] = 0;
value4[2] = 0;
value4[3] = 0;
value4[4] = 0;
value4[5] = 360/5;
value4[6] = 360/6*2;
value4[7] = 360/7*3;
value4[8] = 360/8*4;
value4[9] = 360/9*5;

//ARRAY 5
var value5 = [], x = -1;
value5[0] = 0;
value5[1] = 0;
value5[2] = 0;
value5[3] = 0;
value5[4] = 0;
value5[5] = 0;
value5[6] = 360/6;
value5[7] = 360/7*2;
value5[8] = 360/8*3;
value5[9] = 360/9*4;

//ARRAY 6
var value6 = [], x = -1;
value6[0] = 0;
value6[1] = 0;
value6[2] = 0;
value6[3] = 0;
value6[4] = 0;
value6[5] = 0;
value6[6] = 0;
value6[7] = 360/7;
value6[8] = 360/8*2;
value6[9] = 360/9*3;

//ARRAY 7
var value7 = [], x = -1;
value7[0] = 0;
value7[1] = 0;
value7[2] = 0;
value7[3] = 0;
value7[4] = 0;
value7[5] = 0;
value7[6] = 0;
value7[7] = 0;
value7[8] = 360/8;
value7[9] = 360/9*2;

//ARRAY 8
var value8 = [], x = -1;
value8[0] = 0;
value8[1] = 0;
value8[2] = 0;
value8[3] = 0;
value8[4] = 0;
value8[5] = 0;	
value8[6] = 0;
value8[7] = 0;
value8[8] = 0;
value8[9] = 360/9;

function begin(){
	startTimer();
	dotterTimer();
}
	
function startTimer() {
	size();
	setInterval(whatNext, 1000);
	}
	
function dotterTimer() {
	
	setInterval(dotter, 500);
	}	
	
	var inc=1;
function dotter() {	
	inc = inc+1;
document.getElementById('dot1').style.opacity= 0;
if (isEven(inc) ){document.getElementById('dot1').style.opacity= 1;}

document.getElementById('dot2').style.opacity= 0;
if (isEven(inc) ){document.getElementById('dot2').style.opacity= 1;}

document.getElementById('dot3').style.opacity= 0;
if (isEven(inc) ){document.getElementById('dot3').style.opacity= 1;}

document.getElementById('dot4').style.opacity= 0;
if (isEven(inc) ){document.getElementById('dot4').style.opacity= 1;}
}

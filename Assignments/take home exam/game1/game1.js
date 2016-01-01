var o=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
var main = ['बाधाम','चौलाई','सेब','बेल','केले','काली बेरी','लौकी','बैंगन','पत्ता गोबी',' गाजर','शिताफल','अंगूर','अमरूद','कटहल','जामुन','आम']

var telugu = ['అ','ఆ','ఇ','ఈ','ఉ','ఊ','ఋ','ఎ','ఏ','ఐ','ఒ','ఓ','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఞ','ట','ఠ','డ','ఢ','ణ','త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ఱ','ల','ళ','వ','శ','ష','స','హ'];
var telugu_dict =['బాధం','అమర్నాథ్','ఆపిల్','మేడి పండు','అరటి పండు','నల్ల రేగు పండు','సొరకాయ','వంకాయ','క్యాబేజీ','క్యారెట్',' సీత ఫలం','ద్రాక్ష','జామ పండు','పనస పండు','నేరేడి పండు','మామిడి']
var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
var mainarray=o[0];
console.log(mainarray);
var z,x,y,X,Y,Z;
var word='';

document.getElementById("Score").innerHTML="Form " + "a " + "fruit_in_hindi " + "and " + "translate " + "it " + " to " + "other " + "language";

//console.log('juss outside setlanguage');
function restart()
{
var l ;
for(l=1;l<=5;l++)
{
		document.getElementById("1"+l).innerHTML = o[l-1]; 
	
}
for(l=1,z=5;l<=5;l++,z++)
{
		document.getElementById("2"+l).innerHTML = o[z]; 
}
for(l=1,y=10;l<=5;l++,y++)
{
		document.getElementById("3"+l).innerHTML = o[y];
		//y++; 
	
}
for(l=1,x=15;l<=5;l++,x++)
{
	//var x=15;
		document.getElementById("4"+l).innerHTML = o[x];
	//	x++; 
	
}
for(l=1,Z=20;l<=5;l++,Z++)
{
	//var Z=20;

		document.getElementById("5"+l).innerHTML = o[Z];
	//	Z++; 
	
}
for(l=1,Y=25;l<=5;l++,Y++)
{
	//var Y=25;
		document.getElementById("6"+l).innerHTML = o[Y];
	//	Y++; 
	
}
for(l=1,X=30;l<=5;l++,X++)
{
	//var X=30;
		document.getElementById("7"+l).innerHTML = o[X]; 
	//	X++;
	
}
for(l=1,W=35;l<=5;l++,W++)
{
		document.getElementById("8"+l).innerHTML = o[W]; 
	
}
for(l=1,w=40;l<=5;l++,w++)
{
		document.getElementById("9"+l).innerHTML = o[w]; 
	
}
for(l=1,v=45;l<=5;l++,v++)
{
		document.getElementById("10"+l).innerHTML = o[v]; 
	
}
for(l=1,V=50;l<=5;l++,V++)
{
		document.getElementById("11"+l).innerHTML = o[V]; 
	
}
document.getElementById("121").innerHTML=o[55];
}

function getdata(a,b)															
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML="Your " + "word: " + word;
	document.getElementById("Score").innerHTML='';
}
function Check()																// Check whether entered word is valid word or not.
{

	var flag=0;
	console.log(word);
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		flag=1;
document.write(telugu_dict[k]);
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Sorry!! " + "Word " + "not " + "found.";		// Word is not valid
	flag=0;
}

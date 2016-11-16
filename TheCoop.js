
var slide=0 /* Gallery i is the tracker for every picture */
var gallery = document.getElementById("picture")
var accordion=document.getElementsByClassName("accordion")
var pause = document.getElementById("pause")
images=["blackchicken.jpg","bantamchicken.jpg","crazychicken.jpg"]


var state='play'
console.log(state)
pause.onclick=function(){
	console.log(state)
	if (state=='play')
	{
		state='pause'
		pause.innerHTML='<img src="play.jpg">'
	}
	else{
		state='play'
		pause.innerHTML='<img src="pause.jpg">'
		slideshow()
	}
}

slideshow()

function slideshow(){
	console.log('working')
	if( state == 'play'){

		var pic='<img src="'+ images[slide]+'">'
			gallery.innerHTML=pic
			slide+=1;
			console.log(slide)
			if(slide==images.length){
				slide=0
			}
			setTimeout(slideshow, 3000); 
				
		}
	}






var i;//accordion
for (i=0; i<accordion.length; i++){
	accordion[i].onclick=function(){
		this.nextElementSibling.classList.toggle("show");
	}
}

function hovereffect(x){//chick profiles
	console.log(x)
	x.childNodes[1].style.visibility="visible"
	}

function disappear(y){
	y.childNodes[1].style.visibility="hidden"
}
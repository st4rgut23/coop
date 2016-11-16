
var slide=0 /* Gallery i is the tracker for every picture */
var gallery = document.getElementById("picture")
var accordion=document.getElementsByClassName("accordion")
var pause = document.getElementById("pause")
images=["images/gallery1.jpg","images/gallery2.jpg","images/gallery3.jpg"]


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
		gallery.className+="fadeOut";
		
		setTimeout(function(){
				gallery.src=images[slide];
				gallery.className="";
			},1000);
			slide+=1;
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
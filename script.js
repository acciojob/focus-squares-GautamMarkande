//your JS code here. If required.
const s1=document.getElementById('square1');
const s2=document.getElementById('square2');
const s3=document.getElementById('square3');

s1.addEventListener('mouseover',()=>{
	// s2.innerText = "ok"
	s1.style.backgroundColor="rgb(230, 230, 250)"
	s2.style.backgroundColor="rgb(111, 78, 55)"
	s3.style.backgroundColor="rgb(111, 78, 55)"
})
s2.addEventListener('mouseover',()=>{
	// s2.innerText = "ok"
	s2.style.backgroundColor="rgb(230, 230, 250)"
	s1.style.backgroundColor="rgb(111, 78, 55)"
	s3.style.backgroundColor="rgb(111, 78, 55)"
})
s3.addEventListener('mouseover',()=>{
	// s2.innerText = "ok"
	s3.style.backgroundColor="rgb(230, 230, 250)"
	s2.style.backgroundColor="rgb(111, 78, 55)"
	s1.style.backgroundColor="rgb(111, 78, 55)"
})

s1.addEventListener('mouseout',()=>{
	// s2.innerText = "ok"
	s3.style.backgroundColor="rgb(230, 230, 250)"
	s2.style.backgroundColor="rgb(230, 230, 250)"
	s1.style.backgroundColor="rgb(230, 230, 250)"
})
s2.addEventListener('mouseout',()=>{
	// s2.innerText = "ok"
	s3.style.backgroundColor="rgb(230, 230, 250)"
	s2.style.backgroundColor="rgb(230, 230, 250)"
	s1.style.backgroundColor="rgb(230, 230, 250)"
})
s3.addEventListener('mouseout',()=>{
	// s2.innerText = "ok"
	s3.style.backgroundColor="rgb(230, 230, 250)"
	s2.style.backgroundColor="rgb(230, 230, 250)"
	s1.style.backgroundColor="rgb(230, 230, 250)"
})




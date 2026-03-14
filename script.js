
function toggleMenu(){
let nav=document.getElementById('nav');
if(nav.style.display==='flex'){nav.style.display='none';}
else{nav.style.display='flex';}
}
document.querySelector('.booking-form').addEventListener('submit',function(e){
e.preventDefault();
alert('Your request has been sent. A Car 2 Serve mechanic will contact you shortly.');
});

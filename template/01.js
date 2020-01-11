var anhs = document.querySelectorAll('.cacAnh img');
var showSlide = document.querySelector('.nenDen');
var dongTab = document.querySelector('.closeTab');
dongTab.addEventListener('click',function(){
    showSlide.classList.remove('hienThi');
})
showSlide.addEventListener('click',function(){
    showSlide.classList.remove('hienThi');
})
for(var i =0;i<anhs.length;i++)
{
    anhs[i].addEventListener('click', function(){
        showSlide.classList.add('hienThi');
    })
}
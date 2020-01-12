var anhs = document.querySelectorAll('.cacAnh img');
var showSlide = document.querySelector('.nenDen');
var dongTab = document.querySelector('.closeTab');
var stt = document.querySelectorAll('.khoiCacAnh ul li img');
var chuyenT = document.querySelector('p.nutTrai');
var chuyenP = document.querySelector('p.nutPhai');
var anh = 0;
dongTab.addEventListener('click',function(){
    showSlide.classList.remove('hienThi');
})
for(var i =0;i<anhs.length;i++)
{
    anhs[i].addEventListener('click', function(){
        showSlide.classList.add('hienThi');
    })
}

chuyenP.addEventListener('click',function(){
    if(anh >= 0)
    {
        for(var i = 0;i<stt.length;i++)
        {
            stt[i].classList.remove('hienlen');
        }
        anh++;
        if(anh == stt.length)
        {
            anh = 0;
        }
        stt[anh].classList.add('hienlen');
    }
})
chuyenT.addEventListener('click',function(){
    if(anh != 0){
        for(var i = 0;i<stt.length;i++)
        {
            stt[i].classList.remove('hienlen');
        }
        anh--;
        stt[anh].classList.add('hienlen');
    }
})

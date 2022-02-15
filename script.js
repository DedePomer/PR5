var PhotoIndex = 1;
var timer;
Show(PhotoIndex);

function Prew() 
{
    Show(PhotoIndex-=1);
    clearTimeout(timer);  
}

function Next() 
{
    Show(PhotoIndex+=1);
    clearTimeout(timer);   
    
}

function TimoutNext()
{
    Show(PhotoIndex+=1);
}


function Show(index) 
{   
    var i;
    var slider = document.getElementsByClassName("SliderImg");

    if (index > slider.length) 
    {
        PhotoIndex = 1;
    }

    if (index < 1)
    {
        PhotoIndex = slider.length;
    }

    for (i = 0; i < slider.length; i++) 
    {
        slider[i].style.display = "none";
    }

    slider[PhotoIndex-1].style.display = "block";

    
    TimerSlide();
}

function TimerSlide() 
{
    timer = setTimeout(TimoutNext, 10000);
}
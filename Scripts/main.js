const ham = document.getElementById('ham');
const dropdown = document.getElementById('links');
const close = document.getElementById('close');


function myfunction (){
    links.style.marginTop = '350px';
    links.style.transitionDuration = '1s';
    close.style.display = 'block';
    ham.style.display = 'none';
}
ham.addEventListener('click',myfunction, false);

function function2(){
    dropdown.style.marginTop = '-350px';
    close.style.display = 'none';
    ham.style.display = 'block'
}


close.addEventListener('click', function2, false)
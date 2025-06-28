const shape = document.getElementById('shape');
let start = new Date().getTime();

// function to get random coor : ****REMEMBER
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0 ; i<6 ; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function move(){
    let left;
    let top;
    let wh;
    left = Math.random()*300;
    top = Math.random()*300;
    wh = ((Math.random()*400)+100);
    shape.style.left = `${left}px`;
    shape.style.top = `${top}px`;
    shape.style.width = `${wh}px`;
    shape.style.height = `${wh}px`;
    shape.style.display = 'block';
    shape.style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}
move();
shape.addEventListener('click',()=>{
    shape.style.display = 'none';
    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    alert(timeTaken);
    move();
}) 
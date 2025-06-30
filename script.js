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
    const headHeight = 250;
    const boxSize = ((Math.random()*280) + 100);
    const maxLeft = window.innerWidth - boxSize; 
    const maxTop = window.innerHeight - boxSize - headHeight;

    const left = Math.random() * maxLeft;
    const top = headHeight + Math.random() * maxTop;

    shape.style.left = `${left}px`;
    shape.style.top = `${top}px`;
    shape.style.width = `${boxSize}px`;
    shape.style.height = `${boxSize}px`;
    shape.style.display = 'block';
    shape.style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}
move();
shape.addEventListener('click',()=>{
    shape.style.display = 'none';
    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    alert(`${timeTaken} seconds`);
    move();
}) 

function myfunction(){
    console.log("I was clicked");
}

function keyPressEvent(){
    console.log("Key was pressed");
}

////Event listeners

const box1 = document.getElementById('box-1');
// box1.addEventListener('click',(e) => {
//     console.log('event object', e.clientX, e.clientY);
// })

box1.addEventListener('click',() => {
    console.log('clicked on box');
})

const container = document.getElementById('container');
container.addEventListener('click',() => {
    console.log('clicked on container');
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keydown',(e) => {
    console.log('key',e.key);
})

nameInput.addEventListener('focus', (e) =>{
    console.log('key',e);
});
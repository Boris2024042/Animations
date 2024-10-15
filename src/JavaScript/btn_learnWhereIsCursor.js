let circle = document.getElementById('btn_learnWhereIsCursor__Circle');
const btn_2 = document.getElementById('btn_learnWhereIsCursor');
console.log(btn_2.getBoundingClientRect().x, btn_2.getBoundingClientRect().y);
let cost = 20


let changer = true;

setInterval(()=> {
    changer = !changer
    cost = changer?20:10;
    console.log(cost);
    circle.style.height = `${cost}px`
    circle.style.width =  `${cost}px`
}, 1000)






// circle.style.height = `${cost}px`
// circle.style.width =  `${cost}px`

document.addEventListener('mousemove', (e)=> {
    

    let x = e.clientX
    let y = e.clientY
    // console.log(y, x);
    circle.style.transform =  `translate(${x - btn_2.getBoundingClientRect().x - (cost / 2)}px, ${y - btn_2.getBoundingClientRect().y - (cost / 2)}px)`;
})





const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cardContainer = document.getElementById('card-container')

function moveToRight(){
    const cards = document.querySelectorAll('.card')
    setTimeout(function(){
      cardContainer.removeChild(cards[cards.length-1]) // 컨테이너 마지막 카드 제거
      cardContainer.insertBefore(cards[cards.length-1], cardContainer.childNodes[0]) // 마지막 카드를 맨앞에 추가
    }, 300)
};
function moveToLeft(){
    const cards = document.querySelectorAll('.card')
    setTimeout(function(){
    //   cards[0].style.opacity = '0' // 첫번째 카드 숨기기
      cardContainer.removeChild(cards[0]) // 컨테이너 첫번째 카드 제거 (카드 이동)
      cardContainer.appendChild(cards[0]) // 첫번째 카드를 마지막에 추가 (카드 이동)
    //   setTimeout(function(){
    //     // cards[0].style.opacity = '1' // 첫번째 카드 보여주기
    //   }, 100)
    }, 300)
};
prev.addEventListener('mouseover', function(e){
    if(e.target){
        e.target.style.color = '#7FB174';
        e.target.style.border = '2px solid #7FB174';
    } 
    
});
prev.addEventListener('mouseout', function(e){
    if(e.target){
        e.target.style.backgroundColor = 'white';
        e.target.style.border = '2px solid #072A24';
        e.target.style.color = 'black';
    } 
    
});
next.addEventListener('mouseover', function(e){
    if(e.target){
        e.target.style.color = '#7FB174';
        e.target.style.border = '2px solid #7FB174';
    } 
    
});
next.addEventListener('mouseout', function(e){
    if(e.target){
        e.target.style.backgroundColor = 'white';
        e.target.style.border = '2px solid #072A24';
        e.target.style.color = '#072A24';    
    } 
});
prev.addEventListener('click', moveToRight)
next.addEventListener('click', moveToLeft)


const itembox = document.querySelector('.itembox');


let n = 8
function createitem(n){
    for (let i = 0; i < n; i++) {
        const img = new Image();
        img.src = `/damdaimg/model-${i+1}.jpg`;
        img.style.height ='240px' 
        img.style.width ='100%'
        img.style.borderRadius = '20px'
        img.style.border = '1px solid #C0C0C0'
        img.style.cursor ='pointer';
        itembox.appendChild(img);      
    };    
}
createitem(n);
 




// function 작동할함수(){
//     let n
//     container2.innerHTML = ' ' ;
    
//     const moreBtn = document.querySelector('.textbox')
//     const moreBtn1 = document.querySelector('.text-box')
    
//     console.log("닫기")

//     if(!flag){
//         moreBtn.innerHTML = 'CLOSE'
//         moreBtn1.style.position = 'fixed'
//         moreBtn1.style.bottom = '50px'
//         moreBtn1.style.left = '50%'
//         moreBtn1.style.transform = 'translate(-50%)'
//         flag = true 
//         n = 65
//     }else{
//         moreBtn.innerHTML = 'SEE ALL THE LOOKS'
//         moreBtn1.style.position = 'static'    
//         moreBtn1.style.transform = 'translate(-5%, 0%)'
//         flag = false 
//         n = 6
//     }
//     createitem(n);
// }
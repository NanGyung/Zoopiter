const $writeBtn = document.getElementById('writeBtn');
const $selectBoard = document.querySelector('.writeSelect');

$writeBtn.addEventListener('click', e => {
    $selectBoard.classList.toggle('active');
},false);

$selectBoard.addEventListener('change',e=>{
    console.log(e.target);
    const target = e.target;
    if(target.value == "review"){
        location.href='board_review.html';
    }else if(target.value == "commu"){
        location.href='board_com.html';
    }
},false);
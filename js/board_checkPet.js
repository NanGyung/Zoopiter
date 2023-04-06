
// 동물 태그 체크박스 이벤트

const $selectBox = document.querySelector('.left .selectBox');
const $check = document.querySelectorAll('input[type="checkbox"]');
let addBtn;

const checkbox_h = e => {
    let checkedCnt = 0;

    // 동물태그 체크박스 선택했을 시 전체 선택 해제 버튼 추가
    for (const ele of $check) {
        if (ele.checked == true) {
            checkedCnt++;
        }
    }
    if (checkedCnt === 1) {
        addBtn = document.createElement("button");
        addBtn.innerHTML = '전체 선택 해제';
        addBtn.setAttribute("id", "allBtn");
        $selectBox.appendChild(addBtn);
    } else if (checkedCount === 0 || checkedCount === $check.length) {
        $selectBox.removeChild(addBtn);
    }
}

$selectBox.addEventListener('change', checkbox_h, false);

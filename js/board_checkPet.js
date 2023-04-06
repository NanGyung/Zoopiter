
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
        } else {
            checkedCnt - 1;
        }
    }
    if (checkedCnt === 1) {
        addBtn = document.createElement("button");
        addBtn.innerHTML = '전체 선택 해제';
        addBtn.setAttribute("id", "allBtn");
        $selectBox.appendChild(addBtn);
    } else if (checkedCnt === 0 || checkedCnt === $check.length + 1) {
        $selectBox.removeChild(addBtn);
    }
    // 전체 체크 해제 버튼
    const $allBtn = document.getElementById("allBtn");
    $allBtn.addEventListener('click', e => {
        e.preventDefault();
        $check.forEach((checkedEle) => {
            checkedEle.checked = false;
        });
        if (checkedCnt === 0) {
            $selectBox.removeChild(addBtn);
        }
    }, false);
}


$selectBox.addEventListener('change', checkbox_h, false);

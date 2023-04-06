// 동물 태그 셀렉트 박스 이벤트

// 선택한 태그를 추가할 영역
const $tagList = document.querySelector('.tag-list');
// 동물유형 선택 셀렉트 박스
const $select = document.querySelector('select[name="pet"]');

const select_h = e => {
    const target = e.target;
    const petTagValue = target.value;
    const $options = document.querySelectorAll('.select option');

    if (petTagValue == 'default') {
        e.preventDefault();
    } else {
        for (const ele of $options) {
            if (ele.value == petTagValue) {
                // tagList 영역에 선택한 태그 추가
                let newTag = document.createElement("div");
                newTag.innerHTML = `#<p>${ele.textContent}</p>`;
                newTag.className = 'tag';
                $tagList.appendChild(newTag);
            }
        }
    }
};
$select.addEventListener('change', select_h, false);
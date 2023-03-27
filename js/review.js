// 선택한 태그를 추가할 영역
const $tagList = document.querySelector('.tag-list');
const $select = document.querySelector('select[name="pet"]');

const select_h2 = e => {
    console.log(e.target);
    const target = e.target;
    const petTagValue = target.value;
    const $options = document.querySelectorAll('.select option');

    if(petTagValue == 'default'){
        e.preventDefault();
    }else{
        for(const ele of $options){
            if(ele.value == petTagValue){
                console.log(ele.textContent);
    
                // tagList 영역에 선택한 태그 추가
                 $tagList.innerHTML = `<div class="tag">#<p>${ele.textContent}</p></div>`;
            }
        }
    }
};

$select.addEventListener('change', select_h2, false);

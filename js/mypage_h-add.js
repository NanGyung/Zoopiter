// 선택한 마이페이지 메뉴 on 클래스 추가
$(function () {
    $('#mypagePcGnb').children().eq(0).find('a').addClass('on');
});

// 주소 찾기 api 
function findAddr() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 사용자 주소를 받아올 변수를 정의한다.
            var addr = '';

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우(R)
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 부모창의 주소칸에 받아온 주소를 넣는다.
            const $haddress = document.getElementById("haddress");
            $haddress.value = addr;
        }
    }).open();
}


const $searchBtn = document.getElementById('searchHospital');
const $findhospital1 = document.getElementById('findhospital1');
const $fhCloseBtn1 = document.getElementById('fhCloseBtn1');
const $findhospital2 = document.getElementById('findhospital2');
const $fhCloseBtn2 = document.getElementById('fhCloseBtn2');
const $finded1 = document.getElementById('findhospital1Btn');
const $finded2 = document.getElementById('findhospital2Btn');

//  등록된 병원 조회 버튼 이벤트
$searchBtn.addEventListener('click', e => {
    e.preventDefault();
    $findhospital1.showModal();
    // $findhospital2.showModal();
}, false);

$fhCloseBtn1.addEventListener('click', e => {
    $findhospital1.close();
});

$fhCloseBtn2.addEventListener('click', e => {
    $findhospital2.close();
});

$finded1.addEventListener('click', e => {
    location.href = "mypage_h-newadd.html";
});

$finded2.addEventListener('click', e => {
    location.href = "member_login.html";
});
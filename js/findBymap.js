//  지역 선택 버튼
const $regionChoiceBtn = document.getElementById('regionChoice');
//  지역선택창 닫힘버튼
const $regionCloseBtn = document.getElementById('regionCloseBtn');
// 지역선택 팝업창
const $regionSelect = document.getElementById('regionSelect');

// 지역선택창 팝업
const regionChoice_h = e => {
    $regionSelect.showModal();
};
$regionChoiceBtn.addEventListener('click', regionChoice_h, false);

// 지역선택창 닫힘
const regionClose_h = e => {
    $regionSelect.close();
};
$regionCloseBtn.addEventListener('click', regionClose_h, false);

//  주소 선택
$('document').ready(function () {
    // 지역데이터
    const area0 = ["시/도 선택", "부산광역시", "울산광역시"];
    const area1 = ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"];
    const area2 = ["남구", "동구", "북구", "중구", "울주군"];

    // 시/도 선택 박스 초기화

    $("select[name^=sido]").each(function () {
        $selsido = $(this);
        $.each(eval(area0), function () {
            $selsido.append("<option value='" + this + "'>" + this + "</option>");
        });

        $selsido.next().append("<option value=''>구/군 선택</option>");
    });

    // 시/도 선택시 구/군 설정

    $("select[name^=sido]").change(function () {
        var area = "area" + $("option", $(this)).index($("option:selected", $(this))); // 선택지역의 구군 Array
        var $gugun = $(this).next(); // 선택영역 군구 객체
        $("option", $gugun).remove(); // 구군 초기화

        if (area == "area0")
            $gugun.append("<option value=''>구/군 선택</option>");
        else {
            $.each(eval(area), function () {
                $gugun.append("<option value='" + this + "'>" + this + "</option>");
            });
        }
    });
    // 현재 위치 설정 버튼 찾기
    const $currentLocationBtn = document.getElementById('myPlace');
    //지역 선택 팝업창 
    const $regionSelect = document.getElementById('regionSelect');
    // 선택한 지역 확인 버튼
    const $regionBtn = document.getElementById
        ('regionBtn');

    // 시/도 선택 셀렉트박스
    const $sido = document.getElementById('sido');
    // 구/군 선택 셀렉트박스
    const $gugun = document.getElementById('gugun');

    //  시/도 추가 dom  객체
    const addEle = document.createElement('p');
    //  구/군 추가 dom  객체
    const addEle2 = document.createElement('p');
    // 선택한 지역 표시 영역
    const parentEle = document.getElementById('searchRes');

    // 현재위치 글자표시
    const currentLocationBtnHandler = e => {
    // 선택한 지역 표시영역에 시/도  표시할 p태그 추가
    parentEle.appendChild(addEle);
    // 선택한 지역 표시영역에 선택한 구/군 표시할 p태그 추가
    parentEle.appendChild(addEle2);
    // 추가한 시/도 객체에 아이디값 추가
    addEle.setAttribute('id', 'sidoRes');
    // 추가한 구/군 객체에 아이디값 추가
    addEle2.setAttribute('id', 'gugunRes');
  
    // 현재 위치로 설정 시, 선택한 지역 영역에 "현재위치"라는 글자가 표시됩니다.
    addEle.textContent = "현재 위치";
    addEle2.textContent = "";
    };
  
    // 현재 위치 설정 버튼에 이벤트 리스너 추가
    $currentLocationBtn.addEventListener("click", currentLocationBtnHandler, false);



    // 지역선택 팝업 확인버튼 이벤트리스너
    const regionBtn_h = e => {
        // 지역선택 팝업 닫기
        $regionSelect.close();
        // 선택한 지역 표시영역에 시/도  표시할 p태그 추가
        parentEle.appendChild(addEle);
        // 선택한 지역 표시영역에 선택한 구/군 표시할 p태그 추가
        parentEle.appendChild(addEle2);
        // 추가한 시/도 객체에 아이디값 추가
        addEle.setAttribute('id', 'sidoRes');
        // 추가한 구/군 객체에 아이디값 추가
        addEle2.setAttribute('id', 'gugunRes');
        // 추가한 태그에 선택한 시/도 추가
        addEle.textContent = $sido.value;
        // 추가한 태그에 선택한 구/군 추가
        addEle2.textContent = $gugun.value;

        const $sidoRes = document.getElementById('sidoRes');
        const $gugunRes = document.getElementById('gugunRes');

        // 주소-좌표 변환 객체를 생성
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표 검색
        geocoder.addressSearch(`${$sidoRes.textContent}${$gugunRes.textContent}`, function (result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);

                // 키워드 검색 완료 시 호출되는 콜백함수 입니다
                function placesSearchCB(data, status, pagination) {
                    if (status === kakao.maps.services.Status.OK) {
                        for (var i = 0; i < data.length; i++) {
                            displayMarker(data[i]);
                        }
                    }
                }
            }
        });
    };

    // 지역선택 팝업 확인 버튼 클릭 이벤트 추가
    $regionBtn.addEventListener('click', regionBtn_h, false);

});



// 자세히보기 버튼을 클릭하면 다이얼로그를 연다
document.querySelectorAll('.list-content__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const detailsId = btn.id.replace('infoBtn', 'list-details');
        const listDetails = document.getElementById(detailsId);
        listDetails.showModal();
    });
});

// X 버튼을 클릭하면 다이얼로그를 닫는다
document.querySelectorAll('.list-details .fa-solid.fa-xmark').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const parentDialog = btn.closest('.list-details');
        parentDialog.close();
    });
}); 

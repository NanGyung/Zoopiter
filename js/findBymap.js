//  kakao api 카테고리 라이브러리 지도(병원코드 : HP8) 
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map);

// 카테고리로 은행을 검색합니다
ps.categorySearch('HP8', placesSearchCB, { useMapBounds: true });

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
        }
    }
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}

//  지역 선택 버튼
const $regionChoiceBtn = document.getElementById('regionChoice');

// 현재위치 정보 지도표시
// 현재위치 설정 버튼
const $myPlaceBtn = document.getElementById('myPlace');
let myPosition = '';
const myPlace_h = e => {
    const geoLocation = globalThis.navigator.geolocation;
    if (geoLocation) {
        geoLocation.getCurrentPosition((position) => {
            // 내위치 위도, 경도
            myPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //  내위치 마커표시
            const marker = displayMarker(myPosition);
            marker.setContent('<div class="whereIam"></div>');
            //내위치로 지도중심이동
            map.setCenter(myPosition);
            //지도의 줌레벨 조정
            map.setLevel(10, { animate: true });
        });
    } else {
        throw new Error('현 브라우저는 위치정보를 제공하지 않습니다!');
    }
};
$myPlaceBtn.addEventListener('click', myPlace_h, false);


// 자세히 보기 버튼
const $infoBtn = document.getElementById('infoBtn');
// 상세정보 모달창
const $listDetails = document.querySelector('.list-details');
//  상세정보창 닫힘버튼
const $listDetails_closeBtn = document.getElementById('detailsCloseBtn');

// 자세히 보기 버튼 이벤트 핸들러
const infoBtn_h = e => {
    $listDetails.showModal();
};
//  자세히 보기 버튼 쿨락이벤트 리스너 등록
$infoBtn.addEventListener('click', infoBtn_h, false);

//  상세정보창 닫힘버튼 이벤트핸들러
const detailsCloseBtn_h = e => {
    $listDetails.close();
};
//  상세정보창 닫힘버튼 쿨락이벤트 리스너 등록
$listDetails_closeBtn.addEventListener('click', detailsCloseBtn_h, false);



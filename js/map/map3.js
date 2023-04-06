//map3.js
// 검색결과 목록 하단에 페이지번호를 표시하는 함수입니다
function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i; 

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커에 마우스오버 했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title, distance) {
    var content = '<div style="padding:5px; z-index:1; min-width: 150px;">' + title + '<br> 현재위치에서: <span>' + distance.toFixed(1) + 'km</span></div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
}
// 스타일
// function displayInfowindow(marker, title, distance) {
//     var content = '<div class="infosty">' + title + '<br> 현재위치에서: <span style="white-space: nowrap;">' + distance.toFixed(1) + 'km</span></div>';

//     infowindow.setContent(content);
//     infowindow.open(map, marker);
// }



 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {   
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}

    // 현재 위치를 얻어내는 함수입니다
    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude,
                    lon = position.coords.longitude;
                currentLocation = new kakao.maps.LatLng(lat, lon);
                var locPosition = new kakao.maps.LatLng(lat, lon);
                map.setCenter(locPosition);
                searchPlaces(locPosition); // 변경된 부분: 위치 정보를 전달합니다.
                addRedMarker(locPosition); // 현재 위치에 마커 추가
            }, function() {
                alert('Geolocation을 지원하지 않으므로, 기본 위치를 중심으로 검색합니다.');
                searchPlaces();
            });
        } else {
            alert('이 브라우저에서는 Geolocation이 지원되지 않습니다. 기본 위치를 중심으로 검색합니다.');
            searchPlaces();
        }
    }

    function initialize() {
        getCurrentLocation();
    }
    //페이지 접속, 새로고침 시 현재위치에서 검색
    window.onload = initialize;



    //지역검색
    document.getElementById("regionBtn").addEventListener("click", function(event) {
    event.preventDefault(); // 이벤트 전파를 차단합니다.

    var sido = document.getElementById("sido").value;
    var gugun = document.getElementById("gugun").value;

    if (sido && gugun) {
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(sido + " " + gugun, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var locPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(locPosition);
                removeMarker();
                searchPlaces(locPosition);
            } else {
                alert("검색 결과가 없습니다. 다른 지역을 선택해 주세요.");
            }
        });
    } else {
        alert("도시와 구를 선택해 주세요.");
    }
});
  
        //동물병원 검색함수
    function searchPlaces(center) {
        var keyword = '동물병원';
        var searchOptions = {
            radius: 15000, // 15km 반경 내에서 검색
        };
            if (center) {
            searchOptions.location = center;
        } else {
            searchOptions.location = map.getCenter();
        }
    
        ps.keywordSearch(keyword, placesSearchCB, searchOptions);
    }
         
    document.getElementById('myPlace').addEventListener('click', function() {
        getCurrentLocation();
    });
    
        // 현재 위치 마커를 생성하고 지도 위에 표시하는 함수입니다
        function addRedMarker(position) {
        var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png', // 마커 이미지 url
            imageSize = new kakao.maps.Size(30, 40), // 마커 이미지의 크기
            imageOption = {offset: new kakao.maps.Point(27, 69)},
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage
            });

        marker.setMap(map); // 지도 위에 마커를 표출합니다
    }

      // 지도를 생성하고 현재 위치를 얻어옵니다
      getCurrentLocation();






    
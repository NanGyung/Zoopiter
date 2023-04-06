const stars = document.getElementsByName('rating');

// 이벤트 리스너 등록
stars.forEach(function (star) {
    star.addEventListener('click', function () {
        // 선택한 별점 값을 출력
        document.getElementById('result').innerText = star.value + '점';
    });
});
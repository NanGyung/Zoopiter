// 모달 열기 버튼 클릭 시 실행되는 함수
function openModal() {
  var modal = document.querySelector('.pet_modal');
  modal.style.display = 'block';
}

// 모달 닫기 버튼 클릭 시 실행되는 함수
function closeModal() {
  var modal = document.querySelector('.pet_modal');
  modal.style.display = 'none';
}

// 모달 외부 클릭 시 모달 닫기
window.onclick = function (event) {
  var modal = document.querySelector('.pet_modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

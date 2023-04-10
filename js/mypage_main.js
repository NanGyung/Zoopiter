function modify() {
  Swal.fire({
    title: '수정하시겠습니까?',
    text: '수정페이지로 이동합니다',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#333',
    cancelButtonColor: '#ffd88f',
    confirmButtonText: '수정하기',
    cancelButtonText: '취소하기',
  }).then(result => {
    if (result.isConfirmed) {
      location.replace('./mypage_main_modify.html');
    }
  });
}

function withdraw() {
  Swal.fire({
    title: '탈퇴하시겠습니까?',
    text: '탈퇴확인시 등록된 정보 및 게시글이 전체 삭제 됩니다',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#333',
    cancelButtonColor: '#ffd88f',
    confirmButtonText: '탈퇴하기',
    cancelButtonText: '취소하기',
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire('탈퇴완료!', '그동안 이용해주셔서 감사합니다', 'success');
    }
  });
}

function petModify() {
  Swal.fire({
    title: '수정페이지로 이동하시겠습니까?',
    text: '등록한 반려동물정보를 수정하러 이동합니다',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#333',
    cancelButtonColor: '#ffd88f',
    confirmButtonText: '수정하기',
    cancelButtonText: '취소하기',
  }).then(result => {
    if (result.isConfirmed) {
      location.replace('./mypage_pet_modify.html');
    }
  });
}


// 반려동물 정보 추가(2개이상) 되면 이미지 슬라이드
$(document).ready(function(){
  const profileAreas = $('.profile-area');
   const profileList = $('.profile-list__areas');
  if (profileAreas.length > 2) { // profile-area 태그가 2개 이상일 때
    $('.profile-list__areas').slick({ // slick 라이브러리를 적용할 부분 선택자
      slidesToShow: 2, // 한 화면에 보여줄 슬라이드 개수
      slidesToScroll: 1, // 슬라이드 이동 시 이동할 슬라이드 개수
      arrows: false
    });
  }else{
    profileList.css('width','40%');
    profileAreas.css('width','70%');
  }
});

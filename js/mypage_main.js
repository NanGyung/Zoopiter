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

// function petAdd() {
//   Swal.fire({
//     title: '반려동물정보를 추가 하시겠습니까?',
//     text: '신규등록하러 이동합니다',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#333',
//     cancelButtonColor: '#ffd88f',
//     confirmButtonText: '등록하기',
//     cancelButtonText: '취소하기',
//   }).then(result => {
//     if (result.isConfirmed) {
//       location.replace('./mypage_pet_reg.html');
//     }
//   });
// }

/* 사진업로드 */
function DropFile(dropAreaId, fileListId) {
  let dropArea = document.getElementById(dropAreaId);
  let fileList = document.getElementById(fileListId);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(e) {
    preventDefaults(e);
    dropArea.classList.add('highlight');
  }

  function unhighlight(e) {
    preventDefaults(e);
    dropArea.classList.remove('highlight');
  }

  function handleDrop(e) {
    unhighlight(e);
    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);

    const fileList = document.getElementById(fileListId);
    if (fileList) {
      fileList.scrollTo({ top: fileList.scrollHeight });
    }
  }

  function handleFiles(files) {
    files = [...files];
    // files.forEach(uploadFile);
    files.forEach(previewFile);
  }

  function previewFile(file) {
    console.log(file);
    renderFile(file);
  }

  function renderFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      let img = dropArea.getElementsByClassName('preview')[0];
      img.src = reader.result;
      img.style.display = 'block';
    };
  }

  dropArea.addEventListener('dragenter', highlight, false);
  dropArea.addEventListener('dragover', highlight, false);
  dropArea.addEventListener('dragleave', unhighlight, false);
  dropArea.addEventListener('drop', handleDrop, false);

  return {
    handleFiles,
  };
}

const dropFile = new DropFile('drop-file', 'files');

/* 등록완료 */
function modify() {
  Swal.fire({
    title: '등록하시겠습니까?',
    text: '작성하신 정보가 등록됩니다',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#333',
    cancelButtonColor: '#ffd88f',
    confirmButtonText: '등록하기',
    cancelButtonText: '취소하기',
  }).then(result => {
    if (result.isConfirmed) {
      location.replace('./mypage_main.html');
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

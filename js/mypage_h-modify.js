function modify() {
    Swal.fire({
        title: '수정하시겠습니까?',
        text: '작성하신 정보가 저장됩니다',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#333',
        cancelButtonColor: '#ffd88f',
        confirmButtonText: '수정하기',
        cancelButtonText: '취소하기',
    }).then(result => {
        if (result.isConfirmed) {
            location.replace('./mypage_h-main.html');
        }
    });
}

const $completeBtn = document.getElementById("addHospital");
$completeBtn.addEventListener('click', e=>{
    e.preventDefault();
    location.href = "./mypage_h-main.html";
});

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

const dropFile = new DropFile('dropFile', 'files');

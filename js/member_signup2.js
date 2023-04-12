import { ajax } from '/js/ajax.js';

const $id = document.getElementById('id');
const $pw = document.getElementById('pw');
const $pwCheck = document.getElementById('pwCheck');
const $email = document.getElementById('email');
const $emailCheck = document.getElementById('emailCheck');

const $errNickname = document.querySelector('.err.nickname');
const $errId = document.querySelector('.err.id');
const $errPw = document.querySelector('.err.pw');
const $errPwCheck = document.querySelector('.err.pwCheck');
const $errEmail = document.querySelector('.err.email');
const $errEmailCheck = document.querySelector('.err.emailCheck');

//아이디 중복체크
const chkId = res => {
  if (res.header.rtcd == '00') {
    if (res.data) {
      $errId.style = 'color : red';
      $errId.textContent = '사용중인 아이디 입니다.';
    } else {
      $errId.style = 'color : green';
      $errId.textContent = '사용가능한 아이디 입니다.';
    }
  } else {
    $errId.textContent = `${res.header.rtmsg}`;
  }
};

const chkId_h = () => {
  const url = `/api/members/id?id=${$id.value}`;
  ajax
    .get(url)
    .then(res => res.json())
    .then(chkId) //res=>chkEmail(res)
    .catch(console.error); //err=>console.error(err)
};

//아이디
$id.addEventListener('keydown', e => {
  const input = $id.value;
  const lenOfInput = input.length;

  if (e.key === ' ') {
    e.preventDefault();
  }

  if (e.key != 'Enter') {
    return;
  }
  if (e.key == 'Enter') {
    if (/[^A-Za-z0-9]/.test(input)) {
      $errId.classList.remove('hidden');
      $errId.style = 'color : red';
      $errId.textContent = '* 영문 숫자만 입력 가능합니다.';
      $id.focus();
      return;
    }
    if (lenOfInput == 0) {
      $errId.classList.remove('hidden');
      $errId.style = 'color : red';
      $errId.textContent = '* 아이디를 입력해 주세요.';
      $id.focus();
      $id.value = '';
    } else {
      //      $errId.classList.add('hidden');
      // $id.value = input;
      chkId_h();
      $pw.focus();
    }
    return;
  }
});

$id.addEventListener('blur', e => {
  const input = $id.value.trim();
  const lenOfInput = input.length;

  if (/[^A-Za-z0-9]/.test(input)) {
    $errId.classList.remove('hidden');
    $errId.style = 'color : red';
    $errId.textContent = '* 영문 숫자만 입력 가능합니다.';
    return;
  }
  if (lenOfInput == 0) {
    $errId.classList.remove('hidden');
    $errId.style = 'color : red';
    $errId.textContent = '* 아이디을 입력해 주세요.';
    $id.value = '';
  } else {
    //    $errId.classList.add('hidden');
    chkId_h();
    // $id.value = input;
  }
  return;
});

//비밀번호 확인 함수
  const pwCheck_h = (e) => {
    const input = $pwCheck.value;
    const inputChk = $pw.value;
    const lenOfInput = input.length;

    if (lenOfInput != 0) {
      if (input == inputChk) {
        $errPw.classList.add('hidden');
        $errPwCheck.style = 'color : green';
        $errPwCheck.textContent = '비밀번호가 일치합니다';
      } else {
        $errPwCheck.classList.remove('hidden');
        $errPwCheck.style = 'color : red';
        $errPwCheck.textContent = '비밀번호가 일치하지 않습니다.';
      }
    }
    return;
  };

//비밀번호
$pw.addEventListener('keydown', e => {
  const input = $pw.value;
  const lenOfInput = input.length;

  if (e.key === ' ') {
    e.preventDefault();
  }

  if (e.key != 'Enter') {
    return;
  }
  if (e.key == 'Enter') {
    if (/[^A-Za-z0-9]/.test(input)) {
      $errPw.classList.remove('hidden');
      $errPw.textContent = '* 영문 대소문자 숫자만 입력 가능합니다.';
      $pw.focus();
      return;
    }
    if (lenOfInput == 0) {
      $errPw.classList.remove('hidden');
      $errPw.textContent = '* 비밀번호를 입력해 주세요.';
      $pw.focus();
    } else if (8 > lenOfInput || lenOfInput > 20) {
      $errPw.classList.remove('hidden');
      $errPw.textContent = '* 비밀번호는 8~20자 입력 가능합니다.';
      $pw.focus();
    } else {
      $errPw.classList.add('hidden');
      $pwCheck.focus();
    }
    return;
  }
});

$pw.addEventListener('blur', e => {
  const input = $pw.value;
  const lenOfInput = input.length;

  if (/[^A-Za-z0-9]/.test(input)) {
    $errPw.classList.remove('hidden');
    $errPw.textContent = '* 영문 대소문자 숫자만 입력 가능합니다.';
    return;
  }
  if (lenOfInput == 0) {
    $errPw.classList.remove('hidden');
    $errPw.textContent = '* 비밀번호를 입력해 주세요.';
  } else if (8 > lenOfInput || lenOfInput > 20) {
    $errPw.classList.remove('hidden');
    $errPw.textContent = '* 비밀번호는 8~20자 입력 가능합니다.';
  } else {
    $errPw.classList.add('hidden');
    pwCheck_h(e);
  }
  return;
});

$pwCheck.addEventListener('focus', e => {
  if ($pw.value == null) {
    $pw.focus();
  } else if (!$errPw.classList.contains('hidden')) {
    $pw.focus();
  }
});


//비밀번호 확인
$pwCheck.addEventListener('input',pwCheck_h);

//비밀번호 확인
$pwCheck.addEventListener('keydown', e => {
  const input = $pwCheck.value;
  const inputChk = $pw.value;
  const lenOfInput = input.length;

  if (e.key === ' ') {
    e.preventDefault();
  }

  if (e.key != 'Enter') {
    return;
  }

  if (e.key == 'Enter') {
    if (lenOfInput != 0 && input == inputChk) {
      $email.focus();
    }
  }
  return;
});

//이메일 중복체크
const chkEmail = res => {
  if (res.header.rtcd == '00') {
    if (res.data) {
      $errEmail.style = 'color : red';
      $errEmail.textContent = '사용중인 이메일 입니다.';
    } else {
      $errEmail.style = 'color : green';
      $errEmail.textContent = '사용가능한 이메일 입니다.';
    }
  } else {
    $errEmail.textContent = `${res.header.rtmsg}`;
  }
};

const chkEmail_h = () => {
  const url = `/api/members/email?email=${email.value}`;
  ajax
    .get(url)
    .then(res => res.json())
    .then(chkEmail) //res=>chkEmail(res)
    .catch(console.error); //err=>console.error(err)
};

//이메일
$email.addEventListener('keydown', e => {
  const input = $email.value;
  const lenOfInput = input.length;
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/;

  if (e.key === ' ') {
    e.preventDefault();
  }

  if (e.key != 'Enter') {
    return;
  }
  if (e.key == 'Enter') {
    if (lenOfInput == 0) {
      $errEmail.classList.remove('hidden');
      $errEmail.style = 'color : red';
      $errEmail.textContent = '* 이메일를 입력해 주세요.';
      $email.focus();
      $email.value = '';
    } else if (!emailRegex.test(input)) {
      $errEmail.classList.remove('hidden');
      $errEmail.style = 'color : red';
      $errEmail.textContent = '* 이메일 양식에 맞게 입력해 주세요.';
      $email.focus();
    } else {
      //      $errEmail.classList.add('hidden');
      //      $email.value = input;
      chkEmail_h();
      $emailCheck.focus();
    }
    return;
  }
});

$email.addEventListener('blur', e => {
  const input = $email.value;
  const lenOfInput = input.length;
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/;

  if (lenOfInput == 0) {
    $errEmail.classList.remove('hidden');
    $errEmail.style = 'color : red';
    $errEmail.textContent = '* 이메일를 입력해 주세요.';
    $email.value = '';
  } else if (!emailRegex.test(input)) {
    $errEmail.classList.remove('hidden');
    $errEmail.style = 'color : red';
    $errEmail.textContent = '* 이메일 양식에 맞게 입력해 주세요.';
  } else {
    //    $errEmail.classList.add('hidden');
    //    $email.value = input;
    chkEmail_h();
  }
  return;
});

  //사업자상태확인
  const $chkBtn = document.getElementById('businessBtn');
  $chkBtn.addEventListener('click',businessNumberChk_h,false);
  const $numChk = document.querySelector('.information.business');
  //사업자진위확인
  const $chkBtn2 = document.getElementById('businessBtn2');

  const businessTrulyRequestParm = {};

  const $start_dt = document.getElementById('start_dt');
  const $p_nm = document.getElementById('p_nm');
  const $b_nm = document.getElementById('b_nm');

  const $numChk2 = document.querySelector('.information.business2');

$chkBtn2.addEventListener('click', (e) => {
  if ($start_dt.value.trim().length == 0 || $p_nm.value.trim().length == 0 || $b_nm.value.trim().length == 0) {
    e.preventDefault();
  } else {
    businessTrulyChk_h(e);
  }
}, false);


  //사업자 상태확인
  function businessNumberChk_h(e){
    const key = 'CwhZlDHVL7Ssq0ptBW7k3Z3ugzvVZIXlabaSyyRa%2B9gpMacCPAqpO8R7HuOyUbHVw332uGhgU7a8gWQzUJ8Zeg%3D%3D';
    const returnType = 'JSON';
    const url =  `http://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${key}&returnType=${returnType}`;
    const businessNm = document.getElementById('businessNum');
    //const payLoad = JSON.parse(`{"b_no": [${businessNm.value} ] }`);
    //const payLoad = { "b_no": [businessNm.value] };
    const payLoad = { "b_no": [businessNm.value] };
    //1)상태결과
    const businessStatusChk = (res) => {
      console.log(res);
      if(res.status_code == 'OK'){
        switch(res.data[0].b_stt_cd){ //납세자 상태
          case "01": //계속사업자
            console.log('계속');
            $numChk.style = 'color : green';
            $numChk.textContent = "계속";
            //비활성
            document.getElementById('businessBtn').disabled = true;
            document.getElementById('businessNum').disabled = true;

            const elements = document.querySelectorAll('.item7__business.hidden');
            for (var i = 0; i < elements.length; i++) {
              elements[i].classList.remove('hidden');
            }
            document.querySelector('.information.business2.hidden').classList.remove('hidden');
            //진위확인 파라미터
            businessTrulyRequestParm.b_no = res.data[0].b_no;  //사업자 등록번호

            break;
          case "02": //휴업자
            break;
          case "03": //폐업자
            break;
          default :
            throw new Error(`${res.data[0].tax_type}`);
        }
      }else{
        throw new Error(`${res.description}`);
      }
    }

    ajax.post(url,payLoad)
      .then(res=>res.json())
      .then(res=>businessStatusChk(res))
      .catch(err=>{
        $numChk.style = 'color : red';
        $numChk.textContent = err.message;
        console.log(err.message);
      });
  }

  //사업자 진위확인
  function businessTrulyChk_h(e) {
    const key = 'CwhZlDHVL7Ssq0ptBW7k3Z3ugzvVZIXlabaSyyRa%2B9gpMacCPAqpO8R7HuOyUbHVw332uGhgU7a8gWQzUJ8Zeg%3D%3D';
    const returnType = 'JSON';
    const url =  `http://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=${key}&returnType=${returnType}`;


    const payLoad = {
      businesses : [
        { ...businessTrulyRequestParm,
          start_dt : $start_dt.value,
          p_nm : $p_nm.value,
          b_nm : $b_nm.value
        }
      ]
    };
    console.log(payLoad);
    const businessStatusChk = res => {
      console.log(res);
      if(res.status_code == 'OK'){
        switch(res.data[0].valid){
          case "01":  //Valid  유효
            console.log('유효한 사업자');
            $numChk2.style = 'color : green';
            $numChk2.textContent = "가입 가능합니다.";
            document.getElementById('businessBtn2').disabled = true;
            document.getElementById('start_dt').disabled = true;
            document.getElementById('p_nm').disabled = true;
            document.getElementById('b_nm').disabled = true;

            break;
          case "02":  //Invalid

            throw new Error(`${res.data[0].valid_msg}`);
            break;
        }
      }else{
        throw new Error(`${res.description}`);
      }
    }
    ajax.post(url,payLoad)
      .then(res=>res.json())
      .then(res=>businessStatusChk(res))
      .catch(err=>{
              $numChk2.style = 'color : red';
              $numChk2.textContent = err.message;
              console.log(err.message);
      });

  }

//member 내보내기
const member_h = () => {
  const url = `/api/members/signup2`;
  const name = "*병원*" + $b_nm.value.replace("(주)", "").replace("주식회사", "");
  const payLoad = {
    userId: $id.value,
    userPw: $pw.value,
    userNick: name,
    userEmail: $email.value
  };
  ajax
    .post(url, payLoad)
    .then(res => res.json())
    .catch(console.error); //err=>console.error(err)
};



const $loginBtn = document.getElementById('loginBtn');
const $loginPopup = document.getElementById('loginPopup');
$loginBtn.addEventListener('click', e => {
  if (
    $errId.style.color === 'green' &&
    $errEmail.style.color === 'green' &&
    $errPwCheck.style.color === 'green' &&
    $numChk2.style.color === 'green'
  ) {
    member_h();
    $loginPopup.showModal();
  } else {
    alert('회원가입 양식에 맞게 입력해 주세요');
  }
});
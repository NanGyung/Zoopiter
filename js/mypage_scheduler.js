/* 반려동물 수정페이지 이동 */
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

/* 캘린더 */

$(document).ready(function () {
  calendarInit();
});
/*
    달력 렌더링 할 때 필요한 정보 목록 

    현재 월(초기값 : 현재 시간)
    금월 마지막일 날짜와 요일
    전월 마지막일 날짜와 요일
*/

function calendarInit() {
  // 날짜 정보 가져오기
  var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
  var utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000; // uct 표준시 도출
  var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
  var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

  //한국 현재 년,월,일 date객체
  var thisMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  // 달력에서 표기하는 날짜 객체

  var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
  var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
  var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

  // kst 기준 현재시간
  // console.log(thisMonth);

  // var currentMonthDate = new Map();

  // 캘린더 렌더링
  renderCalender(thisMonth);

  function renderCalender(thisMonth) {
    // 렌더링을 위한 데이터 정리
    currentYear = thisMonth.getFullYear();
    currentMonth = thisMonth.getMonth();
    currentDate = thisMonth.getDate();

    // 이전 달의 마지막 날 날짜와 요일 구하기
    var startDay = new Date(currentYear, currentMonth, 0);
    var prevDate = startDay.getDate();
    var prevDay = startDay.getDay();

    // 이번 달의 마지막날 날짜와 요일 구하기
    var endDay = new Date(currentYear, currentMonth + 1, 0);
    var nextDate = endDay.getDate();
    var nextDay = endDay.getDay();

    // console.log(prevDate, prevDay, nextDate, nextDay);

    // 현재 월 표기
    $('.year-month').text(currentYear + '.' + (currentMonth + 1));

    const dateArr = [];

    // 렌더링 html 요소 생성
    calendar = document.querySelector('.dates');
    calendar.innerHTML = '';

    // 지난달
    for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
      calendar.innerHTML =
        calendar.innerHTML + '<div class="day prev disable">' + i + '</div>';
    }
    // 이번달
    for (var i = 1; i <= nextDate; i++) {
      calendar.innerHTML =
        calendar.innerHTML + '<div class="day current">' + i + '</div>';
    }
    // 다음달
    for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
      calendar.innerHTML =
        calendar.innerHTML + '<div class="day next disable">' + i + '</div>';
    }

    // var days = document.querySelectorAll('.dates .day.current');
    // let daysArr = [];
    // for (const value of days.values()) {
    //   daysArr.push(value);
    //   // console.log(value);
    // }
    // 오늘 날짜 표기
    if (today.getMonth() == currentMonth) {
      todayDate = today.getDate();
      var currentMonthDate = document.querySelectorAll('.dates .day.current');
      dateArr.push(Object.values(currentMonthDate));
      dateArr[0][todayDate - 1].classList.add('today');
    }

    // console.log(Object.values(currentMonthDate));

    // 날짜 선택
    for (const ele of dateArr[0]) {
      ele.addEventListener(
        'click',
        e => {
          const clickItem = e.target;
          const todayItem = document.querySelector('.current.today');
          console.log(clickItem);
          // console.log(e.target.innerHTML); //클릭한 날짜의 값

          //현재 날짜 표시하는 div의 class 값 제거
          todayItem.classList.remove('today');
          // 선택한 날짜 표시
          clickItem.classList.add('today');
        },
        false,
      );
    }
  }

  // console.log(currentMonth+1);

  // 이전달로 이동
  $('.go-prev').on('click', function () {
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalender(thisMonth);
  });

  // 다음달로 이동
  $('.go-next').on('click', function () {
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth);
  });
}
/* 추가 */
(function () {
  $(function () {
    // calendar element 취득
    var calendarEl = $('#calendar')[0];
    // full-calendar 생성하기
    var calendar = new FullCalendar.Calendar(calendarEl, {
      height: '700px', // calendar 높이 설정
      expandRows: true, // 화면에 맞게 높이 재설정
      slotMinTime: '08:00', // Day 캘린더에서 시작 시간
      slotMaxTime: '20:00', // Day 캘린더에서 종료 시간
      // 해더에 표시할 툴바
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      initialView: 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
      initialDate: '2023-03-15', // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
      navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
      editable: true, // 수정 가능?
      selectable: true, // 달력 일자 드래그 설정가능
      nowIndicator: true, // 현재 시간 마크
      dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
      locale: 'ko', // 한국어 설정
      eventAdd: function (obj) {
        // 이벤트가 추가되면 발생하는 이벤트
        console.log(obj);
      },
      eventChange: function (obj) {
        // 이벤트가 수정되면 발생하는 이벤트
        console.log(obj);
      },
      eventRemove: function (obj) {
        // 이벤트가 삭제되면 발생하는 이벤트
        console.log(obj);
      },
      eventDidMount: function (info) {
        if (info.event.extendedProps.description) {
          info.el.append(info.event.extendedProps.description);
        }
      },
      select: function (arg) {
        // 캘린더에서 드래그로 이벤트를 생성할 수 있다.
        var title = prompt('Event Title:');
        var desc = prompt('Event Description:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            url: 'page/' + arg.id + '.html',
            allDay: arg.allDay,
            description: desc,
          });
        }
        calendar.unselect();
      },
      // 이벤트
      events: [
        {
          title: '얘',
          start: '2023-04-03',
          description: '디스크립션',
        },
        {
          title: 'All Day Event',
          start: '2023-03-01',
        },
        {
          title: 'Long Event',
          start: '2021-07-07',
          end: '2023-03-10',
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2023-03-09T16:00:00',
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2023-03-16T16:00:00',
        },
        {
          title: 'Conference',
          start: '2023-07-11',
          end: '2023-03-13',
        },
        {
          title: 'Meeting',
          start: '2023-07-12T10:30:00',
          end: '2023-03-12T12:30:00',
        },
        {
          title: 'Lunch',
          start: '2023-03-12T12:00:00',
        },
        {
          title: 'Meeting',
          start: '2023-03-12T14:30:00',
        },
        {
          title: 'Happy Hour',
          start: '2023-03-12T17:30:00',
        },
        {
          title: 'Dinner',
          start: '2023-03-12T20:00:00',
        },
        {
          title: 'Birthday Party',
          start: '2023-03-13T07:00:00',
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/', // 클릭시 해당 url로 이동
          start: '2023-03-28',
        },
      ],
    });
    // 캘린더 랜더링
    calendar.render();
  });
})();

/* 활성화 된 메뉴 강조 */

$(function () {
  $('#pc').children().eq(0).find('a').addClass('on');
});

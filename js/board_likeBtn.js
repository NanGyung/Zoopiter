
// 좋아요 클릭 이벤트

// 클릭 전 아이콘
const $prevHeart = document.querySelectorAll('.like-icons .fa-regular');

const heart_h = e => {
    const target = e.target;
    if (target.className == "fa-regular fa-heart") {
        target.classList.remove("fa-regular");
        target.classList.remove("fa-heart");
        target.classList.add("fa-solid");
        target.classList.add("fa-heart");
    } else if (target.className == "fa-solid fa-heart") {
        target.classList.remove("fa-solid");
        target.classList.remove("fa-heart");
        target.classList.add("fa-regular");
        target.classList.add("fa-heart");
    }
};
for (const ele of $prevHeart) {
    ele.addEventListener('click', heart_h, false);
}

let likeActive = false;
let dislikeActive = false;

const sectionScroll = document.querySelector("main");

const toggleLike = () => {
  let likeEl = document.querySelector(".like");
  if (dislikeActive) {
    toggleDislike();
  }
  likeEl.classList.toggle("active");
  likeActive = !likeActive;
};

const toggleDislike = () => {
  let dislikeEl = document.querySelector(".dislike");
  if (likeActive) {
    toggleLike();
  }
  dislikeEl.classList.toggle("active");
  dislikeActive = !dislikeActive;
};

sectionScroll.addEventListener("scroll", () => {
  const videos = document.querySelectorAll(".shorts-container");
  const scrollPosition = sectionScroll.scrollTop;

  // Calculate index of currently visible video
  let currentIndex = 0;
  videos.forEach((video) => {
    const videoTop = video.offsetTop - sectionScroll.offsetTop;
    if (videoTop <= scrollPosition) {
      currentIndex += 1;
    }
  });
});

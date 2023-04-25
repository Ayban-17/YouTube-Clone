let likeActive = false;
let dislikeActive = false;

let randomNumber = Math.ceil(Math.random() * 2000000);
let randomNumberComments = Math.ceil(Math.random() * 1000);
let likes;
let comments;
let shortsContainer = document.querySelector(".shorts-container");

window.addEventListener("DOMContentLoaded", () => {
  generateLikesCount(randomNumber);
  generateCommentCount(randomNumberComments);
  generateShorts();
});

const generateLikesCount = (num) => {
  if (num > 1000000) {
    likes = (num / 1000000).toFixed(1) + "m";
  } else if (num > 1000) {
    likes = (num / 1000).toFixed(1) + "k";
  } else {
    likes = num;
  }
};

const generateCommentCount = (num) => {
  if (num > 1000000) {
    comments = (num / 1000000).toFixed(1) + "m";
  } else if (num > 1000) {
    comments = (num / 1000).toFixed(1) + "k";
  } else {
    comments = num;
  }
};

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

const generateShorts = () => {
  let shorts = shortsData.map((data) => {
    let { id, shorts_URL, title, image, profile_URL } = data;
    return `<section class="shorts-content-container" id="${id}">
    <iframe
      width="338"
      height="602"
      src="${shorts_URL}"
      title="${title}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div class="reactions">
      <div class="react-container">
        <button class="like react" onclick="toggleLike()">
          <i class="fa-regular fa-thumbs-up fa-lg"></i>
        </button>
        <p>${likes}</p>
      </div>
      <div class="react-container">
        <button class="dislike react" onclick="toggleDislike()">
          <i class="fa-regular fa-thumbs-down fa-lg"></i>
        </button>
        <p>Dislike</p>
      </div>
      <div class="comment react-container">
        <button class="comment">
          <i class="fa-regular fa-comment fa-lg"></i>
        </button>
        <p>${comments}</p>
      </div>
      <div class="share react-container">
        <button class="share">
          <i class="fa-solid fa-share fa-lg"></i>
        </button>
        <p>Share</p>
      </div>
      <button class="settings">
        <i class="fa-solid fa-ellipsis" style="color: #ffffff"></i>
      </button>
      <img
        width="50"
        height="50"
        src="${image}"
        alt="display-photo"
        onclick = "goToProfile(event, '${profile_URL}')"
      />
    </div>
  </section>`;
  });
  shortsContainer.innerHTML = shorts.join();
};

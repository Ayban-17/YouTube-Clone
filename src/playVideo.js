let playMain = document.querySelector("main");
let videoID = JSON.parse(localStorage.getItem("videoID"));
let viewStorage = JSON.parse(localStorage.getItem("views"));
let randomNumber = Math.ceil(Math.random() * 2000000);
let subscribers;

const generateNumberOfSubs = (num) => {
  if (num > 1000000) {
    subscribers = (num / 1000000).toFixed(1) + "m";
  } else if (num > 1000) {
    subscribers = (num / 1000).toFixed(1) + "k";
  } else {
    subscribers = num;
  }
};
generateNumberOfSubs(randomNumber);

const generateIframe = () => {
  let video = mainData.find((data) => data.id === videoID);
  let {
    id,
    image,
    title,
    name,
    release_date,
    profile_URL,
    description,
    embed_URL,
  } = video;
  let idSearch = viewStorage.find((data) => data.id === id) || [];
  playMain.innerHTML = `<div class="player-container">
  <iframe
    src="${embed_URL}"
    title="${title}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe
  >;
  <img class="bg-thumbnail" src="assets/thumbnails/one.png" alt="" />
</div>
<div class="video-player-details">
  <h1>
    ${title}
  </h1>
  <div class="info-and-analytics">
    <div class="channel-info">
      <img src="${image}" alt="display-photo" />
      <div class="details">
        <p style="color: #fff"class="channel-name" onclick="goToProfile(event,'${profile_URL}')">${name}</p>
        <p>${subscribers} subscribers</p>
      </div>
      <button>Subscribe</button>
    </div>
    <div class="analytics">
      <div class="reaction">
        <button class="like">
          <i
            class="fa-regular fa-thumbs-up fa-lg"
            style="color: #ffffff"
          ></i>
          <p>89</p>
        </button>

        <button class="dislike">
          <i
            class="fa-regular fa-thumbs-down fa-lg"
            style="color: #ffffff"
          ></i>
        </button>
      </div>
      <button class="share">
        <i class="fa-solid fa-share fa-lg" style="color: #ffffff"></i>
        <p>Share</p>
      </button>
      <button>
        <i class="fa-solid fa-ellipsis" style="color: #ffffff"></i>
      </button>
    </div>
  </div>
  <div class="additional-details additional-details-hidden">
    <div class="above-description">
      <p>${
        idSearch.viewsCount === undefined ? 0 : idSearch.viewsCount
      } views</p>
      <p>${release_date}</p>
      <p>Tag</p>
    </div>
    <div class="desc description-hidden">
      <p>
       ${description}
      </p>
      <h3 class="show-less">Show Less</h3>
    </div>
    <h3>Show More</h3>
  </div>
  <nav class="tag">
    <ul class="top-nav">
      <li class="categories active">All</li>
      <li class="categories">JavaScript</li>
      <li class="categories">Mixes</li>
      <li class="categories">Computer Programming</li>
      <li class="categories">Gaming</li>
      <li class="categories">Music</li>
      <li class="categories">Machine Learning</li>
      <li class="categories">API</li>
      <li class="categories">HTML</li>
      <li class="categories">CSS</li>
      <li class="categories">React JS</li>
      <li class="categories">Live</li>
      <li class="categories">Python</li>
      <li class="categories">Volleyball</li>
      <li class="categories">useEffect</li>
      <li class="categories">useState</li>
      <li class="categories">Hooks</li>
      <li class="categories">Front End</li>
      <li class="categories">Back End</li>
      <li class="categories">Road Map</li>
    </ul>
  </nav>
</div>

<div id="connected-videos"></div>`;
};
generateIframe();

const generateConnectedVideos = () => {
  let connectedVid = document.getElementById("connected-videos");
  let showMore = document.querySelector(".additional-details");
  let showLess = document.querySelector(".show-less");
  let descriptionBtn = document.querySelector(".desc");

  showMore.addEventListener("click", () => {
    descriptionBtn.classList.remove("description-hidden");
    showMore.classList.remove("additional-details-hidden");
  });

  showLess.addEventListener("click", (e) => {
    e.stopPropagation();
    descriptionBtn.classList.add("description-hidden");
    showMore.classList.add("additional-details-hidden");
    window.scrollTo(0, 0);
  });

  return (connectedVid.innerHTML = mainData
    .map((data) => {
      const {
        id,
        thumbnail,
        image,
        title,
        name,
        release_date,
        video_URL,
        profile_URL,
        description,
      } = data;
      let idSearch = viewStorage.find((data) => data.id === id);

      return `<div class="video-card-connected-videos" onclick="playVideo(${id},'${video_URL}')">
  <img width="360px"
  height="200px" 
  src="${thumbnail}" alt="">
  <div class="right-container">
      <p class="video-title-search">
         ${title}
        </p>
        <div class="analytics analytics-search">
          <p class="views views-search" id="views-${id}">${
        idSearch === undefined ? 0 : idSearch.viewsCount
      } views</p>
          <p class="dot "></p>
          <p class="time-stamp time-stamp-search">${release_date}</p>
        </div>
        <div class="channel-info">
          <img src="${image}" alt="Display-Photo">
          <div class="channel-name" onclick="goToProfile(event,'${profile_URL}')">${name}</div>
        </div>
        <p class="description">${description} </p>
  </div>
</div>`;
    })
    .join(""));
};
generateConnectedVideos();

let main = document.querySelector("main");
let filterElement = document.querySelector("main");
let searchdata = JSON.parse(localStorage.getItem("searchData"));
let viewStorage = JSON.parse(localStorage.getItem("views"));
let form2 = document.getElementById("form");
let searchElement2 = document.getElementById("search");
let { keyword, data } = searchdata;

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  searchVideo();
});

const filterToggle = () => {
  filterElement.classList.toggle("filters-hide");
};

const returnResults = (keyword, data) => {
  return (main.innerHTML = data
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

      return `<div class="video-card-search" onclick="playVideo(${id},'${video_URL}')">
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

const generateVideo = (keyword, dataHolder) => {
  return (main.innerHTML = ` <div class="no-search-found"></div>
  <div class="filters">
    <button onclick="filterToggle()">
      <div class="filter-header">
        <i class="fa-solid fa-sort" style="color: #ffffff"></i>
        <p style="color: var(--text-primary)">Filters</p>
      </div>
    </button>

    <div class="filter-body">
      <h1>FILTERS ARE HERE</h1>
    </div>
  </div>
  <div class="search-results">
  ${returnResults(keyword, dataHolder)}
  </div> `);
};

const generateSearchVideo = () => {
  if (!(data.length === 0)) {
    generateVideo(keyword, data);
  } else {
    generateVideo(keyword, mainData);
    let noResults = document.querySelector(".no-search-found");
    noResults.textContent = `No results found for "${keyword}"`;
  }
};

generateSearchVideo();

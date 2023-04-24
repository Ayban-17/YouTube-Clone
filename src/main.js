let menuHeader = document.getElementById("menu-header");
let play = document.querySelector("main");
let leftNavMenuHeader = document.getElementById("left-nav-menu-header");
let aside = document.querySelector("aside");
let leftNavItems = document.querySelectorAll(".left-nav-item");
let form = document.getElementById("form");
let searchElement = document.getElementById("search");
let searchData;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchVideo();
});

menuHeader.addEventListener("click", () => {
  aside.classList.remove("hidden");
});

leftNavMenuHeader.addEventListener("click", () => {
  aside.classList.add("hidden");
});

//Making each of nav  item clickable
leftNavItems.forEach((item) => {
  let anchorHref = item.querySelector("a").getAttribute("href");
  item.addEventListener("click", () => {
    window.location.href = anchorHref;
    // leftNavItems.forEach((item) => {
    //   item.classList.remove("selected");
    // });
    // item.classList.add("selected");
  });
});

const searchVideo = () => {
  let searchWord = searchElement.value;
  searchData = mainData.filter((data) =>
    data.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  if (searchWord === "") {
    return;
  } else {
    localStorage.setItem(
      "searchData",
      JSON.stringify({ keyword: searchWord, data: searchData })
    );
    window.location.href = "search.html";
    // if (searchData.length === 0) {
    //   noSearchFoundEl.innerHTML = `<h1 style="color:#fff"> No results found for "${searchWord}"`;
    // }
  }
};

const goToProfile = (event, profile_URL) => {
  event.stopPropagation();
  window.open(profile_URL);
};

const playVideo = (videoID, video_URL) => {
  // window.open(video_URL);
  localStorage.setItem("videoID", JSON.stringify(videoID));
  window.location.href = "playVideo.html";
  getNumberOfViews(videoID);
};

const getNumberOfViews = (videoID) => {
  let selectedVideo = mainData.find((data) => data.id === videoID);
  let viewsCount = (selectedVideo.views += 1);
  setToLocaleStorage(videoID, viewsCount);
};

const setToLocaleStorage = (videoID, viewsCount) => {
  let idSearch = viewStorage.find((data) => data.id === videoID);
  if (idSearch) {
    idSearch.viewsCount += 1;
  } else {
    viewStorage.push({ id: videoID, viewsCount: viewsCount });
  }
  localStorage.setItem("views", JSON.stringify(viewStorage));
  // updateNumberOfViews(videoID);
};

// const updateNumberOfViews = (videoID) => {
//   const viewsElement = document.getElementById(`views-${videoID}`);
//   let updatedView = viewStorage.find((data) => data.id === videoID);
//   viewsElement.textContent = `${updatedView.viewsCount} views`;
// };

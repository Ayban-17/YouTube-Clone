let main = document.querySelector("main");
let logo = document.querySelector(".logo");
let viewStorage = JSON.parse(localStorage.getItem("views")) || [];

const generateVideo = () => {
  main.innerHTML = mainData.map((data) => {
    const {
      id,
      thumbnail,
      image,
      title,
      name,
      release_date,
      video_URL,
      profile_URL,
    } = data;
    let idSearch = viewStorage.find((data) => data.id === id) || [];
    return ` <div class="video-card" onclick="playVideo(${id},'${video_URL}')">
    <img
              width="360px"
              height="200px"
              src="${thumbnail}"
              alt="thumbnail"
            />
    <div class="bottom-container">
      <div class="channel-photo">
        <img
          width="35px"
          height="35px"
          src=${image}
          alt="display photo"
        />
        
      </div>
      <div class="video-details">
        <p class="video-title">
          ${title}
        </p>
        <p class="channel-name" onclick="goToProfile(event, '${profile_URL}')">${name}</p>
        <div class="analytics">
          <p class="views" id="views-${id}">${
      idSearch.viewsCount === undefined ? 0 : idSearch.viewsCount
    } views</p>
          <p class="dot"></p>
          <p class="time-stamp">${release_date}</p>
        </div>
      </div>
    </div>
  </div> `;
  });
};
generateVideo();

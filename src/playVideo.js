let playMain = document.querySelector("main");
let videoID = JSON.parse(localStorage.getItem("videoID"));

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
  playMain.innerHTML = `<iframe
  width="718"
  height="404"
  src="${embed_URL}?autoplay=1"
  title="${title}"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>`;
};
generateIframe();

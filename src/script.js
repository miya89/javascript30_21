const arrow = document.querySelector("arrow");
const speed = document.querySelector(".speed");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.getElementsByClassName.transform = `${data.coords.heading}deg`;
  },
  (err) => {
    console.error(err);
    alert("Wanna allow that to happen?!");
  }
);

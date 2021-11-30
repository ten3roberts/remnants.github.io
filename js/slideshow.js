let currentImage = 0;

let images = [
  {
    src: "../img/alarm.jpg",
    caption: "Alarm ",
  },
  {
    src: "../img/squid.jpg",
    caption: "Unknown",
  },
  {
    src: "../img/small.jpg",
    caption: "Stationary monster",
  },
  {
    src: "../img/sound.jpg",
    caption: "Sound based monster",
  },
  {
    src: "../img/sound1.jpg",
    caption: "closer look on sound based monster",
  },
  {
    src: "../img/spider.jpg",
    caption: "closer look on vision based monster",
  },
  {
    src: "../img/spider1.jpg",
    caption: "Vision based monster",
  },
  {
    src: "../img/strong.jpg",
    caption: "Brute",
  },
  {
    src: "../img/ugly.jpg",
    caption: "Experiment A",
  },
  {
    src: "../img/level1.jpg",
    caption: "First level",
  },
  {
    src: "../img/level2.jpg",
    caption: "Second level",
  },
  {
    src: "../img/level3.jpg",
    caption: "Third level",
  },
];

let frame = document.getElementById("slideshow");
let img = document.getElementById("slideshow-image");
let caption = document.getElementById("slideshow-caption");
let indicator = document.getElementById("slideshow-indicator");

let playing = true;

function slideshow() {
  if (playing) {
    nextImage();
  }
}

function nextImage() {
  setImage();

  currentImage = (currentImage + 1) % images.length;
}

function prevImage() {
  setImage();

  currentImage = (currentImage + images.length - 1) % images.length;
}

function setImage() {
  let image = images[currentImage];
  img.src = image.src;
  caption.textContent = image.caption;
}

// Pause the slideshow when navigating manually
function stopSlideshow() {
  playing = false;
  updateIndicator();
}

function toggleSlideshow() {
  playing = !playing;
  updateIndicator();
}

// Update play pause indicator
function updateIndicator() {
  if (playing) {
    indicator.classList = "fa fa-pause";
  } else {
    indicator.classList = "fa fa-play";
  }
}

nextImage();

setInterval(slideshow, 5000);

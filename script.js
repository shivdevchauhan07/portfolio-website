const text = [
  "Full Stack Developer",
  "Python Developer",
  "Cybersecurity Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();
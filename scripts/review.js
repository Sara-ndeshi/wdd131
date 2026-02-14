let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
  reviewCount = 0;
}

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;

document.addEventListener("DOMContentLoaded", function () {
  const lastMod = document.getElementById("lastModified");
  if (lastMod) lastMod.textContent = "Last Modification: " + document.lastModified;
});

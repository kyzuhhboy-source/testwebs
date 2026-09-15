const statusText = document.getElementById("status");
const jsStatus = document.getElementById("jsStatus");
const testBtn = document.getElementById("testBtn");
const statusDot = document.querySelector(".status-dot");

document.addEventListener("DOMContentLoaded", () => {
  statusText.textContent = "JavaScript berhasil terhubung!";
  jsStatus.textContent = "Connected";

  statusDot.classList.add("active");
});

testBtn.addEventListener("click", () => {
  statusText.textContent = "JavaScript bekerja dengan normal ⚡";

  testBtn.textContent = "JavaScript Aktif ✓";

  statusDot.classList.add("active");

  setTimeout(() => {
    testBtn.textContent = "Tes JavaScript";
  }, 2000);
});

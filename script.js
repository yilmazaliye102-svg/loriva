function openModal(title, desc, price, img) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalImage").src = img;
  document.getElementById("menuModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("menuModal").style.display = "none";
}

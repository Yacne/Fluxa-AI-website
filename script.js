
function toggleMenu() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("active");
}

// إضافة سطر لإخفاء القائمة عند النقر على عنصر منها
const menuItems = document.querySelectorAll("#dropdown-menu ul li a");
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.remove("active");
  });
});

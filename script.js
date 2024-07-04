document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger-menu");
  const closeBtn = document.querySelector(".close-btn");
  const menu = document.querySelector("menu");
  const navItems = document.querySelectorAll(".nav_item");

  navItems.forEach((ele) => {
    ele.addEventListener("click", () => {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      }
    });
  });

  const closeMenu = () => {
    menu.classList.remove("open");
  };

  const updateYear = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    document.querySelector(".copy span").textContent = currentYear;
  };

  function updateDateTime() {
    const now = new Date();
    const options = { weekday: "long" };
    const currentDay = now.toLocaleDateString("en-US", options);
    const currentTimeUTC = now.toUTCString().split(" ")[4];

    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').textContent =
      currentDay;
  }

  closeMenu();
  updateDateTime();
  updateYear();
  setInterval(updateDateTime, 1000);

  menuBtn.addEventListener("click", () => {
    menu.classList.add("open");
  });

  closeBtn.addEventListener("click", closeMenu);

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });
});

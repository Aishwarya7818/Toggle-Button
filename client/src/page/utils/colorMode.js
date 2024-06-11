// utils/colorMode.js
export const changeColorMode = (to) => {
    if (to) {
      localStorage.setItem("darkMode", true);
      document.body.className = "dark";
    } else {
      localStorage.removeItem("darkMode");
      document.body.className = "light";
    }
  };
  
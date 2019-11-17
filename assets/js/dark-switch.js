var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
var theme = "light";

(function() {
  function detectColorScheme(){
    if(localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    } else if(darkModeMediaQuery && darkModeMediaQuery.matches) {
      theme = "dark";
    }
    document.documentElement.setAttribute("data-theme", theme);
  }
  function setDarkTheme() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    $("#moon").hide();
    $("#sun").show();
  }
  function setLightTheme() {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    $("#moon").show();
    $("#sun").hide();
  }
  function switchTheme(e) {
    if ($("#moon").is(":visible")) {
      setDarkTheme();
    } else {
      setLightTheme();
    }    
  }

  detectColorScheme();
  $("#dark-switch").on('click', switchTheme);

  if (document.documentElement.getAttribute("data-theme") == "dark"){
    setDarkTheme();
  } else {
    setLightTheme();
  }

  if (darkModeMediaQuery) {
    darkModeMediaQuery.addListener(function(e) {
      if (e.matches) {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    });
  }

})();
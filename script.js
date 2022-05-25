if (localStorage.getItem("darkMode") == "t") {
    document.body.classList.add("dark-mode");
}
function darkModeFunction() {
    document.body.classList.toggle("dark-mode");
    //i almost lost my sanity in this localStorage shit
    if (localStorage.getItem("darkMode") == "f") {
        localStorage.clear();
        localStorage.setItem("darkMode", "t");
    } else if (localStorage.getItem("darkMode") == "t") {
        localStorage.clear();
        localStorage.setItem("darkMode", "f");
    } else {
        localStorage.setItem("darkMode", "t");
    }
}
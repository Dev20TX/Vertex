function navFunction(e) {
  if (e.target.scrollTop > 50) {
    document.querySelector(".nav").className = "nav test";
  } else {
    document.querySelector(".nav").className = "nav";
  }
}

document.querySelector(".container").addEventListener("scroll",navFunction);




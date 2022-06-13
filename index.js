
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}



window.onload = () => {
  const anchors = document.querySelectorAll('.jsanchor');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 200);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add('is-active');

      setInterval(() => {
        window.location.href = target;
      }, 200);
    })
  }
}





// Enable hidden nav bar
{
  const nav = document.querySelector(".navcontain");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}










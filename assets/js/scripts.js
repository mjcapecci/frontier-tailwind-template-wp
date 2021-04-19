// initialize animate-on-scroll library
AOS.init();

// get resize value for AOS behavior

let screenType;

const aosTargets = document.querySelectorAll('[data-aos]');

document.addEventListener('DOMContentLoaded', () => {
  // get screen type
  if (window.innerWidth > 600) screenType = 'full';
  else screenType = 'mobile';
});

window.addEventListener('resize', () => {
  if (screenType !== 'mobile' && window.innerWidth < 600) {
    for (const element of aosTargets) {
      element.setAttribute('data-aos-offset', window.innerHeight * -1);
    }
    screenType = 'mobile';
  } else if (screenType !== 'full' && window.innerWidth < 600) {
    for (const element of aosTargets) {
      element.setAttribute('data-aos-offset', 0);
    }
    screenType = 'full';
  }
});

/**
 * Studio Joons - Glass Nav Scroll Engine
 * Emulates native iOS bar hiding with threshold buffer and RAF throttle
 */
(() => {
  const initNavScroll = () => {
    const navWrapper = document.querySelector('.floating-nav-wrapper');
    if (!navWrapper) return;

    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let isTicking = false;
    const scrollThreshold = 12; // Minimum delta before triggering state changes
    const pinOffset = 60;        // Keep navigation visible near the top of the viewport

    const updateNavVisibility = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDifference = currentScrollY - lastScrollY;

      // Always restore navigation at the top of the page
      if (currentScrollY <= pinOffset) {
        navWrapper.classList.remove('nav-hidden');
      } 
      // Scrolling Down -> Fade Out
      else if (scrollDifference > scrollThreshold) {
        navWrapper.classList.add('nav-hidden');
      } 
      // Scrolling Up -> Fade In
      else if (scrollDifference < -scrollThreshold) {
        navWrapper.classList.remove('nav-hidden');
      }

      lastScrollY = Math.max(0, currentScrollY);
      isTicking = false;
    };

    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(updateNavVisibility);
        isTicking = true;
      }
    }, { passive: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavScroll);
  } else {
    initNavScroll();
  }
})();
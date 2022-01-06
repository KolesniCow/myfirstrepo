function OnEnter(entrys, observer) {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.className.indexOf('anm-') != -1) {
        entry.target.style.transition = 'all 0.5s';
      }
      if (
        entry.target.className.indexOf('anm-slip-top') != -1 ||
        entry.target.className.indexOf('anm-slip-bottom') != -1
      ) {
        entry.target.style.transform = 'translateY(0%)';
      }
      if (entry.target.className.indexOf('anm-fade') != -1) {
        entry.target.style.opacity = '1';
        entry.target.style.transition = 'all 1';
      }
      if (
        entry.target.className.indexOf('anm-slip-left') != -1 ||
        entry.target.className.indexOf('anm-slip-right') != -1
      ) {
        entry.target.style.transform = 'translateX(0%)';
      }
      if (entry.target.className.indexOf('anm-spring') != -1) {
        entry.target.style.transform = 'scale(1)';
      }
      if (entry.target.className.indexOf('anm-spring-left') != -1) {
        entry.target.style.transformOrigin = 'right bottom';
      }
      if (entry.target.className.indexOf('anm-spring-right') != -1) {
        entry.target.style.transformOrigin = 'left bottom';
      }
      if (entry.target.className.indexOf('anm-spring-top') != -1) {
        entry.target.style.transformOrigin = 'left right bottom';
      }
      if (entry.target.className.indexOf('anm-spring-bottom') != -1) {
        entry.target.style.transformOrigin = 'left right top';
      }
      if (entry.target.className.indexOf('anm-flip-x') != -1) {
        entry.target.style.transform = 'scaleX(1)';
      }
      if (entry.target.className.indexOf('anm-flip-y') != -1) {
        entry.target.style.transform = 'scaleY(1)';
      }
      if (entry.target.className.indexOf('anm-loading') != -1) {
        entry.target.style.transform = 'scaleX(1)';
      }
    }
  });
}

let option = {
  threshold: 1,
};

const observ = new IntersectionObserver(OnEnter, option);

const objects = document.querySelectorAll('.anm');

objects.forEach((obj) => {
  observ.observe(obj);
});

const progressBox = document.querySelector('.kitchen__counts');
const speed = 200;

window.addEventListener("scroll", () => {
  numProgres();
});

const numProgres = () => {  
  if(window.pageYOffset + window.innerHeight >= progressBox.offsetTop){
    document.querySelectorAll('.kitchen__counts-box--count').forEach(counter => {
      const counterNumber = +counter.getAttribute('counter');

      const upDateCount = setInterval(() => {
        const divContent = +counter.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ? counter.innerHTML = Math.ceil(divContent + increaseBy) : clearInterval(upDateCount);

      }, 1);
    });
  }
};

numProgres();
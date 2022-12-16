const hdWrap = document.getElementById('hdWrap');
const hdWrapHeight = document.getElementById('hdWrap').clientHeight;
console.log(hdWrapHeight)

window.addEventListener("wheel",function(e){
    if (e.deltaY < 0) {
        hdWrap.classList.add('height80');
      } else {
        hdWrap.classList.remove('height80');
      }
})
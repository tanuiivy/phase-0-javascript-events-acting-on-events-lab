// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // 400px - 40px (dodger's width) = 360px
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
      
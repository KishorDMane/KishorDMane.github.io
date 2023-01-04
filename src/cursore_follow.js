class Circle {
    constructor() {
      this.circle = document.createElement("div");
      this.colors = [
        "03045e",
        "023e8a",
        "0077b6",
        "0096c7",
        "00b4d8",
        "90e0ef",
        "ade8f4"
      ];
    }
    draw(x, y) {
      this.circle.classList.add("circle");
      this.circle.style.top = `${y}px`;
      this.circle.style.left = `${x}px`;
      this.circle.style.background = `#${
        this.colors[Math.floor(Math.random() * this.colors.length - 1)]
      }`;
      document.querySelector("body").append(this.circle);
    }
  }
  let home=document.getElementById("homepage")
  home.addEventListener("mousemove", function (e) {
    let c = new Circle();
    c.draw(e.clientX, e.clientY);
    let cicles = document.querySelectorAll(".circle");
    setTimeout(() => {
      c.circle.remove();
    }, 1000);
  });
  
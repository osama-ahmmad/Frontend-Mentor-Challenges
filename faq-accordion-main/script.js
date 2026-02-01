const clk = document.querySelectorAll(".qustetion-head");
const paragraph = document.querySelectorAll(".paragraph");
const plus = document.querySelectorAll(".icon-plus");

for (let i = 0; i < clk.length; i++) {
    clk[i].addEventListener("click", function () {
        paragraph[i].classList.toggle("hidden");

        if (!paragraph[i].classList.contains("hidden")) {
            plus[i].src = "./assets/images/icon-minus.svg";
        } else {
            plus[i].src = "./assets/images/icon-plus.svg";
        }
    });
}

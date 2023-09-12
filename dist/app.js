document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-button");
    const contentDivs = document.querySelectorAll(".content-div");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const btnId = button.getAttribute("data-btn");

            contentDivs.forEach((content) => {
                if (content.id === `content${btnId}`) {
                    content.classList.remove("hidden");
                } else {
                    content.classList.add("hidden");
                }
            });
        });
    });
});
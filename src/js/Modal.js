function modal() {
    const date = document.querySelector(".modal__date");

    const options = {
        weekday: "long",
        month: "short",
        day: "numeric",
    };

    const today = new Date();

    date.innerHTML = today.toLocaleDateString("en-US", options);
}

module.exports = modal;
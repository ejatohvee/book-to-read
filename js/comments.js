document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentsForm");
    const commentsContainer = document.getElementById("commentsContainer");

    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(comments => addCommentsToPage(comments.name, comments.body));

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("commentatorsName").value.trim();
        const body = document.getElementById("commentBody").value.trim();

        if (!name || !body) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        addCommentsToPage(name, body);
        saveComments(name, body);

        form.reset();
    });

    function addCommentsToPage(name, body) {
        const commentsCard = document.createElement("div");
        commentsCard.classList.add("book-card__comments-card");

        const commentsTitle = document.createElement("h3");
        commentsTitle.textContent = name;

        const commentsBody = document.createElement("p");
        commentsBody.textContent = body;

        commentsCard.appendChild(commentsTitle);
        commentsCard.appendChild(commentsBody);

        commentsContainer.appendChild(commentsCard);
    }

    function saveComments(name, body) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({name, body});
        localStorage.setItem("comments", JSON.stringify(comments));
    }
});

// STEP 1: Select HTML elements
const commentInput = document.getElementById("commentInput");
const addBtn = document.getElementById("addBtn");
const commentList = document.getElementById("commentList");
const commentCount = document.getElementById("commentCount");
const status = document.getElementById("status");
const emptyMessage = document.getElementById("emptyMessage");

// STEP 2: Update comment count
function updateCommentCount() {
    const comments = commentList.querySelectorAll(".comment");

    commentCount.textContent = "Total comments: " + comments.length;

    if (comments.length === 0) {
        emptyMessage.hidden = false;
    } else {
        emptyMessage.hidden = true;
    }
}

// STEP 3: Add a new comment
addBtn.addEventListener("click", function() {

    const commentText = commentInput.value.trim();

    if (commentText === "") {
        status.textContent = "Please enter your feedback first.";
        commentInput.focus();
        return;
    }

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = commentText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Feedback";
    removeBtn.classList.add("removeBtn");

    removeBtn.addEventListener("click", function() {
        commentDiv.remove();

        updateCommentCount();
        status.textContent = "Feedback removed.";
    });

    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(removeBtn);

    commentList.appendChild(commentDiv);

    commentInput.value = "";
    commentInput.focus();

    updateCommentCount();

    status.textContent = "Feedback submitted successfully!";

    console.log("Feedback added:", commentText);
});

// STEP 4: Display initial comment count
updateCommentCount();

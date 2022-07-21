let submitBtn = document.getElementById("submitBtn");
let commentContainer = document.getElementById("commentsContainer")
let newComment = document.createElement("div")

submitBtn.addEventListener("click" , function postComment() {
    let comment = document.getElementById("comment").value
        if(comment == ""){
            alert("Please type a comment!")
        } else {
           commentContainer.appendChild(newComment)
           newComment.classList.add("comment")
           newComment.innerText = comment;
    
        }
    })







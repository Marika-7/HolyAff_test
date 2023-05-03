let answers = [];

function saveAnswer(event) {
    const str = event.target.textContent;
    answers.push(str);
}

function showAnswers() {
    answers.forEach(elem => console.log(elem));
    document.getElementById('content3').style.display = 'none';
}

function addComment() {
    const newComment = document.getElementById('newComent').value;
    if(!newComment) {
        document.getElementById('newComent').focus();
        return;
    }
    let newBlock = document.createElement('div');
    newBlock.classList.add('comments');
    newBlock.innerHTML = 
        `<div class="profile">
        <img src="./assets/guest.png">
        </div>
        <div class="comment-content">
        <p class="name">Guest</p>
        <p>${newComment}</p>
        </div>
        <div class="clr"></div>
        <div class="comment-status">
        <span>Curte·comente</span>
        <img src="./assets/like.png" width="15px" height="15px">
        <span>0</span>
        <small>·
        <u>now</u>
        </small>
        </div>`;
    document.getElementById('allComments').prepend(newBlock);
    document.getElementById('newComent').value = '';
    document.getElementById('allComments').scrollIntoView({ behavior: "smooth" });
}

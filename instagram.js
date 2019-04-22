const username = 'Leyda'
let likeCount = 0

const likeCountElem = document.querySelector('.likes-edit')
//console.log(likeCountElem)
const likeButton = document.querySelector('.like-img')
//console.log(likeButton)

likeButton.addEventListener('click',addLikeCount)

function addLikeCount() {
    if(likeButton.classList.contains('liked') === false) {
        likeCountElem.innerHTML = ` 1 Like`
        // likeCount = likeCount + 1
        likeCount = `${likeCount} 1 `
        likeButton.classList.add('liked')
    } else {
        likeButton.classList.remove('liked')
        likeCountElem.innerHTML = ''
        likeCount = 0
    }
}

const commentInput = document.querySelector('.input')
const commentsContainer = document.querySelector('.add-comment')
//console.log(commentsContainer)

commentsContainer.addEventListener('submit',handleCommentSubmit)

function handleCommentSubmit(event) {
    event.preventDefault()
    const commentText = commentInput.value
    console.log(commentText)
    if(input.value !== '') {
        console.log(`it is empty`)
    } else {
        
    }
}

function addComment(commentText) {

}




// function addComment(commentText) {
//     const commentHTML = 
// }








// const commentInput = document.querySelector('.input')
// //console.log(commentArea)

// const commentsContainer = document.querySelector('.comments')
// //console.log(commentsContainer)

// const commentSubmit = document.querySelector('.add-comment')
// //console.log(commentSubmit)


// function handleCommentSubmit(event) {
//     event.preventDefault()
//     const commentText = commentInput.value
//     console.log(commentText)    
//     if(commentText === '') {
//         console.log('it is empty')
//     } else {
        
//     }
// }

// commentSubmit.addEventListener('submit',handleCommentSubmit)


// function addComment(commentText) {
//     const commentHTML = `<div class="comments">
//     <a href="https://www.instagram.com/bliss215/" target="_blank">
//         <h2>${username}</h2>
//     </a>
//     <span>${commentText}</span>
//     <img src="./images/likecomment.jpg" alt="like comment img">
// </div>`

//     const originalHTML = commentsContainer.innerHTML
//     commentsContainer.innerHTML = originalHTML + commentHTML
//     commentInput.value = ''
// }
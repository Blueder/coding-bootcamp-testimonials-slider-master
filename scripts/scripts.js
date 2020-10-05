loadScript = function() {
    let prevButton = document.getElementById('scrollLeft');
    let nextButton = document.getElementById('scrollRight');
    let profileImage = document.getElementById('profile');
    let comment = document.getElementById('comment');
    let name = document.getElementById('name');
    let occupation = document.getElementById('occupation');
    let currentImage = true;

    function changeImage() {
        profileImage.src = "/images/image-" + (currentImage? "john": "tanya") + ".jpg";

        comment.innerText = currentImage ? 
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer"
        
        :"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";

        name.innerText = currentImage ? "John Tarkpor": "Tanya Sinclair";
        occupation.innerText = currentImage ? "Junior Front-end Developer": "UX Engineer";
        currentImage = !currentImage;
    }
    nextButton.onclick = function() {changeImage();}
    prevButton.onclick = function() {changeImage();}
}
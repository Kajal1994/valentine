function openScroll() {
    document.getElementById('messageBox').classList.remove('hidden');
    generateHearts();
}

function generateHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

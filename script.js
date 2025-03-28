document.getElementById('fotoPerfil').addEventListener('click', function() {
    alert("Oi! Sou o Guilherme, um dev front-end web apaixonado por cybersecurity");
});

let likeCount = 0;
let dislikeCount = 0;

document.getElementById('likeBtn').addEventListener('click', function() {
    likeCount++;
    document.getElementById('likeCount').textContent = likeCount;
});

document.getElementById('dislikeBtn').addEventListener('click', function() {
    dislikeCount++;
    document.getElementById('dislikeCount').textContent = dislikeCount;
});

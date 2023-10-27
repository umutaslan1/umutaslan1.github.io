// Anasayfa bağlantısını seçin
var homeLink = document.getElementById('homeLink');

// Tıklanabilirlik işlevini ekleyin
homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Varsayılan tıklama davranışını engelle
    window.location.href = 'index.html'; // Anasayfaya yönlendir
});

$(document).ready(function () {
  // Fungsi untuk menambahkan kelas "active" ke tautan yang mengarah ke ID yang sesuai dengan bagian URL
  function setActiveLink() {
    var hash = window.location.hash;
    $(".nav-link").removeClass("active");
    if (hash !== "") {
      $('.nav-link[href="' + hash + '"]').addClass("active");
    }
  }

  // Panggil fungsi untuk menambahkan kelas "active" pada saat halaman dimuat
  setActiveLink();

  // Panggil fungsi untuk menambahkan kelas "active" ketika tautan di klik
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

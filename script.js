document.getElementById('loginBtn').addEventListener('click', function() {
  var formContainer = document.getElementById('loginFormContainer');
  formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});

function validateForm() {
  document.getElementById('usernameError').innerText = '';
  document.getElementById('passwordError').innerText = '';


  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var valid = true;

  if (username === '') {
      document.getElementById('usernameError').innerText = 'Username is required.';
      valid = false;
  }

  if (password === '') {
      document.getElementById('passwordError').innerText = 'Password is required.';
      valid = false;
  }

  if (valid) {
      document.getElementById('loginFormContainer').style.display = 'none';
  }

  return valid;
}
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

images.forEach((img, index) => {
  img.style.display = index === 0 ? 'block' : 'none';
});

function changeImage(direction) {
  images[currentIndex].style.display = 'none';
  
  currentIndex = (currentIndex + direction + images.length) % images.length;
  
  images[currentIndex].style.display = 'block';
}

// image slider
let currentStartIndex = 0;
const reviews = document.querySelectorAll('.malupiton-review');
const reviewsToShow = 3;
const reviewCount = reviews.length;

function showReviews() {
    reviews.forEach((review) => {
        review.style.display = 'none'; 
    });

    // Show the next set of 3 reviews
    for (let i = 0; i < reviewsToShow; i++) {
        const index = (currentStartIndex + i) % reviewCount;
        reviews[index].style.display = 'block'; 
    }

    currentStartIndex = (currentStartIndex + 1) % reviewCount;
}

setInterval(showReviews, 2000);
showReviews();












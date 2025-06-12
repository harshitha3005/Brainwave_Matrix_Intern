const slider = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderImages = document.querySelectorAll('.slider-image img');
const saladImg = document.querySelector('.salad img');
const countSpan = document.querySelector('.sp span');
const orderName = document.querySelector('.order p span');
const orderTime = document.querySelector('.order button');


const deliveryTimes = {
    'Burger': '12-20 mins',
    'Veg salad': '10-18 mins',
    'Shawarma': '15-25 mins',
    'Chicken': '20-30 mins',
    'Biryani': '25-35 mins',
    'French fries': '8-15 mins'
};

let currentIndex = 0;
let count = 0;
const imageWidth = sliderImages[0].offsetWidth;


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});


sliderImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
        updateCount();
    });
});

function updateImage() {
    const currentSrc = sliderImages[currentIndex].src;
    const currentItem = document.querySelectorAll('.slider-image span')[currentIndex].textContent;
    saladImg.src = currentSrc;
    orderName.textContent = currentItem;
    orderTime.innerHTML = `<i class="fa-solid fa-clock"></i>${deliveryTimes[currentItem] || '10-18 mins'}`;
}

function updateCount() {
    count++;
    countSpan.textContent = count;
}


const stars = document.querySelectorAll('.stars i');
const message = document.querySelector('.message');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        setRating(index + 1);
    });
});

function setRating(rating) {
    stars.forEach((star, index) => {
        setTimeout(() => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        }, index * 100);
    });

    const messages = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
    message.textContent = messages[rating - 1] || "";
}
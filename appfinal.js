let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})



const container = document.getElementById('container');
const bookBtn = document.getElementById('book-button');
const cancelBtn = document.getElementById('cancel-button');

bookBtn.addEventListener('click', () => {
    container.classList.add("active");
});

cancelBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



document.getElementById('scroll-to-toggle').addEventListener('click', function() {
    document.getElementById('site-visit').scrollIntoView({ behavior: 'smooth' });
});



const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const language = form.querySelector('input[list="languages"]').value;
    const consent = form.querySelector('input[type="checkbox"]').checked;

    const formData = {
        name,
        email,
        phone,
        language,
        consent
    };

    localStorage.setItem('pressanaFormData', JSON.stringify(formData));

    alert('Form data saved successfully!');
    form.reset();
});



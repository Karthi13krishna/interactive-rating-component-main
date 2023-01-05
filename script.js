const card = document.getElementById('rating-card');
const buttons = document.querySelectorAll('.rating__btn');
const submit = document.getElementById('submit');
let rating;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => {
      item.classList.remove('selected');
    });
    button.classList.add('selected');
    rating = button.value;
  });
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (rating) {
    card.innerHTML = `<div class="grid thank-you-section">
    <div>
      <img
        class="thank-you__image"
        src="./images/illustration-thank-you.svg"
        alt="illustration of a phone"
      />
    </div>
    <div class="rating-result">You selected ${rating} out of 5</div>
    <div class="title">Thank you!</div>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>`;
  } else {
    alert('Please select a rating before submitting!');
  }
});

console.log("Bezbaruahns Coming Soon loaded");
(function () {
  emailjs.init("KVgZayqX8kWFjp3eD"); // yaha public key aayega
})();

document.getElementById("suggestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_8ifch4p",
    "template_72zdsjm",
    this
  ).then(
    function () {
      document.getElementById("statusMsg").innerText =
        "✅ Thank you! Your suggestion has been sent.";
      document.getElementById("suggestForm").reset();
    },
    function (error) {
      document.getElementById("statusMsg").innerText =
        "❌ Something went wrong. Please try again.";
      console.error(error);
    }
  );
});
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
  }).mount();
});
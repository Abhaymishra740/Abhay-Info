// AOS animations
AOS.init();

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  status.textContent = "Sending...";
  status.className = "status-message";
  status.style.opacity = 1;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      form.reset();
      status.textContent = "Message sent successfully! 🎉";
      status.className = "status-message success";
    } else {
      throw new Error("Form submission failed.");
    }
  } catch (error) {
    console.error(error);
    status.textContent = "Something went wrong. Please try again.";
    status.className = "status-message error";
  }

  setTimeout(() => {
    status.style.opacity = 0;
  }, 4000);
});


<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>

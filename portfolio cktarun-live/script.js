//for smmoth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//email sender..

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user's details from the form
  const email = document.getElementById('email').value.trim(); // Trim whitespace
  const message = document.getElementById('message').value;

  // Check if email ends with ".com"
  if (email.toLowerCase().endsWith('.com')) {
    // Send email using EmailJS
    emailjs.send("service_b8h1v13", "template_t6tsb59", {
      to_email: email,
      message_html: message
    }).then(function(response) {
      console.log('Email sent:', response);
      alert('Your message has been sent successfully!');
      // Optionally clear the form fields
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, function(error) {
      console.error('Email send failed:', error);
      alert('There was an issue sending your message. Please try again later.');
    });
  } else {
    alert('Please enter a valid email address ending with ".com".');
    // Optionally focus back on the email input field
    document.getElementById('email').focus();
  }
});



//hero animate

function firstpage() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  }).to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: 0.2,
  });
  tl.from("#herofooter", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}

//animate projects

let tll = gsap.timeline({
  scrollTrigger: {
    trigger: "#second",
    start: "0% 50%",
    end: "80% 50%",
    scrub: true,
    // markers: true,
  },
});
tll
  .to("#star", {
    transform: "translate(0%)",
    transition: .5,
    
  })
  .to("#flaash", {
    transform: "translate(0%)",
    transition: .5,

  })
  .to("#gemini", {
    transform: "translate(0%)",
    transition: .5,

  })
  .to("#swt", {
    transform: "translate(0%)",
    transition: .5,

  });

  //animate about

  let ab = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "0% 50%",
      end: "20% 50%",
      scrub: true,
      // markers: true,
    },
  });


 ab.from("#about",{
    y:0,
    opacity: 0,
 })


//animate skills

let skl = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill-section",
    start: "0% 50%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
})

skl.to(".skills",{
  transform: "translateY(0%)",
  transition: .1,
})

//animate contact

let con = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "0% 50%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
})
con.from("#contact",{
  y: 0,
  opacity: 0,
})


firstpage();

//image move animation

document.addEventListener("DOMContentLoaded", function () {
  var popupMessage = document.getElementById("popup-message");
  setTimeout(function () {
    popupMessage.classList.add("visible");
  }, 1000);

  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function (dets) {
      if (window.innerWidth > 600) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      }
    });

    elem.addEventListener("mousemove", function (dets) {
      popupMessage.classList.remove("visible");

      if (window.innerWidth <= 600) {
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: "50%",
          left: "40%",
          x: "-50%",
          y: "-50%",
        });
      }
    });

    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        // ease: Power3,
      });
    });
  });
});





// Track visitors and send email notification
function trackVisitors() {
  var email = "sinovuyoshakes@gmail.com"; // Replace with your email address
  var currentCount = parseInt(localStorage.getItem("visitorCount")) || 0;
  var newCount = currentCount + 1;
  localStorage.setItem("visitorCount", newCount);
  if (newCount >= 1) {
    sendEmailNotification(email, newCount);
  }
}

// Send email notification
function sendEmailNotification(email, count) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '40c05ede13mshc5f0bb49164c9dbp1b826bjsn691e63726ed12',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    body: `{"personalizations":[{"to":[{"email":"sinovuyoshakes@gmail.com"}],"subject":"New visitor to your website"}],"from":{"email":"Sinovuyo@sikhisi.example.com"},"content":[{"type":"text/plain","value":"Your website has received a new visitor. Total visitors so far: ${count}"}]}`
  };
  
  fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    // cors: https://proxy.cors.sh/ , 
  //   var subject = "New visitor to your website!";
  //   var body =
  //     "Your website has received a new visitor. Total visitors so far: " + count;
  //   var url = "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send"; // Replace with the URL of your email notification API
  //   var data = {
  //     personalizations: [
  //       {
  //         to: [{ email: email }],
  //         subject: subject,
  //       },
  //     ],
  //     from: {
  //       email: "sinovuyo.sikhisi97@yahoo.com",
  //     },
  //     content: [
  //       {
  //         type: "text/plain",
  //         value: body,
  //       },
  //     ],
  //   };
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-RapidAPI-Key": "0a1eafe8c8msh422e2b65e417463p13d7e7jsn019ba2a0d267",
  //       "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to send email notification");
  //       }
  //       console.log("Email notification sent");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
}

// Call the trackVisitors function when the page loads
window.onload = trackVisitors;

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==============================typeWriter==================================*/
// set up text to print, each item in array is new line
var aText = new Array(
  // "Throughout the course of my career, I have perfected my technical and communication abilities. I am a capable and consistent problem-solver skilled at prioritizing and managing projects with proficiency. In my previous role, I contributed communication, critical thinking, and technical skill toward team efforts and business improvements. I am progressive minded and in tune with new developments in my field. I have proven to be effective and collaborative with strong collaboration talents. I enjoy collective brainstorming sessions which all me to coordinate activities to achieve a common goal."
  "I am a Full Stack C# Developer who is interested in the Support Engineer role. I am most comfortable working with C#, Java, Angular, ReactJs, and JavaScript, however, I am open to working with Kotlin, Vue, Spring Boot, and Express. In my next role, I would like to deliver an engaging user experience through the optimization of code, and cross-browser compatibility. Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement. And but not limited to research, diagnosing, troubleshooting, and resolving customer issues in an accurate and timely manner. I would like the culture of the company to be, community, fairness, trustworthy management, trust, caring, and benefits go for, enhancement in productivity and employee wellbeing, better employee retention, and clearly defined goals my desired professional growth is, learning new abilities, gaining more experience in Full Stack C# Developer, pursuing any other career aspirations like growing in Support Engineer and reaching the senior role of development."
);
var iSpeed = 150; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "|";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
//https://github.com/bedimcode/responsive-website-restaurant/tree/main/assets
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
let navLinks = document.querySelectorAll("nav a")
// console.log("navLinks",navLinks);
navLinks.forEach((link, i) => {
  link.textContent = siteContent["nav"][`nav-item-${i+1}`] // siteContent nav-item-# names
});


// CTA
let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];


// MAIN-CONTENT
let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let mainContentHeadings = document.querySelectorAll(".text-content h4");
// console.log(mainContentHeadings); // empty textContent. values are in siteContent

// console.log(siteContent["main-content"]["vision-h4"]);
// let headingArray = [siteContent["main-content"]["features-h4"], siteContent["main-content"]["about-h4"], siteContent["main-content"]["services-h4"], siteContent["main-content"]["product-h4"], siteContent["main-content"]["vision-h4"]]; // need to find a cleaner way to do this (array?)
let headingArray = ["features-h4", "about-h4", "services-h4", "product-h4", "vision-h4"];
// console.log(headingArray);
mainContentHeadings.forEach((heading, i) => {
  heading.textContent = siteContent["main-content"][headingArray[i]];
  // console.log(heading.textContent);
});


// CONTACT
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactArray = ["address", "phone", "email"];
// console.log(contactArray);
let contactInfo = document.querySelectorAll(".contact p"); // put each array element into a <p>
contactInfo.forEach((contactP, i) => {
  contactP.textContent = siteContent["contact"][`${contactArray[i]}`]
});


// FOOTER
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

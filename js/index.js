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

//Title
document.title = 'Great Idea!'

// Container
let con = document.getElementsByTagName("a")

con[0].appendChild(document.createTextNode(siteContent["nav"]["nav-item-1"]))
con[1].appendChild(document.createTextNode(siteContent["nav"]["nav-item-2"]))
con[2].appendChild(document.createTextNode(siteContent["nav"]["nav-item-3"]))
con[3].appendChild(document.createTextNode(siteContent["nav"]["nav-item-4"]))
con[4].appendChild(document.createTextNode(siteContent["nav"]["nav-item-5"]))
con[5].appendChild(document.createTextNode(siteContent["nav"]["nav-item-6"]))


// 1st section

let ct = document.getElementsByClassName("cta");
let cta = document.getElementsByClassName("cta-text");
let txt = cta[0].getElementsByTagName("h1")
let x = document.createElement("BR")
// let newdom = x.appendChild(document.createTextNode(siteContent["cta"]["h1"]))
txt[0].appendChild(document.createTextNode(siteContent["cta"]["h1"]))

let but = cta[0].getElementsByTagName("button")
but[0].appendChild(document.createTextNode(siteContent["cta"]["button"]))

let img = document.getElementById("cta-img")
img.setAttribute('src', siteContent["cta"]["img-src"])

//
let ttop = document.querySelector(".top-content")
let ttop1 = ttop.querySelectorAll(".text-content")

let s = ttop1[0].getElementsByTagName('h4')
let b = ttop1[0].getElementsByTagName('p')

let ss = ttop1[1].getElementsByTagName('h4')
let bb = ttop1[1].getElementsByTagName('p')

s[0].appendChild(document.createTextNode(siteContent["main-content"]["features-h4"]))
b[0].appendChild(document.createTextNode(siteContent["main-content"]["features-content"]))


ss[0].appendChild(document.createTextNode(siteContent["main-content"]["about-h4"]))
bb[0].appendChild(document.createTextNode(siteContent["main-content"]["about-content"]))


let logo1 = document.getElementById("middle-img");
logo1.setAttribute('src', siteContent["main-content"]["middle-img-src"])
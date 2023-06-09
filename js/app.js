// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.style.height = "100vh";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("nav");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link, index) => {
  let a = document.createElement("a");
  a.innerText = link.text;
  a.setAttribute("href", link.href);
  a.setAttribute("id", index);
  topMenuEl.appendChild(a);
});

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("a");

let showingSubMenu = false;

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  //Do nothing if no link is clicked
  if (e.target.tagName.toLowerCase() !== "a") {
    return;
  } else if(e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  } else {
//remove active from all other links
topMenuLinks.forEach((link) => {
  link.classList.remove("active");
});

e.target.classList.add("active");

//Check if the menu has sublinks
if (menuLinks[e.target.id].hasOwnProperty("subLinks")) {
  showingSubMenu = true;
  console.log(showingSubMenu);
}

if (showingSubMenu) {
  console.log(menuLinks[e.target.id].subLinks)
  buildSubMenu(menuLinks[e.target.id].subLinks);
  subMenuEl.style.top = "100%";
} else {
  subMenuEl.style.top = "0";
  mainEl.innerHTML = "<h1>about</h1>";
}
  }
});

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  
});

function buildSubMenu(arr){
  subMenuEl.innerHTML = "";
  arr.forEach(arr => {
    const subA = document.createElement('a')
    subA.innerText = arr.text;
  subA.setAttribute("href", arr.href);
  subMenuEl.appendChild(subA);

  })
}

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName.toLowerCase() !== "a") {
    return;
  }
  showingSubMenu = false
  subMenuEl.style.top = "0"
  topMenuEl.classList.remove('active')
  
  mainEl.innerHTML = e.target.innerText
  
});

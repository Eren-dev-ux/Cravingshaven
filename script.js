const items=[
 {name:"Chicken Shawarma",cat:"savory",desc:"A satisfying wrap loaded with seasoned chicken and fresh fillings.",price:"₦2000-₦6000"},
 {name:"Loaded Fries",cat:"savory",desc:"Crispy fries with rich toppings for a proper comfort-food fix.",price:"Ask for price"},
 {name:"Small Chops",cat:"snacks",desc:"Party-ready bites made for sharing, celebrations and cravings.",price:"Ask for price"},
 {name:"Cakes",cat:"sweet",desc:"Celebration cakes and sweet creations made for special moments.",price:"₦2500-₦6000"},
 {name:"Burger",cat:"sweet",desc:"Fresh baked treats for breakfast, dessert or anytime snacking.",price:"Ask for price"},
 {name:"Yoghurt & Parfait",cat:"sweet",desc:"Cool, creamy treats layered for a refreshing finish.",price:"₦1500-₦5500"}
];
const grid=document.querySelector("#menuGrid");
function render(filter="all"){
 grid.innerHTML=items.filter(x=>filter==="all"||x.cat===filter).map(x=>`
 <article class="menu-card">
   <div><div class="menu-visual">${x.name.toUpperCase()}</div><h3>${x.name}</h3><p>${x.desc}</p></div>
   <div class="price">${x.price}</div>
 </article>`).join("");
}
render();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active"); render(btn.dataset.filter);
}));
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector("#navLinks");
toggle.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="78px";nav.style.left="0";nav.style.right="0";nav.style.padding="22px 6%";nav.style.background="#fbf5ec";nav.style.flexDirection="column"});

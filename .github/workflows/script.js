const items=[
["Chicken Shawarma","savory","A satisfying chicken shawarma wrap.","images/chicken-shawarma.jpg"],
["Loaded Fries","savory","Crispy fries with delicious toppings.","images/loaded-fries.jpg"],
["Small Chops","snacks","Party-ready bites made for sharing.","images/small-chops.jpg"],
["Cakes","sweet","Celebration cakes and sweet creations.","images/cakes.jpg"],
["Pastries","sweet","Fresh baked treats for any occasion.","images/pastries.jpg"],
["Yoghurt & Parfait","sweet","Cool, creamy and refreshing treats.","images/yoghurt-parfait.jpg"]];
const grid=document.querySelector("#menuGrid");
function render(f="all"){grid.innerHTML=items.filter(x=>f==="all"||x[1]===f).map(x=>`<article class="item"><img src="${x[3]}" alt="${x[0]}"><div><h3>${x[0]}</h3><p>${x[2]}</p><div class="price">Ask for price</div></div></article>`).join("")}
render();document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.f)})
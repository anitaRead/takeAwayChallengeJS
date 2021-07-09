const takeaway = new Takeaway();

let firstMenuItem = document.getElementById("first-menu-item");
firstMenuItem.innerHTML= `${takeaway.menu[0][0]} - £${takeaway.menu[0][1]}`;

let secondMenuItem = document.getElementById("second-menu-item");
secondMenuItem.innerHTML= `${takeaway.menu[1][0]} - £${takeaway.menu[1][1]}`;

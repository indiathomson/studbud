
//NAVIGATION
var menuItems = document.querySelectorAll('.nav .sidebar a');
menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        menuItems.forEach(function(item) {
            console.log(item);
          item.classList.remove("active");
        });
        item.classList.add("active");
    })
})
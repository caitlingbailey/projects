const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})

// CSS hide bt default, then toggling class that transforms the sidebar -100%
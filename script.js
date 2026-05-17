// Script.js per Smart Choice Shopify

// Show loading overlay
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1500);
    }
}

// Bootstrap 5 Dropdown Submenu Support
document.addEventListener('DOMContentLoaded', function() {
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    
    dropdownSubmenus.forEach(function(submenu) {
        const toggle = submenu.querySelector('.dropdown-toggle');
        const menu = submenu.querySelector('.dropdown-menu');
        
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function(openMenu) {
                if (openMenu !== menu) {
                    openMenu.classList.remove('show');
                }
            });
            
            menu.classList.toggle('show');
        });
        
        document.addEventListener('click', function(e) {
            if (!submenu.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    });
});

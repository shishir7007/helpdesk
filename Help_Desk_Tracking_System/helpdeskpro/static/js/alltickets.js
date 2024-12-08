  // JavaScript for Dropdown Menu Toggle
  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');
    });
});

// Close dropdown if clicked outside
window.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
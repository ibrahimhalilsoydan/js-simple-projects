const icon = document.getElementById('icon');

// Sayfa yüklendiğinde localStorage'dan tema ve ikon durumunu al
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const savedIcon = localStorage.getItem("icon");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    if (savedIcon) {
        icon.className = savedIcon;
    }
};

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'fa-solid fa-sun fa-2x';
        localStorage.setItem("theme", "dark-theme");
        localStorage.setItem("icon", icon.className);
    } else {
        icon.className = 'fa-solid fa-moon fa-2x';
        localStorage.setItem("theme", "");
        localStorage.setItem("icon", icon.className);
    }
});
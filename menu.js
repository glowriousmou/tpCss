function toggleMenu(element) {
    // const drawerMenu = document.getElementById('drawerMenu');
    const drawerMenu = document.getElementById(element);
    drawerMenu.classList.toggle('open');
}

function loadMenu(path) {
    /* let path = PATH_FROM_HOME
    if (menuItem !== "Accueil") {
        path = PATH_NOT_FROM_HOME
    } */
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path.cssFile;
    document.head.appendChild(link);
    var menuContainer = document.createElement('div');
    var menuContent = `
        <div>
            <nav class="navbar">
                <ul class="menu">
                    <li><a href=${path.homePage}>Accueil</a></li>
                    <li><a href=${path.loginPage}>Tp Login Page</a></li>
                    <li><a href=${path.wordCssPage}>Tp Word to Css </a></li>
                    <li><a href=${path.tpCssPage}>Tp Css</a></li>
                    <li><a href=${path.tpJsPage}>Tp  JS</a></li>
                </ul>
                <div class="hamburger-menu" onclick="toggleMenu('drawerMenu')">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div class="drawer-menu" id="drawerMenu">
                <ul class="drawer-menu-items">
                   <li><a href=${path.homePage}>Accueil</a></li>
                    <li><a href=${path.loginPage}>Tp Login Page</a></li>
                    <li><a href=${path.wordCssPage}>Tp Word to Css </a></li>
                    <li><a href=${path.tpCssPage}>Tp Css</a></li>
                    <li><a href=${path.tpJsPage}>Tp  JS</a></li>
                </ul>
            </div>
        </div>
    `;
    menuContainer.innerHTML = menuContent;
    document.body.insertAdjacentElement('afterbegin', menuContainer);

}
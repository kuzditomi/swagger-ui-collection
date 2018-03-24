const SwaggerUI = require('swagger-ui');

module.exports = {
    build: buildMenu
}

let menuContainer;

function buildMenu(config) {
    menuContainer = document.getElementById('menu');

    for (let menu of config) {
        addMenu(menu);
    }
}

function addMenu(menuConfig) {
    const menu = document.createElement('li'),
        link = document.createElement('span');

    link.innerText = menuConfig.name;
    link.onclick = () => {
        navigationCallback(menuConfig.url);
    };

    menu.appendChild(link);
    menuContainer.appendChild(menu);
}

function navigationCallback(url) {
    SwaggerUI({
        url: url,
        dom_id: '#main',
    });
};
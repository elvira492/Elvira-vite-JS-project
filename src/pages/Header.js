import {getMenu} from '../Router'

export const Header = () => {
    // burger menu
    document.addEventListener('DOMContentLoaded', function () {
        const menuButton = document.getElementById('menu-button');
        const menuList = document.getElementById('menu-list');
            
        menuButton.addEventListener('click', function () {
            if (menuList.style.display === 'block') {
                menuList.style.display = 'none';
            } else {
                menuList.style.display = 'block';
            } 
        });

        menuList.addEventListener('click', function (event) {
            // Verhindere, dass der Klick auf ein Element in der menuList die Menüliste schließt
            event.stopPropagation();
        });
    });



	return /*html*/`
<header>
        <video autoplay loop muted id="video">
                <source src="https://innovasleeptech.com/wp-content/uploads/2023/01/video-bg.mp4" >
        </video>
        
    <section id="header-responsive2">

        <section id="header-responsive">
            <div id ="logo">
                <div id=logo1><img src="./img/android-icon-192x192.png" alt="logo"></div> 
                <h3>Innovative Sleep Technologies®</h3>
            </div>

            <button id="menu-button">
                <div class="line1"></div>
                <div class="line2"></div>
            </button>

        
            
         </section> 
        ${getMenu()} <!-- menu,menu-list -->

    </section>
        <section class="hero-text">
            <h2>Revolutionary sleep technology<h2>
            <h2>Superior comfort and support</h2>
        </section>
    
    </header> 
     <div id="icon-arrow"><box-icon name='chevron-down' animation='fade-down' flip='horizontal' ></box-icon></div>
`;


}
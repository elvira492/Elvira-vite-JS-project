import {getMenu} from '../Router'
import {Video} from './Video'

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

    });


	return /*html*/`
<header>
    ${Video()}
    <section id="header-responsive2">

        <section id="header-responsive">
            <div id ="logo">
                <a href="http://localhost:5173/home">   <div id=logo1><img src="./img/android-icon-192x192.png" alt="logo"></div></a>
             
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
`;
}
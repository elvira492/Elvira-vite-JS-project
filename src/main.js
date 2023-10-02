import './style.css'
import {getMenu} from './Router'


document.querySelector('#app').innerHTML = /*html*/ `

<header>
            <video autoplay loop muted id="video">
                    <source src="https://innovasleeptech.com/wp-content/uploads/2023/01/video-bg.mp4" >
            </video>

            <div id ="logo">
                <img src="./img/android-icon-192x192.png" alt="logo">
            </div>

        <div class="menu-container"> <!-- burger -->
            <button id="menu-button">
                <div class="line1"></div>
                <div class="line2"></div>
            </button>
            
        ${getMenu()}
        </div>

        <section class="hero-text">
            <h2>Revolutionary sleep technology<h2>
            <h2>Superior comfort and support</h2>
        </section>
    </header> 

    <footer>
        <p>&copy; 2023 InnovaSleepTech</p>
    </footer>
`
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
// ->
import './style.css'


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
            
            <ul id="menu-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <section class="hero-text">
            <h2>Revolutionary sleep technology<h2>
            <h2>Superior comfort and support</h2>
        </section>
    </header>
     
    
    <section class="about">
        <h2>Über Uns</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies tortor, non egestas ante. Sed varius ante eu ultrices.</p>
    </section>
    
    <section class="products">
        <h2>Unsere Produkte</h2>
        <div class="product">
            <img src="product1.jpg" alt="Produkt 1">
            <h3>Produkt 1</h3>
            <p>Beschreibung des Produkts 1.</p>
        </div>
        <div class="product">
            <img src="product2.jpg" alt="Produkt 2">
            <h3>Produkt 2</h3>
            <p>Beschreibung des Produkts 2.</p>
        </div>
    </section>
    
    <section class="contact">
        <h2>Kontakt</h2>
        <p>Kontaktinformationen und ein Kontaktformular können hier eingefügt werden.</p>
    </section>
    
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
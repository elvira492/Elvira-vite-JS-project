export const PageMission = () => {
	return /*html*/`
<div class="page pageMission">
	<div class="text">

	<h3>Mission</h3>
	<p>Our mission is to provide the highest quality sleep solutions, through innovative design and the use of advanced materials.</p>

	<aside>
		<ul>
		<li id="factories-counter">2</li>
        <li>Factories</li>
        <li id="patents-counter">18</li>
        <li>Patents</li>
        <li id="partners-counter">93</li>
        <li>Partners</li>
		</ul>
	</aside>

	<script>
        // Funktion zur Animation der Zahlen
        function animateNumbers(target, endValue, duration) {
            const startValue = parseInt(target.textContent);
            const interval = 100;
            const steps = Math.ceil(duration / interval);
            const increment = (endValue - startValue) / steps;
            let currentValue = startValue;
            let currentStep = 0;

            const timer = setInterval(() => {
                if (currentStep < steps) {
                    currentValue += increment;
                    target.textContent = Math.round(currentValue);
                    currentStep++;
                } else {
                    target.textContent = endValue;
                    clearInterval(timer);
                }
            }, interval);
        }
        // Starten Sie die Animation, wenn das Dokument geladen ist
        document.addEventListener("DOMContentLoaded", () => {
            const factoriesCounter = document.getElementById("factories-counter");
            const patentsCounter = document.getElementById("patents-counter");
            const partnersCounter = document.getElementById("partners-counter");

            animateNumbers(factoriesCounter, 2, 2000); // 2 Sekunden Animation für Factories
            animateNumbers(patentsCounter, 18, 2000); // 2 Sekunden Animation für Patents
            animateNumbers(partnersCounter, 93, 2000); // 2 Sekunden Animation für Partners
        });
    </script>

	<p>We strive to exceed customer expectations and improve their overall well-being through better sleep. At Innovative Sleep Technologies, we are dedicated to revolutionizing the way the world sleeps, one bed at a time.</p>

	</div>
	
	<div class="hero-mission">
		<img src="/img/production.jpg" alt="Factory">
	</div>

</div>
`;
}
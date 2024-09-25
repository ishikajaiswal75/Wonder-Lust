function footer() {
    return `
    <footer class="footer">
        <div class="footer-container">
            <!-- Company Description Section -->
            <div class="footer-section company-info">
                <h3 class="foot-head"><i class="fa-duotone fa-solid fa-plane-departure"></i>&nbsp; Wander Lust</h3>
                <p class="foot-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.
                </p>
            </div>

            <!-- Top Destinations Section -->
            <div class="footer-section top-destinations">
                <h3 class="foot-head">Top Destinations</h3>
                <ul>
                    <li><a href="#">Africa</a></li>
                    <li><a href="#">America</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Eastern Europe</a></li>
                    <li><a href="#">Europe</a></li>
                    <li><a href="#">South America</a></li>
                </ul>
            </div>

            <!-- Contact Info Section -->
            <div class="footer-section contact-info">
                <h3 class="foot-head">Contact Info</h3>
                <p>Address: 12 Main Street Pt. London</p>
                <p>Phone: +44 3656 4567</p>
                <p>Email: contact@traveltourtheme.com</p>
                <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="footer2">
            <p class="foot2"><i class="fa-regular fa-copyright"></i> &nbsp;&nbsp;Copyright 2024 GoodLayers, All Right Reserved</p>
        </div>
    </footer>
    `;
}

const foot = document.createElement('div');
foot.innerHTML = footer();
document.body.appendChild(foot);
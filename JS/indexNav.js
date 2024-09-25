function nav() {
	return `
		<nav class="nav">
	        <header>
            <!-- Logo and Website Name -->
            <div class="logo">
                <a href="index.html">
                    <span class="logo-icon">
                        <i class="fa-duotone fa-solid fa-plane-departure"></i>
                    </span>
                    Wander Lust
                </a>
            </div>

            <div class="ham">
                <button id="Button"><i class="fa-solid fa-bars"></i></button>
            </div>
            <div class="nav-bar">
                <ul>
                    <li><a href="index.html" style="--i:1;">Home</a></li>
                    <li><a href="Files/About.html" style="--i:2;">About</a></li>
                    <li><a href="Files/Blog.html" style="--i:3;">Blog</a></li>
                    <li><a href="Files/Explore.html" style="--i:4;">Destination</a></li>
                    <li><a href="Files/Contact.html" style="--i:5;">Contact</a></li>
                    <li><a href="Files/Login.html" style="--i:6;">Login</a></li>
                    <li><a href="Files/Booking.html" style="--i:7;">Booking</a></li>
                </ul>
            </div>
        	</header>
		</nav>`;
}

const navHolder = document.createElement("div");
navHolder.innerHTML = nav();

document.body.appendChild(navHolder);
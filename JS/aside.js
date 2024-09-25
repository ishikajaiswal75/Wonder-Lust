function aside() {
    return `
    <aside id="side">
        <div class="side-nav">
            <ul class="side-ul">
                <li class="side-item"><a href="../index.html" style="--i:1;">Home</a></li>
                <li class="side-item"><a href="../Files/About.html" style="--i:2;">About</a></li>
                <li class="side-item"><a href="../Files/Blog.html" style="--i:3;">Blog</a></li>
                <li class="side-item"><a href="../Files/Destination.html" style="--i:4;">Destination</a></li>
                <li class="side-item"><a href="../Files/Contact.html" style="--i:5;">Contact</a></li>
                <li class="side-item"><a href="../Files/Login.html" style="--i:6;">Login</a></li>
                <li class="side-item"><a href="../Files/Booking.html" style="--i:7;">Booking</a></li>
            </ul>
        </div>
    </aside>
    `;
}

const side = document.createElement('div');
side.innerHTML = aside();
document.body.appendChild(side);
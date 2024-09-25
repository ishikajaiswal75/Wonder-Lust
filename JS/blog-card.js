function card(c) {
    return `
        <section class="blog-section">
            <div class="blog-section-container">
                    <img src="${c.imgUrl}" alt="">
                    <p class="date">June 6, 2016</p>
                    <h2>${c.heading}</h2>
                    <p class="description">
                        A wonderful serenity has taken possession of my entire soul, like these
                        sweet mornings of spring which I enjoy with my whole...
                    </p>
                    <a href="${c.pageUrl}" class="read-more">Read More</a>
                </div>
            </div>
        </section>   
    `;
}

const cards = [
    {
        id: "0",
        imgUrl: "../Img/ar6.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "1",
        imgUrl: "../Img/s7.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "2",
        imgUrl: "../Img/s3.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "3",
        imgUrl: "../Img/s5.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "4",
        imgUrl: "../Img/s6.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "5",
        imgUrl: "../Img/s4.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "6",
        imgUrl: "../Img/s2.jpeg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    },

    {
        id: "8",
        imgUrl: "../Img/s1.jpg",
        heading: "How to travel with paper map",
        pageUrl: "#"
    }

];

const cardContainer = document.createElement('div');
cardContainer.className = "blog-section";
document.body.appendChild(cardContainer);

for (i = 0; i < cards.length; i++) {
    const cardHolder = document.createElement('div');
    cardHolder.innerHTML = card(cards[i]);
    cardContainer.appendChild(cardHolder);
}
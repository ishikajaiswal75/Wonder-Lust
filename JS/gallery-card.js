function card(c) {
    return `<a href="${c.url}">
                <div class="gallery">
                    <div class="image ${c.place}">
                        <img src="${c.imgUrl}" alt="${c.imgName}">
                        <p class="name">${c.name}</p>
                    </div>
                </div>
            </a>`;
}

const cards = [
    {
        place: "Asia",
        name: "Hawa Mahal, India",
        imgName: "Hawa Mahal, India",
        imgUrl: "../Img/Explore/Asia/India/Hawa Mahal.jpg",
        url: "#"
    },
    {
        place: "Europe",
        name: "Russia",
        imgName: "Russia",
        imgUrl: "../Img/Explore/Europe/russia.jpg",
        url: "#"
    },
    {
        place: "Asia",
        name: "Agra, India",
        imgName: "arga",
        imgUrl: "../Img/Explore/Asia/India/agra.jpg",
        url: "#"
    },
    {
        place: "Asia",
        name: "India Gate, India",
        imgName: "India Gate, India",
        imgUrl: "../Img/Explore/Asia/India/India Gate.jpg",
        url: "#"
    },
    {
        place: "Europe",
        name: "Germany",
        imgName: "Germany",
        imgUrl: "../Img/Explore/Europe/germany.jpg",
        url: "#"
    },
    {
        place: "South America",
        name: "Rio De Janeiro",
        imgName: "Rio De Janeiro",
        imgUrl: "../Img/Explore/South America/rio de janeiro.jpg",
        url: "../Files/Destination2.html"
    },
    {
        place: "Asia",
        name: "Jagannath Temple, India",
        imgName: "Jagannath Temple, India",
        imgUrl: "../Img/Explore/Asia/India/jagannath temple.jpg",
        url: "#"
    },
    {
        place: "Europe",
        name: "Kremlin Russia",
        imgName: "Kremlin Russia",
        imgUrl: "../Img/Explore/Europe/kremlin.jpg",
        url: "#"
    },
    {
        place: "Asia",
        name: "Beijing",
        imgName: "Beijing",
        imgUrl: "../Img/Explore/Asia/China/Beijing.jpg",
        url: "#"
    },
    {
        place: "Asia",
        name: "Nanjing, China",
        imgName: "Nanjing, China",
        imgUrl: "../Img/Explore/Asia/China/Nanjing.jpg",
        url: "#"
    },
    {
        place: "Europe",
        name: "Italy",
        imgName: "Italy",
        imgUrl: "../Img/Explore/Europe/italy.jpg",
        url: "#"
    },
    {
        place: "South America",
        name: "Argentina",
        imgName: "Argentina",
        imgUrl: "../Img/Explore/South America/argentina.jpg",
        url: "../Files/Destination2.html"
    },
    {
        place: "South America",
        name: "San Pedro De Atacama",
        imgName: "San Pedro De Atacama",
        imgUrl: "../Img/Explore/South America/san pedro de atacama.jpg",
        url: "../Files/Destination2.html"
    },
    {
        place: "Europe",
        name: "Belgium",
        imgName: "Belgium",
        imgUrl: "../Img/Explore/Europe/Belgium.jpg",
        url: "#"
    },
    {
        place: "Asia",
        name: "Nhumjung, Nepal",
        imgName: "Nhumjung, Nepal",
        imgUrl: "../Img/Explore/Asia/Nepal/khumjung, nepal.jpg",
        url: "#"
    },{
        place: "Asia",
        name: "Lumbini, Nepal",
        imgName: "Lumbini, Nepal",
        imgUrl: "../Img/Explore/Asia/Nepal/lumbini, nepal.jpg",
        url: "#"
    },
    {
        place: "Europe",
        name: "Paris, France",
        imgName: "Paris, France",
        imgUrl: "../Img/Explore/Europe/paris.jpg",
        url: "#"
    },

];

const cardContainer = document.createElement('div');
cardContainer.className = "gallery";
document.body.appendChild(cardContainer);

for (i = 0; i < cards.length; i++) {
    const cardHolder = document.createElement('div');
    cardHolder.innerHTML = card(cards[i]);
    cardContainer.appendChild(cardHolder);
}
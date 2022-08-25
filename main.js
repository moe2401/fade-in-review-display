const reviewContainer = document.getElementById("review-container")

//keep the image landscape(横) images
const reviews = [
    {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learned a lot!",
        name: "Indyah Almay"
    },
    {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learned a lot!",
        name: "Indyah Almay"
    },
    {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learned a lot!",
        name: "Indyah Almay"
    },
    {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learned a lot!",
        name: "Indyah Almay"
    },
    {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learned a lot!",
        name: "Indyah Almay"
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")

        cardElement.addEventListener("mouseover", showCard)
        cardElement.addEventListener("mouseleave", blurCard)


        const imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container")
        const imageElement = document.createElement("img")
        imageElement.setAttribute("src", review.img)
        imageElement.setAttribute("alt", review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement("p")
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement("div")
        nameContainer.classList.add("name-container")
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}
populateDisplay()

function showCard() {
    this.classList.add("active")
}

function blurCard() {
    this.classList.remove("active")
}

// Developer by Cross-Dev  23/07/22
const nextBtn = document.querySelector('.btn');
const imagen = document.querySelector('.dogs')

const API_URL = "https://api.thedogapi.com/v1/images/search";

document.addEventListener('DOMContentLoaded', () => {
    fetchdogs();
})

const fetchdogs = async () => {
    setHeader = {
        headers: {
            ['x-api-key']: "API_KEY"
        }
    };
    try {
        const response = await fetch(`${API_URL}`, setHeader)
        const dog = await response.json()
        console.log(dog)
        imagen.setAttribute('src', dog[0].url)
    } catch (error) {
        console.log(error);
    }
}

nextBtn.addEventListener('click', fetchdogs);

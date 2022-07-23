
const nextBtn = document.querySelector('.btn');
const imagen = document.querySelector('.dogs')

// const Dogs = () => {
//     setHeader = {
//         headers: {
//             ['x-api-key']: "94bb2dad-28c8-4231-8a25-da93580a3eb8"
//         }
//     };

//     fetch('https://api.thedogapi.com/v1/images/search', setHeader)
//         .then((res) => res.json().then(data => {
//             const imagen = document.querySelector('.dogs').setAttribute('src', data.url)
//             fragment.appendChild(imagen)
//             app.appendChild(fragment)
//             console.log(data)
//         }))
//         .catch((error) => console.log(error));
// };

const API_URL = "https://api.thedogapi.com/v1/images/search";

document.addEventListener('DOMContentLoaded', () => {
    fetchdogs();
})

const fetchdogs = async () => {
    setHeader = {
        headers: {
            ['x-api-key']: "94bb2dad-28c8-4231-8a25-da93580a3eb8"
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

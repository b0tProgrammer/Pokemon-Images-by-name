document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        const pName = document.getElementById("pokeName");
        if(pName.value === "") {
            alert("Please enter a Pokémon name");
        } else {
            fetchData(pName.value);
        }
    }
});

async function fetchData(pokeName) {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
        const response = await fetch(url);
        if(!response.ok) {
            alert("Pokémon not found");
        } else {
            const data = await response.json();
            const imgSrc = data.sprites.front_default;
            const pokImg = document.getElementById("pImg");
            pokImg.src = imgSrc;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data");
    }
}

let ratingValue = 0;

function changeStars(amount) {
    ratingValue = amount;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById("star" + i);
        star.style.color = (i <= amount) ? "#f5c518" : "#b0b0b0";
    }
}

function submitMovie() {
    const titleInput = document.getElementById("mTitle").value.trim();
    const yearInput = document.getElementById("mYear").value.trim();
    const genreInput = document.getElementById("mGenre").value;

    if (titleInput === "" || yearInput === "" || ratingValue === 0) {
        alert("Please fill in everything and select a rating.");
        return;
    }

    let listArr = JSON.parse(localStorage.getItem("movies")) || [];
    const existingIndex = listArr.findIndex(m => m.title.toLowerCase() === titleInput.toLowerCase());

    if (existingIndex !== -1) {
        const oldRating = parseFloat(listArr[existingIndex].rating);
        const newAverage = (oldRating + ratingValue) / 2;
        
        listArr[existingIndex].year = yearInput;
        listArr[existingIndex].genre = genreInput;
        listArr[existingIndex].rating = newAverage.toFixed(1);
    } else {
        const newObj = {
            title: titleInput,
            year: yearInput,
            genre: genreInput,
            rating: ratingValue.toString()
        };
        listArr.push(newObj);
    }

    localStorage.setItem("movies", JSON.stringify(listArr));
    clearForm();
    renderList();
}

function clearForm() {
    document.getElementById("mTitle").value = "";
    document.getElementById("mYear").value = "";
    document.getElementById("mGenre").value = "Action";
    changeStars(0);
}

function deleteMovie(index) {
    const confirmDelete = confirm("Are you sure you want to delete this movie?");
    if (confirmDelete) {
        let listArr = JSON.parse(localStorage.getItem("movies")) || [];
        listArr.splice(index, 1);
        localStorage.setItem("movies", JSON.stringify(listArr));
        renderList();
    }
}

function renderList() {
    const displayDiv = document.getElementById("movieDisplayArea");
    displayDiv.innerHTML = "";

    const listArr = JSON.parse(localStorage.getItem("movies")) || [];

    listArr.forEach((movie, index) => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "movie-box";

        let starDisplay = "";
        const rValue = Math.round(parseFloat(movie.rating));
        for (let j = 1; j <= 5; j++) {
            const color = (j <= rValue) ? "#f5c518" : "#b0b0b0";
            starDisplay += `<span style='color: ${color}; font-size: 15px;'>&#9733;</span>`;
        }

        itemContainer.innerHTML = `
            <span>${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${starDisplay}</span>
            <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
        `;
        
        displayDiv.appendChild(itemContainer);
    });
}

window.onload = renderList;

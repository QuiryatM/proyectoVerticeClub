export function cardWithImage(image, name, description, item) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="${image}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${item}</li>
            </ul>
        </div>
    `;
}
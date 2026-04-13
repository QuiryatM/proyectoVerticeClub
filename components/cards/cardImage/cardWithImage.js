export function cardWithImage(image, name, description, item, size = "md") {
    const sizes = {
        xs: "12rem",
        sm: "18rem",
        md: "26rem",
        lg: "36rem",
        xl: "48rem",
        xxl: "60rem",
    };
    return `
        <div class="card" style="width: ${sizes[size] || sizes.md};">
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
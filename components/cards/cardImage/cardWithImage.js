export function cardOnly(title, description) {
    return `
        <div class="card-custom">
            <div class="card-label">${description}</div>
            <div class="card-name">${title}</div>
        </div>
    `;
}
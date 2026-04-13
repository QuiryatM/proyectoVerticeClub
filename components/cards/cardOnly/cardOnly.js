export function cardOnly(title, description) {
  return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
    `;
}

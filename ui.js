export const spinner = () => {
    const html =
        `<div class="d-flex justify-content-center">
    <div class="spinner-border text -info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
  return html;
}
export const creaCard = (personaje) => {
    const card = document.createElement('div');
    card.style = 'float: left;';
    const html = `
    <div class="card m-2" style="width: 18rem; ">
        <img loading="lazy" src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">${personaje.status}</p>
        <button 
        class="btn btn-primary btn-block" 
        data-id="${personaje.id}"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal">Ver más</button>
        </div>

    
    </div>`;
    card.innerHTML = html;
    return card;
}

export 
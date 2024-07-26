const formCategoria = document.getElementById('form-categoria');
const tbodyCategorias = document.getElementById('tbody-categorias');
const categorias = [];

formCategoria.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomeCategoria = document.getElementById('nome-categoria').value;
    const categoria = {
        id: categorias.length + 1,
        nome: nomeCategoria
    };
    categorias.push(categoria);
    adicionarCategoriaTabela(categoria);
    formCategoria.reset();
});

function adicionarCategoriaTabela(categoria) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${categoria.id}</td>
        <td>${categoria.nome}</td>
        <td>
            <button class="btn-editar">Editar</button>
            <button class="btn-excluir">Excluir</button>
        </td>
    `;
    tbodyCategorias.appendChild(tr);
}
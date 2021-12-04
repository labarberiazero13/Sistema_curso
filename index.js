console.log("** Cursos Academy **");

let cursos = [{
    id: 1,
    titulo: 'Bora codar',
    descricao: 'Esse curso é para quem quer iniciar na carreira DEV',
    professor: 'Bob Dev',
    listaAulas: []
}, {
    id: 2,
    titulo: 'Codar é meu mundo',
    descricao: 'Esse curso é para quem já manja um pouco, e quer se aprofundar',
    professor: 'Joe Hacker',
    listaAulas: []
}];

function listarCursos(){

    let htmlCursos = "";

    for (let index = 0; index < cursos.length; index++) {
        
        htmlCursos += `
            <article class="card">
                <h2>${cursos[index].titulo}</h2>
                <p>${cursos[index].descricao}</p>
                <p>Professor: ${cursos[index].professor}</p>
                <small>ID do curso: ${cursos[index].id}</small>
            </article>        
        `;
        
    }

    let painelCursos = document.querySelector('.painel-cursos');

    painelCursos.innerHTML = htmlCursos;

}

function adicionarAula(idCurso, linkAula) {

    let indexCurso = null;
    for (let i = 0; i < cursos.length; i++) {
        if(cursos[i].id == idCurso){
            indexCurso = i;
        }
    }

    if (indexCurso!= null) {
    cursos[indexCurso].listaAulas.push(linkAula);
    console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`)

    } else {
        console.log('Curso não encontrado.')
    }
}

let btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.onclick = function (evento) {

    evento.preventDefault();

    let titulo_input = document.querySelector('#titulo');
    let descricao_input = document.querySelector('#descricao');
    let professor_input = document.querySelector('#professor');


    let novoCurso = {
        id: cursos.length + 1,
        titulo: titulo_input.value,
        descricao: descricao_input.value,
        professor: professor_input.value,
        listaAulas: []
    };

    cursos.push(novoCurso);

    listarCursos();
}

listarCursos();
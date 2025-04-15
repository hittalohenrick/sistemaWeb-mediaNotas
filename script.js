function alunoFunction () {
    const nomeAluno = document.getElementById("inputNome").value;
    const n1 = document.getElementById("inputN1").valueAsNumber;
    const n2 = document.getElementById("inputN2").valueAsNumber;
  
    const media = (n1 + n2) / 2;
    const mediaString = media.toString();
  
    let status;
    if (media >= 7) {
      status = "Aprovado";
    } else if (media >= 5) {
      status = "Recuperação";
    } else {
      status = "Reprovado";
    }
  
    document.getElementById("divNotaAlunoPessoal").innerText = 
      `${status}, sua nota é: ${mediaString}`;
  
    const aluno = {
      nome: nomeAluno,
      n1: n1,
      n2: n2,
      media: media,
      status: status
    };
  
    const listaAlunos = JSON.parse(localStorage.getItem("alunos")) || [];
  
    listaAlunos.push(aluno);
  
    localStorage.setItem("alunos", JSON.stringify(listaAlunos));
  
    mostrarAlunos();
  }
  
  function mostrarAlunos() {
    const listaAlunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const divGeral = document.querySelector(".divNotaAlunosGeral");
  
    divGeral.innerHTML = "";
  
    listaAlunos.forEach(aluno => {
      const alunoDiv = document.createElement("p");
      alunoDiv.textContent = `${aluno.nome} - ${aluno.status} - Média: ${aluno.media}`;
      divGeral.appendChild(alunoDiv);
    });
  }
  
  document.addEventListener("DOMContentLoaded", mostrarAlunos);
  
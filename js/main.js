String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};

function mascaraMoeda(campo,evento){
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  var resultado  = "";
  var mascara = "##.###.###,##".reverse();
  for (var x=0, y=0; x<mascara.length && y<valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}




let sForm = document.getElementById('sForm')
let sValor = document.getElementById('sPrecoH')
let sHora = document.getElementById('sHora')
let sDias = document.getElementById('sDias')
let sDuracao = document.getElementById('sDuracao')

let infProjeto = document.getElementById('informacoesProjeto')

let erro = document.getElementById('boxErro')
sForm.addEventListener('submit', (f) => {
	if (sValor.value === '' || sHora.value === '' || sDias.value === '' || sDuracao.value === '') {
		erro.classList.add('boxActive')

		setTimeout(() => {
			erro.classList.remove('boxActive')
		}, 9000)
		f.preventDefault()
	}else{

		let valor = sValor.value;
		let hora = sHora.value;
		let dias = sDias.value;
		let duracao = sDuracao.value;

		let valorFormatado = parseInt(valor)
		let horaFormatada = parseInt(hora)
		let diasFormatado = parseInt(dias)
		let duracaoFormatada = parseInt(duracao)


		let somaDuracao = duracaoFormatada * horaFormatada;
		let somaValor = somaDuracao * valorFormatado;
		// let somaValor =   valorFormatado * horaFormatada;
		// let somaDias = somaValor * diasFormatado;
		// console.log(somaValor)
		
		let vDia = valorFormatado * horaFormatada;

		let cHoraria = document.getElementById('cargaHoraria');
		let valorDProjeto = document.getElementById('valorDiaProjeto');
		let vtProjeto = document.getElementById('valorTotalProjeto');

		cHoraria.innerHTML = 'Carga horária: ' + somaDuracao + ' Horas.';
		valorDProjeto.innerHTML = 'Valor diario: R$' + vDia + ',00.';
		vtProjeto.innerHTML = 'Valor total: R$' + somaValor + ',00.';

		infProjeto.style.display = 'flex';
		f.preventDefault()
	}
	f.preventDefault()
})
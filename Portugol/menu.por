programa
{
	
	funcao inicio()
	{
		escreva("1 - Abrir Netflix 2 - Abrir Amazon 3 - Abrir HBO 4 - Sair" + "\n" + "Opção: ")
		inteiro menu = 0 
		leia(menu)
		escolha(menu)
		{
			caso 1:
			escreva ("Netflix")
			pare			
			caso 2:
			escreva ("Amazon")
			pare			
			caso 3:
			escreva ("HBO")
			pare			
			caso 4:
			escreva ("Sair...")
			pare
			caso contrario:
			escreva("opção inválida")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 372; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
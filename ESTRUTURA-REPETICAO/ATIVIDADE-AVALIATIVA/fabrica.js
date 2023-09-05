let id, matricula, sexo, operarios, pecas, i, totalpecas ,media , sal1 , sal2 , sal3, pecasal2, pecasal3

debugger

 operarios =Number(prompt("Informe o número de trabalhadores"))

    for(i=0; i=operarios; i++){

        id = Number(prompt("informe o identificador(rg): "))
        matricula = Number(prompt("informe o número da mátricula: "))
        pecas = Number(prompt("Peças produzidas no mês: "))
        sexo = (prompt("Sexo Feminimo(F) ou Masculino(M): "))
        
        operarios++;
        pecas++;

        pecasal2 = pecas * 0.3
        pecasal3 = pecas * 0.5
        sal1 = 1200
        sal2 = 1200 * pecasal2
        sal3 = 1200 * pecasal3
        totalpecas = pecas
        media = pecas + pecas / 2

        if(pecas <= 20){
            document.write(`Informações do operário de id:${id} Mátricula: ${matricula} <br>Sexo: ${sexo} <br>Classe: 1 <br>Salário: ${sal1}<br>`)
    
        }else if(pecas >= 21 && pecas <= 30){
            document.write(`Informações do operário de id:${id} Mátricula: ${matricula} <br>Sexo: ${sexo} <br>Classe: 2 <br>Salário: ${sal2}<br>`)
    
        }else if(pecas > 30 ){
            document.write(`Informações do operário de id:${id} Mátricula: ${matricula} <br>Sexo: ${sexo} <br>Classe: 3 <br>Salário: ${sal3}<br>`)
        }
    }
    Document.write(`<br><br>Total de peças produzidas esse mês: ${totalpecas} <br>Total de folhas de pagamentp: ${operarios} Media de produção: ${media}`)
        

// eu fiz de acordo com as vozes da minha cabeça
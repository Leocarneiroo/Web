
Projeto de Estágio Frontend React - Relatório de Conclusão
Introdução
Este relatório tem como objetivo apresentar o projeto desenvolvido como parte do estágio Frontend React, atendendo aos requisitos funcionais estabelecidos. O projeto consiste em criar um frontend para exibir uma lista de jogos fornecida por uma API desafiadora. Durante a implementação, foram considerados aspectos como responsividade, tratamento de erros e filtros de busca.

Tecnologias Utilizadas
React
JavaScript
HTML
CSS
Funcionalidades Implementadas

Obtenção da lista de jogos da API:
Foi utilizada a URL base para obter os dados dos jogos.

Loader de carregamento:
Um loader foi implementado para exibir enquanto os dados estão sendo obtidos da API.

Exibição dos jogos em três colunas:
Os jogos foram apresentados em um layout de três colunas para proporcionar uma melhor visualização no computador.

Exibição do título e imagem de cada jogo:
Cada card de jogo exibe o título e a imagem correspondente ao jogo.

Responsividade:
O projeto foi desenvolvido levando em consideração a responsividade, adaptando-se a diferentes tamanhos de tela.

Tratamento de erros da API:
Em caso de retorno dos status codes 500, 502, 503, 504, 507, 508 ou 509, é exibida a mensagem "O servidor falhou em responder. Tente recarregar a página".
Para outros erros não especificados, é apresentada a mensagem "O servidor não conseguiu responder por agora. Tente novamente mais tarde".
Caso a API demore mais de 5 segundos para retornar os dados, é exibida a mensagem "O servidor demorou para responder. Tente novamente mais tarde".

Ocultação do loader ao exibir mensagens ou dados:
Sempre que uma mensagem é exibida ao usuário ou os dados estão disponíveis para apresentação, o loader é ocultado.

Campo de busca por título:
Foi adicionado um campo de busca que permite localizar jogos pelo título/gênero.
O usuário pode selecionar um gênero para filtrar e exibir apenas os jogos desse gênero.

Imagem 1

![Getting Started](./Images/Tela%201.png)

Imagem 2

![Getting Started](./Images/Tela%202.png)


Resultados Obtidos
O projeto de estágio Frontend React foi concluído com sucesso, atendendo a todos os requisitos funcionais estabelecidos. O frontend desenvolvido apresenta uma lista de jogos obtidos por meio da API, exibindo-os em um layout responsivo de três colunas.O projeto também trata os possíveis erros retornados pela API, exibindo mensagens adequadas ao usuário. Além disso, foi implementado um campo de busca por título/gênero.
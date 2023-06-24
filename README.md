# Olá! 👋

Esse projeto foi feito com NextJS 13, Styled Components, React Query e Axios, continue lendo para mais detalhes!

## Como Rodar  

- Adicione um arquivo .env.local no root da aplicação e coloque sua PUBLIC_KEY da Marvel com o nome de NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY.
- Agora é so rodar `yarn` e `yarn dev`

## Estrutura da aplicação  

### api/  

Aqui fica o axios já iniciado com as funções de chamada para a api da marvel, hoje só temos duas funções que é a de listagem baseado em um texto e a do herói com base em seu id

### app/

Pasta base do NextJS 13 com todas as rotas, dentro dele cada pasta será uma rota, então temos `root`, `list` e `hero` com uma rota dinamica que recebe o id do herói.

Aqui a aplicação ganha 3 contextos que vão cuidar das lógicas de negócio que são a de estilos do Styled components, a de cache com React Query e o Context com o dado que o usuário pesquisou para ser utilizado em outra tela.

Utilizei o context para o dado do usuário somente para ficar mais simples de manipular ele e não ter em sua rota a pesquisa que o usuário deseja fazer, assim caso ele não tenha nada eu só redireciono de volta para a primeira tela.

### components/

Aqui seria uma pasta mais geral, mas por não ter muitas utilizações eu preferi trazer somente o componente Header para ficar mais simples de manipular ele com os estilos do Styled Components por que o arquivo `layout` acaba sendo um server component.

### context/

Como comentado antes, aqui deixei a lógica para manter o dado pesquisado pelo usuário vivo durante a aplicação.

### hooks/

Aqui ficam todos os hooks que podem ser usados de maneira geral, nesse momento ele contém somente o hook de `sessionStorage` para que o dado de pesquisa continue vivo mesmo com o recarregar da página.

### lib/

Configurações mais gerais de cada um dos serviços que o app usa, como a api que ja recebe o base url da api da marvel junto com a public key, o queryClient que cria o contexto e repassa para o projeto e o registry do styled components para que ele consiga trazer o conteúdo dos estilos, mesmo que de maneira não tão otimizada, para o lado do server também.

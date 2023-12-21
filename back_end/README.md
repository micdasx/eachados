# eachados

## Como contribuir e boas práticas do ciclo Devops

Dado o número de colaboradores que temos no nosso repositório, devemos ter um padrão de branches, pull requests e merges para mantermos uma organização mínima.
A recomendação é utilizarmos o padrão de feature-branches. Em síntese, isso significa que:
1. **TODA** alteração a ser feita deve ser feita em uma branch separada da última versão da branch `main`, seguindo este padrão:
  - Se você está implementando uma nova funcionalidade, nomeie a branch dessa forma: `feature/descricao-da-funcionalidade-separada-por-hifen`
  - Se você está implementando alguma correção, refatoração ou otimização de código: `fix/descricao-da-correcao-separada-por-hifen`
  
2. É interessante, do ponto de vista de code-review, você lançar uma [Issue](https://github.com/eachados/eachados/issues) no repositório descrevendo a funcionalidade/correção que você pretende implementar, para posteriormente, quando for aberta uma PR para a sua branch, você também linká-la a Issue cadastrada previamente. Esse link deve ser feito no título do commit de merge, ele deve **necessariamente** mencionar a issue através do seu número. Por exemplo, se ao cadastrar uma nova Issue, ela tem o número 10, na hora que você for mergear a PR que resolve aquela issue, na mensagem do commit deve ter o trecho "closes #10", ou "resolve #10", ou qualquer outra variação. Veja [aqui](https://github.com/eachados/eachados/pull/1) um exemplo.

3. Preferencialmente, ao abrir uma PR, avise no grupo do trabalho e peça para que alguém a revise. Após o merge e a confiramação do Github, é importante você deletar aquela feature branch, que não será mais utilizada.

4. Sempre que julgar necessário, adicione sessões de documentação técnica ou de negócios a Wiki do repositório (pode ser no Notion).

5. É interessante adicionar um membro da equipe como pré-approver do disparo da pipeline de CD do repositório, isto é, é interessante ter alguém que controle quando uma nova release para Prod deve ser feita.

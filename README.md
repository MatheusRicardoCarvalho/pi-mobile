# Projeto Integrador

Este é um projeto desenvolvido utilizando React Native e Expo, com o objetivo de criar uma aplicação móvel que permite a conexão e interação entre os usuários, **`esta implementação tem como objetivo demonstrar as funcionalidades do APP, em futuras atualizações buscaremos melhorar o design`**. Abaixo estão as informações sobre as tecnologias utilizadas, a arquitetura do projeto e instruções para rodar o projeto localmente.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis utilizando JavaScript e React.
- **Expo**: Conjunto de ferramentas e serviços para desenvolvimento de aplicativos React Native.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Context API**: API de Contexto do React, utilizada para gerenciar o estado global da aplicação de forma mais fácil e escalável.
- **React Navigation**: Biblioteca para navegação em aplicativos React Native.
- **React Native Paper**: Biblioteca de componentes que implementa as diretrizes do Material Design.
- **Styled Components**: Biblioteca para estilização de componentes utilizando CSS-in-JS.
- **Expo Vector Icons**: Biblioteca de ícones vetoriais para uso em aplicativos React Native.

## Funcionalidades
- **Autenticação de usuários**: O app permite que os usuários façam login e cadastro, garantindo a segurança e a autenticidade das informações.
- **Perfil de usuário com edição**: Os usuários podem visualizar e editar seu perfil, incluindo informações como nome, email e senha.
- **Busca e Filtros avançados para busca de usuários**: A aplicação inclui uma funcionalidade de filtragem avançada, permitindo que os usuários busquem e filtrem outros usuários com base em critérios como gênero, idade, nome de usuário, Tags entre outros.
- **Sistema de tags para categorizar usuários**: Os usuários podem adicionar e remover tags, que são utilizadas para categorizar e filtrar os usuários.
- **Sistema de likes entre usuários**: Os usuários podem curtir outros usuários, permitindo que sejam feitos matchs entre eles.
- **Matchs entre usuários**: Os usuários podem ver os matchs que tiveram com outros usuários.


## Demonstração

Segue um vídeo demonstrando todas as funcionalidades: https://drive.google.com/file/d/1dpjFGERIUB_F8NuzXfKjjldb1mDGw-YV/view?usp=sharing

## Arquitetura do Projeto

A arquitetura do projeto é baseada em componentes, onde cada parte da interface é dividida em componentes reutilizáveis. A estrutura de pastas é organizada da seguinte forma:

- `src/`: Contém todo o código-fonte da aplicação.
  - `components/`: Componentes reutilizáveis.
  - `context/`: Contextos para gerenciamento de estado global.
  - `routes/`: Configuração das rotas da aplicação.
  - `screens/`: Telas da aplicação.
  - `services/`: Serviços para comunicação com APIs.
  - `styleds/`: Estilos globais e temas.

## Rodando o Projeto Localmente

Observe que algumas funcionalidades podem não estar funcionando no SDK do expo mais recente, para evitar conflitos, execute o projeto na branch `sdk-49` em quanto não corrigimos os problemas de compatibilidade. Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/MatheusRicardoCarvalho/pi-mobile.git
   cd pi-mobile
   ```

2. **Instale as dependências**:
   É necessário utilizar a opção `--legacy-peer-deps` para evitar conflitos de dependências.
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Endpoint do Backend**:
   Altere o baseURL no arquivo `src/services/api.ts` para corresponder ao endereço em que você está executando o backend

5. **Execute o aplicativo no emulador ou dispositivo**:
   Para Android:
   ```bash
   npm run android
   ```

   Para iOS:
   ```bash
   npm run ios
   ```

Certifique-se de ter o ambiente de desenvolvimento configurado corretamente para Android ou iOS, conforme necessário.
O backend pode ser encontrado em: https://github.com/MatheusRicardoCarvalho/projeto-integrador.git

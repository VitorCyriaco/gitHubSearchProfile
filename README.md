# 🔍 GitHub Profile Finder

Uma aplicação React simples onde o usuário pode pesquisar o nome de um perfil do GitHub e visualizar suas informações públicas.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- API pública do GitHub

## 📦 Instalação

1. Clone o repositório:
```bash
  git clone https://github.com/VitorCyriaco/gitHubSearchProfile.git
```
2. Acesse o diretório do projeto:
```bash
  cd gitHubSearchProfile
```

3. Instale as dependências:
```bash
   npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
   npm run dev
```

💡 Como Usar
Digite o nome de usuário do GitHub no campo de pesquisa.

Clique em "Buscar".

O perfil será exibido com informações como avatar, bio, número de repositórios, seguidores e link para o GitHub.

📷 Exemplo de Uso
```bash
   Pesquisar: VitorCyriaco
  Resultado:

  Avatar
  Nome
  Bio
```

📁 Estrutura de Pastas
```bash
  src/
  ├── assets/
  │     └── img/
  ├── components/
  │   ├── background/
  │   │   └── background.tsx
  │   └── gitPerfil/
  │       ├── notFound/
  │       │   └── index.tsx
  │       └── index.tsx
  ├── pages/
  │   └── index.tsx
  ├── services/
  │   └── fetchProfile.ts
  ├── types/
  │   └── profiles.d.ts
  ├── index.css
  ├── main.tsx
  └── vite-env.d.ts
```

🧩 Funcionalidades Futuras
```bash
Histórico de buscas recentes;
Exibição de repositórios públicos.
```

🤝 Contribuindo
```bash
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
```

Feito com 💙 por Vitor Cyriaco!

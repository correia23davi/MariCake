# MariCake — Landing Page

Landing page da **MariCake**, uma confeitaria de bolos caseiros nascida de uma memória de infância na cozinha da vó Marilucia. O site conta a história da marca e apresenta oito sabores de bolo em cards interativos.

> *Mais que um bolo, um pedaço de boa lembrança.*

## Funcionalidades

- **Hero** com chamada principal e imagem em destaque, que some suavemente ao rolar a página
- **Nossa história** com o texto de origem da marca e citação lateral
- **Nossos bolos**: 8 sabores em cards que viram ao passar o mouse (desktop) ou ao tocar (mobile)
- **Menu responsivo** com versão hambúrguer para telas pequenas
- **Acessibilidade**: navegação por teclado, `aria-label`, foco visível e respeito a `prefers-reduced-motion`
- **Fallback de imagem**: se uma foto falhar, aparece uma ilustração de bolo no lugar

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Fontes do Google Fonts: DM Sans, DM Serif Display e Allura

## Como rodar

**Pré-requisito:** [Node.js](https://nodejs.org/) 22 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173`.

## Responsividade

O layout se adapta a três breakpoints:

| Breakpoint | Largura   | Mudanças principais                                   |
| ---------- | --------- | ----------------------------------------------------- |
| `sm`       | ≥ 640 px  | Grade de bolos passa para 2 colunas                   |
| `md`       | ≥ 800 px  | Menu completo no topo e hero em duas colunas          |
| `lg`       | ≥ 1024 px | Grade de bolos com 4 colunas e título maior no hero   |

O breakpoint `md` foi personalizado para 50rem em `src/index.css`.

## Imagens

A logo e a foto do hero ficam em `public/images/`. As fotos dos demais sabores vêm do [Unsplash](https://unsplash.com/) por link externo. Para usar fotos próprias, coloque os arquivos em `public/images/` e atualize o campo `image` de cada item da lista `cakes` em `src/App.tsx`.

## CI/CD e deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`) e publica na **Vercel**:

1. **CI**: a cada push ou pull request para a `main`, o workflow instala as dependências (`npm ci`), verifica os tipos (`npm run typecheck`) e gera o build.
2. **Deploy**: só roda se o CI passar e apenas em push na `main`. Publica a nova versão em produção na Vercel.

O deploy automático nativo da Vercel fica desligado em `vercel.json` (`git.deploymentEnabled: false`), para que nada seja publicado sem passar pelo CI.

### Configuração (uma vez)

1. Crie o projeto na Vercel (**Add New → Project**, importando este repositório) ou rode `npx vercel link` na pasta do projeto.
2. Crie um token em [vercel.com/account/tokens](https://vercel.com/account/tokens).
3. Pegue o `orgId` e o `projectId` no arquivo `.vercel/project.json` (gerado pelo `vercel link`) ou em **Project Settings → General** na Vercel.
4. No GitHub, em **Settings → Secrets and variables → Actions → New repository secret**, crie:

| Secret              | Valor                   |
| ------------------- | ----------------------- |
| `VERCEL_TOKEN`      | Token criado no passo 2 |
| `VERCEL_ORG_ID`     | `orgId`                 |
| `VERCEL_PROJECT_ID` | `projectId`             |
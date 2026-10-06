# Mapa de imagens do portfólio

Este arquivo registra a associação correta entre projetos e imagens para evitar trocas de projeto durante futuras edições.

## Fonte de referência

As associações abaixo foram conferidas contra a versão original do portfólio anterior ao redesign, contra os arquivos já existentes no repositório e contra o material enviado e confirmado pelo proprietário do portfólio.

## Projetos principais

### Ping Pong
- `assets/img/kv-ping-pong-horizontal.png`
- `assets/img/kv-ping-pong-vertical.png`
- `assets/img/ping-pong-logo.b64.txt` — logotipo novo enviado pelo proprietário; carregado pelo JavaScript como WebP em base64.
- Link do projeto: `https://gusgaaa.github.io/sitepingpong/`

Não associar nenhuma peça de Corinthians ao case Ping Pong e não usar arquivos de outros projetos neste bloco.

### Donna T
- `assets/img/logotipo-donna-t.png`
- `assets/img/catalogo-donna-t-maes.png`
- Link do projeto: `https://gusgaaa.github.io/donnat/`

### Zana Brigaderia
- `assets/img/zana-cover.svg`
- Link do projeto: `https://luana-nagoulart.github.io/zanabrigaderia/index.html`

### Klock
- `assets/img/klock-logo.png`

`assets/img/klock-cover.svg` não deve ser tratado automaticamente como peça principal sem nova conferência.

### Copa 365
- `assets/img/copa365-logo.png`
- `assets/img/copa365-chaveamento.png`
- `assets/img/copa365-barcelona.png`

`assets/img/copa365-cover.svg` não deve substituir as três peças confirmadas acima.

### Real Aliança F.S.
- `assets/img/real-alianca.b64.txt` — identidade enviada pelo proprietário; carregada pelo JavaScript como WebP em base64.
- Posição no portfólio: case secundário, depois dos cases já existentes; nunca usar como primeiro case sem solicitação expressa.

## Arquivo visual / Graphics

### Matchday — Da Ponte Pra Cá FC x Ducks FC
- `assets/img/matchday-ducks.b64.txt`

### Matchday — A 10 Predomina FC x Maloka FC
- `assets/img/matchday-maloka.b64.txt`

### Vini Jr.
- `assets/img/vini-jr.b64.txt`
- Categoria: Poster Design / estudo experimental.

### Fifada do Gusga
- `assets/img/fifada.b64.txt`
- Categoria: Social Media / Gaming / Sports Design.

### Queiroz Fut
- `assets/img/queiroz-fut-new.b64.txt` — identidade nova enviada pelo proprietário.
- `assets/img/analise-dme-queirozfut.png` — peça anterior já existente no repositório.

### Dia de Jogo
- `assets/img/banner-dia-de-jogo.png`

## Identidade do próprio portfólio

### Gustavo Azevedo
- `assets/img/logo-gustavo-azevedo-transparent.png`

Este arquivo é da identidade do portfólio e não deve ser apresentado como case de cliente/projeto.

## Arquivo bloqueado / não usar

### `assets/img/poster-corinthians-camisa.png`

**Status: NÃO USAR NO SITE.**

O proprietário identificou que a imagem exibida sob o rótulo “Corinthians” correspondia ao projeto Ping Pong. Portanto, este arquivo tem nome/associação não confiável e deve permanecer fora do HTML até ser renomeado ou substituído por um arquivo Corinthians confirmado.

## Regra para os arquivos `.b64.txt`

Os novos trabalhos foram compactados em WebP e armazenados como base64 textual porque a ação de arquivo do conector GitHub desta sessão aceita conteúdo UTF-8, não upload binário direto. O `assets/js/script.js` busca esses arquivos e monta a URL `data:image/webp;base64,...` no navegador. Não remover os `.b64.txt` enquanto o HTML usar `data-b64-src`.

## Regras para futuras alterações

1. Não inferir projeto apenas pelo nome do arquivo.
2. Conferir este mapa antes de adicionar uma imagem a um case.
3. Se uma imagem não estiver listada aqui, validar visualmente antes de publicá-la.
4. Cada case deve conter somente imagens pertencentes ao próprio projeto.
5. Peças independentes ficam no Arquivo Visual e não devem ser misturadas com os cases principais.
6. Real Aliança não deve ocupar a primeira posição dos cases sem solicitação expressa.

# Handoff — Alexandra Santos — Estética Avançada

> Atualizado em 11/09/2026. A base original foi refinada com nova direção visual rosa-blush/vinho, correções de hero e uma textura abstrata original para Laser Day.

## Visão geral

Landing page institucional de página única para a clínica **Alexandra Santos — Estética Avançada**, em português do Brasil. A aplicação apresenta a marca, tratamentos, chamada para Laser Day, depoimentos, FAQ e CTAs para WhatsApp.

O projeto abre e responde localmente em `http://localhost:3000` (HTTP 200). O build de produção conclui sem erros e gera a rota estática `/`.

## Tecnologias

- Next.js `16.3.4`, App Router e Turbopack.
- React `19.2.8` e TypeScript `5.9.3` em modo estrito.
- Tailwind CSS `4.3.3` via PostCSS, com tokens de cor e fonte em `src/app/globals.css`.
- `next/image` e `next/font/google` para imagens e fontes.
- GSAP `3.15.0` e ScrollTrigger para a entrada da hero e integração com Lenis.
- Lenis `1.3.26` para scroll suave (`@studio-freight/lenis` também está instalado, mas não é importado).
- Motion `13.2.0` para abas de tratamentos e acordeão de FAQ.
- Phosphor Icons para ícones.
- ESLint 9 com `eslint-config-next` e TypeScript.

Não há API, banco de dados, CMS, formulário, analytics, mapa embutido, CRM, sistema de agenda, autenticação ou integração de pagamentos. A única integração externa implementada são links `wa.me` e o link para Instagram.

## Estrutura de pastas

```text
src/
  app/
    favicon.ico             Favicon atual
    globals.css             Tailwind, tokens globais e keyframes
    layout.tsx              Fontes, SEO, JSON-LD, Lenis e WhatsApp flutuante
    page.tsx                Composição da landing page
  components/
    Header.tsx              Cabeçalho fixo e menu móvel
    Hero.tsx                Hero, CTAs e animação GSAP
    SocialProofBar.tsx      Faixa marquee
    About.tsx               Seção institucional
    Treatments.tsx          Abas e cards de tratamentos
    LaserDay.tsx            Chamada promocional/evento
    Testimonials.tsx        Carrossel de depoimentos
    FAQ.tsx                 Acordeão de dúvidas
    Footer.tsx              Navegação, contato e redes
    LenisProvider.tsx       Scroll suave e ponte Lenis/GSAP
    WhatsAppFloat.tsx       CTA flutuante
public/
  alexandra-hero.jpg        Foto principal (557 KB)
  alexandra-sobre.jpg       Foto da seção Sobre (633 KB)
  logo.png                  Logo atual (713 KB)
  *.svg                     Assets padrão remanescentes do create-next-app; não usados
```

## Páginas e componentes

Há somente a página `/`, estática e pré-renderizada. Ela monta, nesta ordem: `Header`, `Hero`, `SocialProofBar`, `About`, `Treatments`, `LaserDay`, `Testimonials`, `FAQ` e `Footer`. `LenisProvider` e `WhatsAppFloat` envolvem a página no layout raiz.

### Interações existentes

- Menu desktop com âncoras para tratamentos, sobre e FAQ.
- Menu hamburger no celular; abre, fecha e navega corretamente.
- CTAs de agendamento e cards de tratamentos abrem mensagens pré-preenchidas no WhatsApp.
- Abas Laser / Facial / Corporal com transição Motion.
- Carrossel horizontal de depoimentos com botões anterior/próximo e scroll snap.
- FAQ expansível, com animação Motion; validado no navegador.
- Cabeçalho altera fundo/sombra após scroll.
- Scroll suave Lenis conectado ao ticker do GSAP.

## Identidade visual

O estilo atual é premium, leve e editorial: fundos off-white, dourado e rosa; tipografia serifada em destaque; cards brancos arredondados; fotografia da profissional; bastante respiro e composição assimétrica na hero.

| Elemento | Implementação atual |
| --- | --- |
| Fundo base | `#F9F8F6` |
| Superfície | `#F0ECE6` |
| Dourado | `#C5A059` |
| Dourado claro | `#E8D5A3` |
| Rosa | `#B5215A` |
| Texto | `#1E1917` / `#6A5E57` |
| Display | Cormorant Garamond (300–500, normal/itálico) |
| Texto | Plus Jakarta Sans (300–600) |

## Assets

- `alexandra-hero.jpg`: usada na hero, com máscara orgânica/arquitetural no desktop e imagem de fundo translúcida no mobile.
- `alexandra-sobre.jpg`: usada na seção Sobre.
- `logo.png`: usada no cabeçalho e rodapé.
- `src/app/favicon.ico`: favicon atual.
- `file.svg`, `globe.svg`, `next.svg`, `vercel.svg` e `window.svg`: assets padrão sem referência no código; podem ser removidos apenas depois de confirmação.

As três imagens de marca/foto são arquivos locais. Direitos de uso, origem e versão final para produção não foram confirmados nesta análise.

## Animações

- Hero: timeline GSAP com entrada de eyebrow, palavras do título, CTAs, imagem e prova social; respeita `prefers-reduced-motion` apenas nessa seção.
- Scroll: Lenis e GSAP ScrollTrigger.
- Marquee contínuo na faixa de prova social (30 s).
- Pulso contínuo no botão flutuante do WhatsApp (2,5 s).
- Motion: animação de layout das abas, troca de cards e expansão/fechamento do FAQ.
- Interações de hover e focus em links, cards e botões via Tailwind.

## Responsividade

Breakpoints principais do Tailwind usados: `sm` (640 px), `md` (768 px) e `lg` (1024 px). Foram inspecionados desktop 1440×900, notebook 1280×800, tablet 834×1112 e celular 390×844.

- **Desktop/notebook:** estrutura, imagens, navegação, tabs, FAQ e carrossel renderizam. Após a animação da hero, há defeitos visuais descritos em “Problemas encontrados”.
- **Tablet (834 px):** usa a composição horizontal `md`; o título quebrado invade a imagem e sai do viewport após a animação.
- **Celular (390 px):** menu, navegação interna, tabs e FAQ funcionam. A hero alterna para a imagem translúcida ao fundo e CTAs em largura total, mas o título fica truncado após a animação e o segundo CTA não exibe o texto.

## SEO e metadados

`layout.tsx` possui título, descrição, keywords, Open Graph e JSON-LD `LocalBusiness`. O schema e metadata assumem domínio, telefone, endereço, horário e Instagram definidos no código. Eles não foram validados contra fontes oficiais nesta análise.

## Dados preenchidos no código — precisam de confirmação

Tratam-se de valores já inseridos, não de informações verificadas:

- Domínio/`metadataBase`: `https://alexandrasantosestetica.com.br`.
- WhatsApp/telefone: `+55 31 98406-8805` / `(31) 98406-8805`.
- Instagram: `https://www.instagram.com/alexandrasantosestetica/`.
- Endereço: Rua Gonçalo de Souza Barros, 85, Jaqueline, Belo Horizonte–MG, CEP 31748-251.
- Horário: segunda a sábado, 09:00–19:00.
- Alegações: 11 anos de experiência, referência em BH, tecnologia indolor, depilação definitiva, resultados visíveis, indicação para todos os fototipos e demais descrições de protocolos.
- Laser Day: frequência mensal, quatro áreas e chamada comercial.
- Lista de tratamentos, benefícios, FAQ, textos institucionais e textos de SEO.

## Placeholders e conteúdo comprovadamente provisório

- Os três cards de `Testimonials.tsx` mostram `Nome da Cliente`.
- O texto dos três depoimentos contém literalmente a marcação `{/* SUBSTITUIR por depoimento real do Google Maps */}`; ela fica visível no site.
- Os depoimentos são conteúdo de exemplo, não avaliações reais vinculadas a fonte, autoria ou autorização.
- O README permanece o padrão do create-next-app, cita Geist e não documenta a aplicação real.
- A assinatura do rodapé “Desenvolvido com excelência técnica.” é genérica e deve ser validada/removida conforme a decisão da marca.

## Problemas encontrados

1. **Performance/warning do Next em desenvolvimento:** `logo.png` é usado com `fill` no cabeçalho sem `sizes`; o Next emite aviso. O mesmo padrão existe no rodapé e deve ser revisto junto.
2. **Acessibilidade:** o botão do menu mantém o rótulo “Abrir menu” quando está aberto. Há preferência global por redução de movimento e o Lenis é desativado nesse caso, mas os controles devem receber auditoria completa de teclado e leitor de tela.
3. **Conteúdo:** as avaliações fictícias foram trocadas por cartões institucionais; avaliações reais só devem voltar após autorização. Alegações comerciais/clínicas seguem sem confirmação.
4. **Operação:** não há repositório Git inicializado neste diretório; portanto não foi possível criar checkpoint/commit desta documentação.

## Dependências e validação

- `node_modules` já estava instalado e `npm ls --depth=0` resolveu todas as dependências declaradas; nenhuma instalação adicional foi necessária.
- `npm run dev`: iniciou corretamente e a aplicação respondeu HTTP 200 em `http://localhost:3000`.
- `npm run build`: concluído com sucesso em Next 16.3.4; rota `/` pré-renderizada como estática, sem erros, imports ausentes ou dependências quebradas.
- `npm run lint`: concluído sem erros.
- Console do navegador: um aviso sobre `sizes` no logo; nenhum erro de console observado durante a navegação, tabs ou FAQ.

## Como executar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Como validar e gerar produção

```bash
npm run lint
npm run build
npm run start
```

Para o estado analisado, o build passa; o lint precisa ser corrigido antes de considerar a publicação aprovada.

## Diretriz para continuidade

Preservar a linguagem visual atual — off-white, dourado, serif editorial, composição fotográfica e microinterações — e corrigir primeiro os defeitos funcionais/visuais documentados. Não substituir framework, estilo, imagens ou layout sem uma solicitação explícita da marca.

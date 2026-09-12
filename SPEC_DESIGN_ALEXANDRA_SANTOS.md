# Especificação visual — landing page Alexandra Santos

## Base analisada

- Referência: [Página de vendas — Harmonização, Behance](https://www.behance.net/gallery/254857587/Pagina-de-vendas-Harmonizacao?tracking_source=search_projects%7Cpagina+de+vendas+est%C3%A9tica+landing+page&l=1), de Gabriel Landing Page.
- Captura local usada para as medidas: `inspiraçoes/def3a2254857587.6a8f539019668.png` — **1920 × 13.243 px**.
- Marca do cliente: Alexandra Santos — Estética Avançada.
- Logo pronta para uso sem fundo: `assets/logo-alexandra-santos-transparente.png` (PNG RGBA, 1774 × 887 px). Sempre usar esta versão, nunca a imagem original com o fundo claro.

Esta especificação reproduz a composição, ritmo, proporções e linguagem da referência, trocando a identidade do Instituto Bárbara Aires pela Alexandra Santos. Textos, credenciais, serviços, contatos e resultados devem ser aprovados pela cliente antes de publicar.

> A referência só documenta o desktop. As medidas abaixo são de desktop e são as que devem ser tratadas como fonte de verdade. O comportamento mobile está definido para preservar a composição, mas não existe um screenshot mobile que permita copiá-lo literalmente.

## Tokens visuais

| Token | Valor | Uso |
|---|---:|---|
| `--ink` | `#1A1014` | fundos escuros / hero / prova social / CTA final |
| `--ink-soft` | `#2B1B21` | FAQ e cards escuros |
| `--ivory` | `#FFF7F8` | grandes seções claras |
| `--rose-mist` | `#F4D8E0` | seção “consulta” e rodapé |
| `--pink-soft` | `#E8A0B3` | fundos suaves e overlays |
| `--pink` | `#C84F70` | cor estrutural de botões, bordas e detalhes |
| `--pink-deep` | `#9E284B` | contraste, hover e blocos escuros rosados |
| `--fuchsia-uniform` | `#E9005D` | cor de referência do jaleco/fardamento da Alexandra |
| `--gold` | `#C79D22` | somente detalhes da logo e joias |
| `--text-dark` | `#25131A` | texto em fundos claros |
| `--text-light` | `#FFF7F8` | título/texto em fundos escuros |
| `--line` | `rgba(200,79,112,.50)` | linhas, selos e contornos |

- Aplicar rosa como degradê linear de `135deg`, `#F3B8C7 0%`, `#C84F70 54%`, `#9E284B 100%`, em botões, filetes, selos, bordas e halos de fundo.
- O Instagram confirma que o **rosa é a cor estrutural ativa da marca**. O dourado permanece somente dentro da logo e em joias/acentos discretos.
- Sem sombras azuis, roxas ou rosas; as únicas sombras devem ser pretas, suaves, com opacidade de `18–30%`.

## Tipografia

| Papel | Família | Peso / caixa | Desktop |
|---|---|---|---:|
| títulos editoriais | `Cormorant Garamond` | 400 | 56–80 px / 0,93 |
| título hero | `Cormorant Garamond` | 400 | 82 px / 0,90 |
| texto corrido | `DM Sans` | 400 | 16 px / 1,55 |
| botão | `DM Sans` | 700, caixa alta | 12 px / 1 |
| eyebrow, selo e navegação | `DM Sans` | 600–700, caixa alta | 10 px / 0,20em |

Se a fonte original licenciada da referência for identificada, ela prevalece sobre essa equivalência. Não transformar títulos em sans-serif, não aplicar gradiente no texto e não usar títulos em negrito.

## Grade e regras globais

- Tela de referência: `1920px`; contêiner desktop: `1400px`, centralizado (`margin-inline: auto`); respiro mínimo lateral: `56px`.
- Grade de 12 colunas: `minmax(0, 1fr)` com `24px` de gap. Em módulos estreitos, usar subgrade de 3 colunas com o mesmo gap.
- Raios: `0` para seção e wave; `12px` nos cards; `7px` nos botões; `16px` nas imagens de destaque; `999px` somente em medalhas/círculos.
- Cada seção termina com uma onda larga assimétrica, desenhada com SVG/CSS, avançando `40–58px` sobre a seção seguinte. Não substituir por um separador reto.
- Motivo gráfico: monograma botânico abstrato da Alexandra em contorno rosa muito grande, `opacity: .09–.16`, sem competir com foto ou leitura.
- Botões: fundo `--pink`, texto branco, altura `54px`, padding horizontal `26px`, hover com fundo `--pink-deep`. CTA deve apontar para WhatsApp/agendamento real da cliente.
- Todos os textos entram em HTML/CSS; nunca gerar textos ou logos dentro de imagens com IA.

## Mapa de seções e medidas de implementação

| # | Seção | Altura desktop-alvo | Fundo | Construção exata |
|---:|---|---:|---|---|
| 1 | Barra superior + hero | 1.000 px | grafite-vinho | barra de `76px`; hero em duas colunas 46/54; texto começa em `x≈258`; retrato ocupa a direita e sai pela base; halo rosa e monograma em escala enorme atrás da Alexandra; onda escura termina o bloco |
| 2 | Dor antes do procedimento | 1.030 px | preto | bloco interno `1.400px`; à esquerda colagem vertical de 3 fotos (`255×585`, `380×585`, cartão inferior `255×160`); à direita texto com largura `570px`; selo circular central na onda inferior |
| 3 | Método / mecanismo | 1.500 px | rosa muito claro | título central com largura máxima `850px`; abaixo, 2 cards de `calc(50% - 12px)` × `350px` e 1 card full-width × `350px`; imagens com overlay rosa claro e monograma translúcido |
| 4 | Tratamentos | 1.550 px | rosa muito claro | título central; grade 3×2 de cards grafite, cada um `430×570px`, gap `28px`; ícone no canto superior; botão alinhado à base |
| 5 | Consulta antes da agulha | 1.020 px | rosé empoeirado | duas colunas 42/58; texto à esquerda; colagem “face + tela de smartphone + cards” à direita; onda baixa para o bloco seguinte |
| 6 | Quem é Alexandra | 1.080 px | rosa muito claro | esquerda: composição de dois retratos da cliente, uma close e uma meio-corpo; direita: eyebrow, nome, especialidade, bio e CTA; selo circular entre texto e foto |
| 7 | Prova social, segurança e FAQ | 2.510 px | preto | título central; 3 painéis de antes/depois com borda dourada; CTA; banner de avaliação clínica com `1.400×470px`; título FAQ e 6 accordions `1.040px` de largura |
| 8 | CTA final | 1.150 px | preto | duas colunas 46/54; texto à esquerda; composição de retrato grande + retrato menor + placa marfim à direita; letras verticais discretas ao fundo |
| 9 | Rodapé | 410 px | bege sálvia | logo à esquerda com largura visual de `230px`; CTA; dados de atendimento em duas colunas; faixa inferior preta de `60px` |

### Ordem e conteúdo de cada seção

1. **Hero**
   - Logo transparente Alexandra Santos no cabeçalho, altura visual `38px` (não usar a versão com fundo); usar fundo grafite-vinho para valorizar o dourado da marca.
   - Botão no canto direito: `AGENDAR AVALIAÇÃO`.
   - Eyebrow: `ESTÉTICA AVANÇADA PERSONALIZADA`.
   - Headline em 3–4 linhas, por exemplo: `Realce sua beleza. Preserve sua essência.`
   - Texto de apoio, um CTA e três microprovas separadas por filetes verticais. Só manter números/certificações comprováveis.

2. **Antes de qualquer procedimento**
   - Headline: `Você já se pegou olhando no espelho e não sabendo explicar o que mudou.`
   - Colagem de macro de pele/lábios, mãos clínicas e detalhe orgânico. Ver prompts `02A–02C`.

3. **O mecanismo por trás do resultado**
   - Título: `Harmonização não é sobre mudar seu rosto. É sobre devolver o que o tempo tirou.`
   - Cards: `Avaliação individual`, `Naturalidade`, `Critério clínico`.
   - Usar imagens discretas, com bastante overlay marfim: elas são textura, não o assunto principal.

4. **Tratamentos por necessidade**
   - Manter seis cards e a mesma hierarquia do screenshot: ícone fino, rótulo, título, parágrafo e CTA.
   - Os procedimentos exibidos devem ser trocados pelos serviços realmente oferecidos: exemplos na referência incluem modulador muscular, preenchimento labial, bioestimuladores, olheiras, lipoaspiração cirúrgica e protocolo personalizado.
   - Ícones devem ser SVG lineares dourados, não imagens de IA.

5. **Consulta**
   - Headline: `Antes de qualquer agulha, existe uma conversa.`
   - Composição direita: retrato lateral feminino em uma tela de celular + fotografia clínica de lábios; livros/placas neutras ao fundo; aro gráfico dourado translúcido.

6. **Profissional**
   - Título: `Alexandra Santos` e subtítulo/cargo validados pela cliente.
   - Inserir retratos da Alexandra, nunca rosto genérico. A bio deve apresentar somente formação, registro e experiências verificáveis.

7. **Resultados, avaliação e FAQ**
   - Título: `Resultados reais, sem exagero.`
   - Antes/depois só pode ser formado por fotos de pacientes reais, com consentimento documentado, mesmo enquadramento, mesma luz e aviso adequado. Não gerar “resultados” com IA nem chamá-los de pacientes reais.
   - Banner clínico: texto à esquerda e close de pele/rosto com tecido translúcido à direita.
   - FAQ: 6 linhas em cards `#20201F`, borda superior fina cinza/dourada, ícone `−` aberto e `+` fechado.

8. **CTA final**
   - Headline: `Seu rosto já diz muito sobre você. Que tal ele dizer exatamente o que você quer que diga?`
   - Retratos da Alexandra em dois tamanhos, usando o jaleco rosa-fúcsia característico, sobre cartões rosa blush. CTA e microprovas abaixo.

9. **Rodapé**
   - Logo dourada transparente; chamada de agendamento; WhatsApp, e-mail, endereço, horários e cidades verdadeiros. Não publicar telefone/endereço que pertencem à referência.

## Responsividade

| Faixa | Regra |
|---|---|
| `≥ 1280px` | aplicar todas as medidas e grade desktop acima |
| `768–1279px` | contêiner `calc(100% - 80px)`; hero, consulta, bio e CTA ainda em duas colunas; tratamentos em 2×3 |
| `< 768px` | padding lateral `24px`; hero vira texto → foto; todas as grids viram uma coluna; cards de tratamento ocupam 100%; FAQ 100%; colagens são empilhadas e não devem cortar rostos; CTA fixo de WhatsApp opcional com 56px de altura |

- Em mobile, reduzir apenas escala e grade: jamais achatar o retrato, mover o logo para fundo colorido ou remover as ondas.
- Títulos: hero `54px`, demais títulos `42px`; corpo `16px`; botão largura total onde necessário.
- A imagem da pessoa deve sempre carregar com `object-position` ajustado por seção; não usar um único crop global.

## Checklist de fidelidade antes de implementar

- [ ] Canvas desktop de 1920px e contêiner de 1400px.
- [ ] Alternância preto → marfim → bege sálvia → preto exatamente na ordem acima.
- [ ] Ondas entre todos os grandes blocos, inclusive antes do rodapé.
- [ ] Serif editorial para títulos e sans compacta para interface.
- [ ] Dourado da marca somente em detalhes, bordas, ícones e logo — não como fundo dominante.
- [ ] Logo com transparência real (canal alfa), sem caixa branca/rosa.
- [ ] Fotos da Alexandra em hero, bio e CTA; paciente não é substituído por IA na prova social.
- [ ] Todos os CTAs apontam ao mesmo fluxo de agendamento real.

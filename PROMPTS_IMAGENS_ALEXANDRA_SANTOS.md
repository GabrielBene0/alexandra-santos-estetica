# Prompts de imagens — Alexandra Santos

## Arquivos de referência e papel de cada um

| Arquivo | Papel |
|---|---|
| `C:/Users/gabri/Downloads/SaveClip.App_682939100_18437527675142589_4105478530319485595_n.jpg` | referência de rosto/corpo da Alexandra em contexto profissional; cabelo longo preto ondulado, pele morena média, postura confiante |
| `C:/Users/gabri/Downloads/SaveClip.App_725879729_18445848463142589_9088234862756022354_n.jpg` | referência adicional de rosto, sorriso, acessórios e pose sentada |
| `C:/Users/gabri/Downloads/SaveClip.App_727547751_18446237116142589_3405036120603858211_n.jpg` | referência da Alexandra em jaleco rosa e contexto estético clínico |
| `C:/Users/gabri/Downloads/Imagem do Codex 11 de set. de 2026, 12_46_40.png` | logo original; não usar como imagem de cena |
| `assets/logo-alexandra-santos-transparente.png` | logo para o site, com fundo transparente |

## Regras para toda geração

1. Anexe as **três fotos da Alexandra** em cada prompt marcado com `usar referências da cliente`. Elas existem para manter o rosto, tom de pele e cabelos reconhecíveis; não substitua por uma modelo parecida.
2. Gere a foto sem logo, letras, preços, botões, selos, marca-d’água ou texto. A interface acrescenta tudo depois em HTML/CSS.
3. Direção recorrente: luxo clínico discreto, grafite-vinho, rosa blush, rosé, fúcsia e dourado somente como pequeno acento da logo/joias; luz de estúdio suave e quente; realismo fotográfico editorial; pele com textura natural, nunca filtro de porcelana.
4. Não copiar imagens ou pessoas da referência do Behance. Copiar apenas a função visual, enquadramento e clima descritos aqui.
5. Não gerar antes/depois para se passar por resultado clínico real. Essa área deve usar fotos autorizadas de pacientes reais; ver `08`.

## Prompt-base

Use este bloco no início de todos os prompts e adicione o bloco específico da imagem.

```text
Use case: photorealistic-natural
Asset type: imagem editorial para landing page de estética avançada
Brand direction: Alexandra Santos Estética Avançada; estética premium, clínica, acolhedora e assumidamente rosa, conforme o Instagram da marca.
Style/medium: fotografia editorial de beleza, alta definição, textura de pele realista, acabamento de revista, sem aparência de banco de imagens.
Lighting/mood: luz de estúdio difusa e quente, sombras macias, contraste elegante e fundo limpo.
Color palette: grafite-vinho, rosa blush, rosé, fúcsia e reflexos dourados discretos; rosa é a cor dominante da marca.
Constraints: nenhuma palavra, letra, logo, marca-d’água, preço, botão ou interface dentro da imagem. Manter espaço negativo quando indicado. Sem mãos deformadas, sem pele plastificada, sem instrumentos invasivos em contato com o rosto.
```

## Inventário completo e prompts

### 01 — Hero: retrato principal da Alexandra

**Uso:** lado direito do hero preto; exportar PNG/WebP vertical, `1200×1500`, com recorte limpo.

```text
Use case: identity-preserve
Asset type: hero de landing page
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: retrato editorial de meio-corpo da própria Alexandra Santos, mulher brasileira adulta, pele morena média, olhos castanhos, cabelo longo preto e ondulado, expressão segura e acolhedora, braços cruzados. Vestir seu jaleco rosa-fúcsia característico, de gola alta, corte profissional e zíper sem texto, com joias douradas minimalistas. Fundo grafite-vinho com halo rosa discreto, deixando área escura negativa à esquerda para texto. Enquadramento vertical, Alexandra posicionada à direita e olhando levemente para a câmera.
Constraints: preservar identidade e jaleco rosa-fúcsia; mãos anatomicamente corretas; sem texto, sem logo, sem marca-d’água.
```

### 02A — Colagem “antes de qualquer procedimento”: macro de rosto

**Uso:** painel vertical alto à esquerda, `720×1500`.

```text
Use case: identity-preserve
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: macro editorial do próprio rosto da Alexandra Santos, com recorte do olho, nariz, bochecha e lábios; preservar tom de pele morena média, olhos castanhos, cabelo preto e estrutura facial da cliente. Pele real com poros e linhas finas discretamente visíveis, batom rosa-avermelhado natural, fundo marfim fora de foco e reflexo rosé suave.
Constraints: precisa ser reconhecivelmente a Alexandra; sem texto, logo, marca-d’água, ferramentas ou procedimento em andamento.
Avoid: modelo genérica, cabelo claro, pele plástica, lábios distorcidos ou retoque excessivo.
```

### 02B — Colagem “antes de qualquer procedimento”: preparo clínico

**Uso:** painel vertical central, `960×1500`.

```text
Primary request: mãos de profissional de estética usando luvas pretas, preparando cuidadosamente uma seringa de preenchimento em bancada clínica marfim; enquadramento vertical, foco nas mãos e no instrumento, fundo desfocado quente, atmosfera rigorosa e elegante. Não mostrar paciente, não perfurar pele e não mostrar sangue.
Composition/framing: as mãos preenchem o painel central; espaço negativo sutil acima e abaixo; luz dourada suave.
```

### 02C — Colagem “antes de qualquer procedimento”: detalhe orgânico

**Uso:** cartão baixo sob a macro, `720×420`.

```text
Primary request: close editorial minimalista de mão feminina descansando sobre tecido marfim acetinado e uma folha verde-oliva delicada; luz de fim de tarde filtrada, sombras suaves, sensação de cuidado e naturalidade.
Composition/framing: horizontal, poucos elementos, sem rosto, sem texto.
```

### 03A — Card “Avaliação individual”

**Uso:** card claro esquerdo, `1000×760`, receberá overlay marfim de 72% no site.

```text
Primary request: espelho de mesa oval com moldura dourada suave sobre bancada de clínica de estética em pedra clara, reflexo abstrato e nenhum rosto identificável; ambiente calmo, marfim e bege sálvia, foto editorial de interiores.
Composition/framing: horizontal e minimalista, objeto concentrado à esquerda, área livre à direita para texto.
```

### 03B — Card “Naturalidade”

**Uso:** card claro direito, `1000×760`, overlay marfim de 78%.

```text
Primary request: tecido translúcido marfim passando diante de uma silhueta feminina desfocada, composição abstrata sobre naturalidade e leveza, com dobras suaves e luz de estúdio quente.
Composition/framing: horizontal, grande área limpa à esquerda para texto, sem traços faciais reconhecíveis e sem texto.
```

### 03C — Card “Critério clínico”

**Uso:** card claro largo, `2048×760`, overlay marfim de 76%.

```text
Primary request: cena clínica abstrata e sofisticada de profissional com jaleco claro organizando instrumentos estéreis sobre bancada neutra; foco suave, detalhes apenas sugeridos, sem agulha em pele e sem paciente visível. Paleta marfim, bege sálvia e dourado fosco.
Composition/framing: horizontal panorâmico; ação no lado esquerdo, grande área livre no lado direito para texto.
```

### 04 — Ícones dos seis tratamentos

**Uso:** topo dos seis cards pretos. **Não gerar com IA.** Criar SVGs lineares próprios em dourado de 1,5px: rosto/linhas de expressão, lábios, colágeno, perfil/olheiras, contorno mandibular e protocolo/rosto. Cada SVG deve ocupar `52×52px`, caixa de `64×64px`, borda `rgba(199,157,34,.52)` e raio `10px`.

### 05 — Consulta: composição rosto + smartphone

**Uso:** lado direito da seção bege, bloco final montado em CSS/Figma; não gerar a colagem inteira de uma vez.

**05A — tela do smartphone (`1080×1350`)**

```text
Use case: identity-preserve
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: díptico editorial da própria Alexandra para ser exibido dentro da tela de um smartphone; à esquerda, close em três quartos do rosto com parte do jaleco rosa-fúcsia visível; à direita, macro do nariz, sorriso e lábios da mesma Alexandra. Divisor vertical branco e iluminação marfim com reflexo rosa suave.
Constraints: os dois painéis mostram a mesma Alexandra; preservar rosto, pele morena média, olhos castanhos, cabelo preto e batom rosa-avermelhado; sem moldura de celular, texto, setas, marcação, seringa, logo ou resultado de procedimento.
```

**05B — placa/livros de fundo (`1600×1000`)**

```text
Primary request: duas revistas ou livros de arte minimalistas sobre superfície bege sálvia, perspectiva levemente inclinada, lombadas sem texto legível, uma placa translúcida marfim atrás, sombra macia e reflexo dourado sutil.
Constraints: sem marca, sem texto legível, sem celular e sem rosto.
```

### 06 — Seção “Quem vai cuidar do seu rosto”

**Uso:** composição à esquerda da bio. Gerar duas imagens da mesma sessão para montagem.

**06A — retrato close (`960×1200`)**

```text
Use case: identity-preserve
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: retrato close-up editorial da Alexandra, cabelo preto ondulado com acabamento elegante, pele morena média com acabamento natural, olhar sereno direto à câmera, jaleco rosa-fúcsia de estética com gola alta e zíper sem texto, brinco dourado pequeno. Fundo rosa blush desfocado, luz quente lateral, crop do peito para cima.
Constraints: preservar rosto real da Alexandra e seu jaleco rosa; sem texto e sem logo.
```

**06B — retrato meio-corpo (`1200×1500`)**

```text
Use case: identity-preserve
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: retrato de meio-corpo da Alexandra Santos, em pé, braços cruzados, jaleco rosa-fúcsia profissional com gola alta e zíper sem texto, calça preta de alfaiataria, expressão profissional e tranquila. Fundo rosa blush muito claro, luz editorial suave, crop vertical para sobreposição.
Constraints: manter exatamente os traços de rosto, tom de pele, cabelo e jaleco rosa da cliente; sem texto ou logo.
```

### 07 — Banner “Avaliação profissional”

**Uso:** banner de segurança clínica, `2048×700`, texto será sobreposto à esquerda.

```text
Use case: identity-preserve
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: retrato editorial horizontal da Alexandra Santos usando seu jaleco rosa-fúcsia sobre blusa rosa-clara, expressão acolhedora e segura, cabelo preto longo e ondulado. Fundo contínuo marfim para rosa blush.
Composition/framing: formato 16:9; Alexandra no terço direito, do peito para cima; metade esquerda totalmente limpa para texto em HTML.
Constraints: preservar rosto, tom de pele, cabelo e identidade da cliente; sem texto, logo, marca-d’água, instrumentos ou procedimento.
Avoid: modelo genérica, jaleco branco, cabelo claro, pele artificial ou pose dramática.
```

### 08 — Prova social: antes e depois

**Uso:** três painéis no fundo preto. **Não usar prompt de geração.**

Checklist do material real:

- usar apenas pacientes reais, com autorização escrita específica para site;
- repetir ângulo, distância, luz, expressão, fundo e ausência de filtro;
- aplicar recorte vertical `700×820`, borda dourada de `2px` e separador central discreto;
- inserir aviso jurídico e nunca prometer resultado;
- se ainda não houver consentimento, substituir a seção temporariamente por depoimentos textuais autorizados ou uma mensagem de privacidade — não fabricar os resultados.

### 09 — CTA final: retrato grande e retrato pequeno da Alexandra

**Uso:** dois arquivos da mesma sessão: grande `1200×1500` e pequeno `600×760`, sobre placas marfim em fundo preto.

```text
Use case: identity-preserve
Input images: usar as três referências fotográficas da cliente Alexandra Santos para preservar fielmente sua identidade.
Primary request: retrato editorial premium da Alexandra Santos, mulher brasileira adulta de pele morena média e cabelo preto ondulado elegante, usando jaleco rosa-fúcsia profissional de gola alta e zíper sem texto, joias douradas discretas. Ela toca levemente a lateral do pescoço/mandíbula com uma mão, postura confiante, expressão acolhedora e olhar para a câmera. Fundo grafite-vinho com halo rosa, luz quente lateral, formato vertical.
Composition/framing: gerar uma versão meio-corpo grande e, a partir da mesma direção, uma versão close de busto para a sobreposição menor.
Constraints: preservar a identidade real da Alexandra e seu jaleco rosa; mãos corretas; sem texto, logo ou elementos médicos invasivos.
```

### 10 — Logo transparente

**Uso:** cabeçalho e rodapé.

O arquivo `assets/logo-alexandra-santos-transparente.png` já foi preparado com canal alfa. Caso precise refazer no GPT, usar somente este prompt de edição com a imagem da logo anexada:

```text
Use case: background-extraction
Asset type: PNG de logo para landing page
Primary request: remover somente o fundo claro/texturizado e devolver a logo Alexandra Santos Estética Avançada em PNG com transparência real.
Constraints: preservar todos os traços, árvore, perfil feminino, dourado, texto, acentos, alinhamento e bordas exatamente como no arquivo de origem. Não redesenhar nem corrigir o logo. Sem halo, sombra, caixa de fundo, texto extra ou marca-d’água.
```

### 11 — Nova sessão de estúdio: Naturalidade, Clareza e Segurança

**Uso:** substituir os dois closes repetitivos da seção escura e o retrato com dominante rosa do banner de segurança. As três imagens devem manter a pele em cor natural; o rosa forte fica restrito ao jaleco da Alexandra.

#### 11A — Retrato “Naturalidade”

```text
Use case: identity-preserve
Asset type: premium vertical editorial studio portrait for a luxury aesthetics landing-page card.
Input images: all three supplied images are identity references of the same real client, Alexandra Santos.
Primary request: Create a new photorealistic studio portrait of Alexandra Santos, preserving her recognizable facial identity, proportions, complexion, long black wavy hair, and warm confident expression. She is wearing her vivid fuchsia-pink professional aesthetics coat, styled cleanly and elegantly, in a relaxed three-quarter pose with a gentle natural smile. Show her from mid-torso upward with her hands posed naturally and anatomically correct.
Scene/background: refined warm ivory seamless studio backdrop with a very subtle plaster texture and soft sculptural shadow, no clinic clutter.
Composition: portrait 4:5 orientation, subject slightly right of center, enough uncluttered space in the lower third for an HTML dark gradient and caption, no tight macro crop.
Lighting: neutral daylight-balanced softbox with delicate rim light, accurate natural skin tones, crisp eyes, realistic skin texture, premium commercial photography, high resolution.
Color: neutral ivory and graphite surroundings; her coat remains distinctly vivid fuchsia pink. No pink or magenta cast on skin or background.
Constraints: identity must match the references; realistic hair strands and fabric; professional, trustworthy, sophisticated; no text, no logo, no watermark, no medical instruments.
Avoid: beauty-filter skin, plastic retouching, altered face, generic model, oversaturated magenta grade, heavy makeup changes, malformed hands, extra fingers, macro face crop.
```

#### 11B — Retrato “Clareza”

```text
Use case: identity-preserve
Asset type: premium vertical editorial studio portrait for a second luxury aesthetics landing-page card.
Input images: all three supplied images are identity references of Alexandra Santos.
Primary request: Create a different new photorealistic studio photograph of Alexandra Santos while preserving her recognizable identity, face shape, medium warm skin tone, brown eyes, and long black wavy hair. She wears her vivid fuchsia-pink professional coat. Pose her in a calm side-facing three-quarter stance beside a subtle round tabletop mirror with a thin champagne-metal frame, looking back toward camera with composed confidence. Mid-torso portrait, hands relaxed and anatomically correct.
Scene/background: minimalist warm-gray and ivory photography studio with a clean pedestal and gentle architectural shadow, editorial rather than clinical.
Composition: portrait 4:5 orientation, Alexandra placed slightly left of center with visible contextual space, lower portion visually quiet for a dark HTML gradient and caption. Clearly different pose and framing from the first portrait.
Lighting: neutral daylight-balanced key light, soft fill, clean highlights, natural skin color and skin texture, premium high-resolution commercial studio photography.
Color: neutral ivory, warm gray and restrained champagne; the coat is the only strong pink. Absolutely no global pink filter or magenta haze.
Constraints: preserve Alexandra's identity faithfully; no text, logo, watermark, syringes, gloves, or procedure; realistic mirror reflection only if visible.
Avoid: generic model, macro crop, split-face collage, heavy retouching, pink-tinted skin/background, uncanny reflection, extra fingers, distorted facial features.
```

#### 11C — Banner “Segurança e critério”

```text
Use case: identity-preserve
Asset type: ultra-wide studio hero/banner photograph for a luxury aesthetics website.
Input images: all three supplied images are identity references of Alexandra Santos.
Primary request: Create a fresh photorealistic professional studio portrait of Alexandra Santos, faithfully preserving her recognizable identity, face shape, medium warm skin tone, brown eyes, long glossy black wavy hair, and friendly confident presence. She wears her vivid fuchsia-pink professional aesthetics coat over a clean neutral top. Pose her on the right side, from waist/chest upward, one hand lightly supporting her chin or resting naturally, with a subtle composed smile.
Scene/background: clean warm-white to very light neutral-gray seamless studio background with a faint soft shadow and premium editorial finish.
Composition: wide 16:9 landscape, Alexandra occupies the right 40–44 percent; the left 55 percent is intentionally empty, clean and bright for website headline and body copy. Keep her full head and shoulders inside safe margins.
Lighting: neutral daylight-balanced softbox, accurate natural skin tones, realistic pores and hair, gentle contouring, sharp professional high-resolution photograph.
Color: background remains neutral white/ivory, skin retains natural warm color, coat remains authentic vivid fuchsia. No global rose wash, no pink fog, no magenta tint.
Constraints: identity must clearly match the reference woman; no text, logo, watermark, furniture, medical equipment, decorative overlays, gradients or graphic elements burned into the image; correct hands.
Avoid: beauty-filter plasticity, face alteration, generic model, washed-out exposure, monochrome pink grading, excessive smoothing, cropped hair, malformed fingers.
```

### 12 — Hero natural e modelo ilustrativa sem repetição

#### 12A — Hero integrado ao fundo grafite-vinho

**Uso:** alternativa de hero preservada no projeto, atualmente não utilizada.

```text
Use case: identity-preserve
Asset type: seamless portrait for the right side of a premium aesthetics website hero.
Input images: Images 1–3 are the authorized identity references of Alexandra Santos. Image 4 is a natural-retouching and pose-quality reference from the same project.
Primary request: Create a new photorealistic studio portrait of Alexandra Santos that feels candid, warm and credible rather than posed or artificial. Preserve her recognizable face, medium warm skin tone, brown eyes, long black wavy hair and vivid fuchsia-pink professional coat. Pose her standing at a subtle three-quarter angle with shoulders relaxed and level, head nearly upright, a soft genuine smile and direct gaze. Her hands rest naturally together at waist level; show her from the upper thighs upward.
Scene/backdrop: perfectly uniform matte near-black burgundy background in exact color #1A1014, extending cleanly to every edge and corner so it blends invisibly into the website.
Composition/framing: vertical 4:5 canvas, full hair and both elbows and hands safely inside the frame, generous safety margin above the head, balanced silhouette for anchoring on the right.
Lighting/mood: large neutral softbox from front-left and restrained rim light, daylight-balanced, calm and welcoming, with natural skin texture.
Constraints: preserve Alexandra's identity; anatomically correct hands; realistic hair and fabric; no visible rectangle edge, no text, logo, watermark, furniture or props.
Avoid: cropped head, head tilt, rigid crossed arms, exaggerated glamour pose, pink fog, checkerboard, gradient backdrop, plastic skin, altered face, generic model or extra fingers.
```

#### 12B — Close de pele com modelo ilustrativa

**Uso:** mosaico editorial da seção de abertura. Esta pessoa não representa uma paciente ou resultado real.

```text
Use case: photorealistic-natural
Asset type: vertical editorial skin-detail photograph for a premium aesthetics landing-page mosaic.
Primary request: Create an illustrative close-up of an anonymous adult Brazilian woman who is clearly a different person from Alexandra Santos: light-to-medium warm brown skin, hazel-brown eye, dark brown hair pulled softly back, neutral rose lips and no beauty mark. Emphasize healthy real skin with subtle pores, fine facial texture and natural expression. This is a decorative skin-care image, not a testimonial or before-and-after.
Scene/backdrop: softly blurred warm taupe studio background.
Style/medium: high-end natural beauty editorial photography, authentic and understated.
Composition/framing: vertical 2:3 crop showing one eye, cheek, nose and a partial relaxed smile; face angled slightly toward soft light; no hands and no full-body view.
Lighting/mood: large neutral softbox, soft shadow, daylight-balanced, calm clinical elegance.
Color palette: warm natural skin, taupe and muted rose; no strong fuchsia and no global pink grade.
Constraints: visibly different identity, hair and styling from Alexandra; realistic pores and small natural imperfections; no text, logo, watermark or medical instruments.
Avoid: resemblance to Alexandra, red lipstick, black long curls, fuchsia coat, beauty-filter skin, excessive retouching, uncanny eye, pink haze or glamour-ad artificiality.
```

## Ordem de produção recomendada

1. Gerar `01`, `06A`, `06B` e `09` usando as referências da Alexandra; aprovar primeiro a fidelidade do rosto.
2. Gerar `02A`, `05A` e `07` também com as referências da Alexandra; deixar apenas objetos, mãos sem rosto e texturas como imagens anônimas de apoio.
3. Montar cada colagem e overlays no layout; não pedir para a IA criar a página inteira como uma única imagem.
4. Inserir fotos reais de resultados somente quando houver consentimento e validação da cliente.

## Arquivos gerados nesta entrega

Todos os arquivos abaixo estão em `assets/generated/` e já foram produzidos em alta resolução:

| Arquivo | Função no layout | Dimensão |
|---|---|---:|
| `01-hero-alexandra-rosa.png` | hero principal — **versão ativa, reposicionada para preservar a cabeça** | 1122 × 1402 |
| `02a-macro-pele-labios.png` | versão anterior genérica — arquivo preservado, não utilizado | 1122 × 1402 |
| `02b-preparo-clinico.png` | colagem clínica — preparo | 1122 × 1402 |
| `02c-detalhe-organico.png` | colagem clínica — detalhe | 1672 × 941 |
| `03a-avaliacao-espelho.png` | card avaliação individual | 1448 × 1086 |
| `03b-naturalidade-tecido.png` | card naturalidade | 1448 × 1086 |
| `03c-criterio-clinico.png` | card critério clínico | 1916 × 821 |
| `05a-diptico-face-labios.png` | versão anterior genérica — arquivo preservado, não utilizado | 1122 × 1402 |
| `05b-placas-livros.png` | fundo da colagem de consulta | 1586 × 992 |
| `06a-alexandra-close-rosa.png` | retrato close da seção institucional — **usar esta versão** | 1122 × 1402 |
| `06b-alexandra-corpo-inteiro-rosa.png` | retrato de corpo inteiro da seção institucional — **usar esta versão** | 1122 × 1402 |
| `07-banner-avaliacao.png` | versão anterior genérica — arquivo preservado, não utilizado | 1916 × 821 |
| `09a-cta-alexandra-rosa.png` | retrato grande do CTA final — **usar esta versão** | 1122 × 1402 |
| `09b-cta-alexandra-detalhe-rosa.png` | cartão menor do CTA final; reutiliza o close rosa para consistência visual | 1122 × 1402 |
| `10a-alexandra-diptico-identidade.png` | tela do celular; removida do card de clareza | 1122 × 1402 |
| `10b-alexandra-macro-pele.png` | versão anterior com a Alexandra, preservada e não utilizada | 1024 × 1536 |
| `10c-alexandra-banner-avaliacao.png` | versão anterior do banner, preservada e não utilizada | 1672 × 941 |
| `11a-alexandra-studio-naturalidade.png` | card Naturalidade — **nova versão ativa em estúdio** | 1122 × 1402 |
| `11b-alexandra-studio-clareza.png` | card Clareza — **nova versão ativa em estúdio** | 1122 × 1402 |
| `11c-alexandra-studio-seguranca.png` | banner Segurança e critério — **nova versão ativa sem filtro rosa** | 1672 × 941 |
| `12a-hero-alexandra-natural.png` | alternativa de hero, preservada e não utilizada | 1122 × 1402 |
| `12b-macro-pele-modelo-ilustrativa.png` | mosaico de pele — **versão ativa sem repetir a Alexandra** | 1024 × 1536 |

O logo com fundo transparente permanece em `assets/logo-alexandra-santos-transparente.png`. Ícones devem ser SVGs e a prova social deve ser inserida apenas com imagens reais autorizadas.

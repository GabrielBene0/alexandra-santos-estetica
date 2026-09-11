# TODO

## CRÍTICO

- Não há bug crítico conhecido após a validação visual de 11/09/2026.

## ANTES DE PUBLICAR

- Confirmar e centralizar telefone/WhatsApp `+55 31 98406-8805`, Instagram, domínio, endereço, CEP e horário de funcionamento.
- Confirmar todos os textos institucionais, tratamentos ofertados, Laser Day mensal e as alegações “11 anos”, “referência”, “indolor”, “definitiva”, “todos os fototipos” e resultados; obter a revisão profissional/jurídica aplicável para comunicação de estética.
- Confirmar licença/direitos de uso das fotos, logo e favicon e substituir por versões finais otimizadas se necessário.
- Revisar SEO técnico antes de apontar o domínio: `metadataBase`, schema `LocalBusiness`, Open Graph, título, descrição e imagem social.
- Configurar hospedagem, domínio, SSL, variáveis de ambiente se surgirem, monitoramento de erros e fluxo de deploy; não há configuração de deploy/CI no projeto.
- Incluir os links e textos legais exigidos pela operação (privacidade/LGPD, termos e consentimentos), caso aplicáveis.
- Testar em navegadores/dispositivos reais após a correção da hero, inclusive teclado, leitor de tela e preferência por redução de movimento.

## RECOMENDADO

- Definir `sizes` para o logo usado com `next/image` no cabeçalho e rodapé, eliminando o warning do Next e melhorando a seleção de imagem.
- Otimizar/avaliar formato e peso de `logo.png` (713 KB) e das duas fotos JPEG (557 KB e 633 KB).
- Ajustar o rótulo e o estado ARIA do botão do menu móvel para refletir “Abrir”/“Fechar menu”.
- Implementar uma estratégia consistente para `prefers-reduced-motion`, incluindo Lenis, marquee, pulso do WhatsApp e animações Motion.
- Atualizar o README padrão para documentação do projeto ou apontá-lo para `HANDOFF.md`.
- Revisar textos do FAQ e benefícios por precisão técnica e tom de marca.
- Avaliar rastreamento de conversões, integração de agenda/CRM e links de mapa, conforme a operação aprovar.

## OPCIONAL

- Remover os assets padrão não usados em `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) depois de confirmar que não serão reutilizados.
- Avaliar a remoção de `@studio-freight/lenis`, pois o código importa `lenis`.
- Personalizar a assinatura genérica “Desenvolvido com excelência técnica.” no rodapé.
- Criar um repositório Git e um fluxo de CI para preservar histórico, revisão e validação automática.

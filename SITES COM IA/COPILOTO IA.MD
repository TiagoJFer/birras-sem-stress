---
title:        "Copiloto — Seu site (ou landing page) de alta performance publicado com IA"
modulo:       "Sites com IA"
area:         "IA para Marketing e Conteúdo"
entregavel:   "Um site Astro seu no ar (Cloudflare Pages, grátis, performance e SEO ~100): design system próprio extraído de uma referência que você escolheu, hero com vídeo que anima conforme a rolagem, componentes reutilizáveis numa página /templates governada por AGENTS.md, e formulário interativo com validações, celebração e integração externa."
ferramentas_requeridas:
  - "Uma IDE + uma IA de código: VS Code + extensão Claude Code (a stack do curso), ou Cursor, Google Antigravity (tem free), Codex da OpenAI (tem free), OpenCode — qualquer uma serve"
  - "Node.js instalado (`npm install` / `npm run dev`)"
  - "Extensão de Chrome Extrator de Design System (grátis, está nos recursos da aula 01b)"
  - "Conta gratuita no GitHub + conta gratuita na Cloudflare (Pages)"
  - "[opcional] Assinatura do Claude, se quiser usar o Claude Design (claude.ai/design) para gerar o design system — dá para fazer sem, pedindo direto à sua IA"
  - "[opcional] ChatGPT/Gemini (ou Magnific/Higgsfield) para gerar as imagens e o vídeo do hero"
pre_requisitos:
  - "Saber o que o site precisa vender/comunicar — e, de preferência, ter uma página de referência (a sua atual, a de um concorrente, ou uma que você ache bonita)"
  - "Disposição para caçar referência de design: é o passo que define se o resultado vai ser bonito ou 'lixo de IA'"
  - "[opcional] Domínio próprio, se não quiser ficar no `.pages.dev`"
fonte:        "aulas sitescomia-fpn-01a..01j (curso.ibe.ia.br)"
como_usar:    "Cole este arquivo inteiro na sua IA de código (Claude Code / Codex / Antigravity / Cursor), dentro da pasta do projeto, e diga:
               'seja meu copiloto seguindo este guia'. Ela conduz fase a fase, uma etapa por vez."
---

# Seu papel (leia isto, IA)

Você é meu **copiloto** para construir e publicar meu site com IA. Regras inegociáveis:

1. **Uma etapa por vez.** Faça **um** passo, implemente **junto** comigo e **espere eu confirmar o retorno** (o que apareceu no `localhost`, o print, o erro) antes de seguir. **Nunca** despeje o projeto inteiro nem um textão.
2. **Peça meus inputs antes de decidir por mim:** qual site/página é a referência, qual é o meu negócio, quais páginas, quais campos do formulário, qual integração. O exemplo do curso é o site do Alex Hormozi (`acquisition.com`) — o **meu** projeto é outro; use o meu.
3. **Me entreviste sempre no planejamento.** Antes de executar, pergunte o que estiver em aberto. E quando eu não souber decidir, me dê **prós e contras + sua recomendação técnica**.
4. **Artefatos prontos moram na aula.** A extensão Extrator de Design System, as skills de design (Impeccable, Taste, Frontend Design, UI UX Pro Max) e os componentes de terceiros estão **nos recursos das aulas** — me mande abrir a aula indicada (link) e pegar de lá. Não invente um "equivalente".
5. **Print é linguagem.** Sempre que eu apontar um problema visual, me peça um **print** — e quando eu pedir um ajuste, aceite (e incentive) que eu **explique o motivo** ("ao lado ficou feio"), porque isso melhora sua decisão.
6. **Defira ao vídeo no detalhe fino.** Você orquestra; a aula tem a tela exata. Use **somente** os links do *Índice de aulas*. **Nunca** invente/encurte URL nem passo fora do guia/aula.
7. Termine se apresentando em 2 linhas e **me perguntando o 1º input**: eu estou **recriando uma página que já existe** (qual a URL?) ou **criando do zero** (o que o site precisa comunicar?) — e qual **IA de código** eu vou usar? Só então comece a Fase 1.

# Contexto do projeto (a inteligência por trás)

O site é **código** — arquivos numa pasta. Usando o framework **Astro**, esse código vira **HTML estático**: carrega quase instantaneamente e o Google (e as IAs) indexam muito bem. Astro é o melhor do mundo para **sites de conteúdo e landing pages** — para um sistema/app de gestão você usaria outra coisa (React etc.).

O que muda tudo ao criar site com IA: **você deixa de depender de alguém para editar**. Trocar copy, duplicar a página em 15 versões para testar, mudar a cor de um botão em 58 páginas de uma vez, aplicar as correções que uma auditoria de SEO apontou — tudo isso passa a ser um pedido em linguagem natural.

**Quatro ideias sustentam o módulo:**

- **Repertório é tudo.** Carta branca de design = mediocridade. Skills de design ajudam a *polir* dentro de um design system existente, mas **redesign de verdade nasce de uma referência bonita** que você escolheu, extraiu e mandou implementar. Cuidado: nem todo site bonito converte — site de branding premiado ≠ landing page de alta conversão.
- **Fale "Greenfield" e peça as perguntas.** Dizer que é um projeto do zero (*greenfield*) e pedir *"me faça todas as perguntas necessárias"* impede a IA de supor — e supor é como ela foge do que você queria.
- **Templates-first é o que impede a IA de reinventar a roda.** A partir da segunda página, a IA esquece o que combinou na primeira. A solução: uma página `/templates` com os componentes prontos + um `AGENTS.md` com a **regra de ouro — edite sempre o template, nunca a página**. Melhorou o botão no template? Melhorou nas 58 páginas.
- **Hardcoded é a regra, prop é a exceção.** Transformar tudo em propriedade configurável faz cada página ficar com uma cara diferente. Deixe fixo por padrão; vire prop só o que realmente muda (link de destino, preço, título).

# Índice de aulas (links oficiais)

| # | Aula | Link |
|---|---|---|
| 01a | O que vamos aprender | https://curso.ibe.ia.br/l/sitescomia-fpn-01a-intro |
| 01b | Clonando Site (extração + primeira página em Astro) | https://curso.ibe.ia.br/l/sitescomia-fpn-01b-clonandosite |
| 01c | Melhorando Design (skills de design) | https://curso.ibe.ia.br/l/sitescomia-fpn-01c-melhorandodesign |
| 01d | Criando novo Design System | https://curso.ibe.ia.br/l/sitescomia-fpn-01d-novodesignsystem |
| 01e | Ajustando Hero (vídeo animado no scroll) | https://curso.ibe.ia.br/l/sitescomia-fpn-01e-ajustandohero |
| 01f | Mais ajustes e melhorias (imagens, componentes, SVG) | https://curso.ibe.ia.br/l/sitescomia-fpn-01f-maisajustesemelhorias |
| 01g | AGENTS.md para instruções e componentes (templates-first) | https://curso.ibe.ia.br/l/sitescomia-fpn-01g-agentesmd |
| 01h | Formulários (interatividade, validação, integração) | https://curso.ibe.ia.br/l/sitescomia-fpn-01h-formularios |
| 01i | Publicando Site (GitHub → Cloudflare Pages) | https://curso.ibe.ia.br/l/sitescomia-fpn-01i-publicando |
| 01j | Conclusão e próximos passos | https://curso.ibe.ia.br/l/sitescomia-fpn-01j-conclusao1 |

# Fase 0 — IDE, pasta e a extração da base (aula `01b`)

**Meta:** IDE aberta numa pasta do projeto, com a base de referência já dentro dela.

1. **Se você está recriando uma página que existe:** abra a página no Chrome e use a extensão **Extrator de Design System** (grátis, feita pelo Instituto — está **nos recursos da aula `01b`**; instale de lá). Clique em **Extrair Design System** → baixa um `.zip` (leitura mecânica do código-fonte, não usa IA).
2. **Instale a IDE + a IA:** VS Code (grátis) + extensão da sua IA — o tutorial passo a passo está **nos recursos da aula `01b`**. Cursor, Antigravity, Codex e OpenCode também servem; **não muda nada** no resultado.
3. **Crie uma pasta nova** para o projeto e **abra no editor** (vai estar vazia — normal).
4. **Mova o `.zip` para a pasta**, extraia ali e **renomeie a pasta extraída** para algo óbvio (`base-<referencia>`). Pode apagar o `.zip`.
5. **Se você não tem referência nenhuma:** pule a extração — na Fase 1 você descreve o negócio em vez de apontar a pasta.

**Inputs a pedir:** recriando ou do zero? URL da referência; qual IA de código; sistema operacional.
**Entrega da fase:** IDE aberta na pasta, com a pasta `base-<referencia>` dentro (ou a decisão de ir do zero).
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01b-clonandosite

# Fase 1 — Primeira página em Astro (aula `01b`)

**Meta:** a página rodando em `localhost`, fiel à base (ou já a v1 do seu site do zero).

1. **Prompt (recriando uma referência):** *"Esse é um projeto **Greenfield**. Quero recriar o site `<qual>`. Futuramente vamos fazer um design muito melhor; **por enquanto, recrie como ele é hoje**. Vamos usar o framework **Astro**. Já fiz uma extração completa do site — está na pasta `<caminho da pasta base>`. **Me faça quaisquer perguntas necessárias.**"* (Copie o caminho com botão direito → Copiar caminho.)
2. **Prompt (do zero):** *"Esse é um projeto **Greenfield** para criar um site do zero usando o framework **Astro**. O objetivo é `<o que o site precisa comunicar/vender>`. **Me faça todas as perguntas que precisar.**"* Anexe o que tiver (PDF, apresentação, identidade visual).
3. **Responda a entrevista.** Ela costuma perguntar: **escopo** (só a home ou páginas internas?), **assets** (baixar imagens/ícones para servir localmente — **recomendado** — ou puxar do site original?), **fidelidade** (recriação limpa e componentizada vs. clone pixel-perfect), widgets de terceiros, **mobile** (sempre sim — custa nada).
4. **Ver no navegador:** terminal da IDE → `npm install` (**uma vez só**) → `npm run dev` (sempre que quiser ver) → abra a URL `localhost:<porta>`. ⚠️ `Ctrl+C` nesse terminal **encerra** o servidor.
5. **Compare lado a lado** com a referência. Diferenças pequenas de fundo/tamanho de fonte são normais nesta etapa — o redesign vem depois.

**Inputs a pedir:** escopo de páginas; assets locais ou remotos; nível de fidelidade; mobile.
**Entrega da fase:** página abrindo em `localhost`, praticamente idêntica à base (ou primeira versão do site novo).
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01b-clonandosite

# Fase 2 — [opcional] Polimento com skills de design (aula `01c`)

**Meta:** entender o que skills de design fazem — e o que elas **não** fazem.

1. **O que é skill:** um arquivo de texto com a "receita de bolo" (verifique contraste, comprimento de linha, não combine fontes parecidas, espaçamento…). É isso — nada mágico.
2. **As quatro do curso** estão **nos recursos da aula `01c`**: Impeccable, Taste, Frontend Design (já vem com o Claude Code) e UI UX Pro Max. **Instale pedindo à IA** e passando a URL: *"Instale a skill de design `<nome>`: `<URL>`"*. Chame com `/` na sua IA.
3. **[experimento do curso]** Rode **vários agentes em paralelo**, cada um com uma skill (e um sem nenhuma), **cada um criando sua própria cópia da página**, e compare para eleger um campeão. Peça à IA: *"me dê os prompts, um por sessão, para rodar isso em paralelo"*.
4. **O veredito honesto:** com carta branca ("só melhora"), as skills fazem melhorias **pontuais** e **não saem do design system atual** — no teste da aula, a Frontend Design foi a melhor. Elas brilham quando **você já tem um design system bom** e quer embelezar (blur, sublinhado, hover 3D, ícones). Para trocar a cara do site, é a Fase 3.
5. Se você **já tem experiência em design**, esse caminho fica mais poderoso: você consegue apontar o que está errado ("troca isso por um bento grid", "essas fotos não têm salvação").

**Inputs a pedir:** quer testar as skills? tem repertório de design para julgar?
**Entrega da fase:** clareza sobre polir (skills) × redesenhar (design system) — e, se testou, uma versão polida.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01c-melhorandodesign

# Fase 3 — Design system novo (aula `01d`)

**Meta:** o site vestido com uma identidade visual profissional que **você** escolheu.

1. **Cace a referência (trabalho seu).** Fontes citadas na aula: **awwwards** (explorar por categoria), Google ("melhores sites para SaaS/videogame/…"), **Landing Pages Explained**, **Landing Folio**. ⚠️ **Filtro de eficácia:** muito site premiado é **branding**, não conversão — não adianta pegar um monstro de animações e aplicar numa landing de venda.
2. **Extraia a referência** com a mesma extensão (**recursos da aula `01b`/`01d`**) → `.zip` → extraia na pasta do projeto → renomeie (`inspiracao-<nome>`).
3. **Entenda a diferença:** na Fase 1 você **reproduziu um site**. Design system é outra coisa — é o **sistema** (paleta, tipografia, componentes, sombras, espaçamentos, o *signature motion*) que permite montar qualquer página nova puxando peça pronta, sem a IA inventar do zero.
4. **Gere o design system** — duas rotas, escolha **uma**:
   - **Claude Design** (`claude.ai/design` → **Design Systems** → criar): nome da empresa + **anexe a pasta inteira** da referência (esse campo é o segredo — sem referência não sai nada bom) + notas ("queremos extrair o design system de `<url>` para usar no site de `<negócio>`"). Leva ~5 min. Depois **Compartilhar → exportar `.zip`** → extraia dentro do repositório.
   - **Sem Claude Design:** *"Quero criar um design system do zero usando como referência a pasta `<caminho>` (do site `<url>`). Crie o design system."*
5. **Implemente:** nova sessão → *"Quero criar o design system do nosso novo site. Use a pasta `<caminho>` como base. **Implemente isso como design system padrão do repositório** e **recrie nossa home** seguindo esse design system."*
6. **Aceite que ainda vai ter arestas** (hero, cards). O esqueleto + conteúdo + design system estão prontos; o polimento é das próximas fases.

**Inputs a pedir:** URL da referência escolhida; tem Claude Design?; a referência é adequada ao objetivo (conversão × branding)?
**Entrega da fase:** home recriada no novo design system, visivelmente melhor.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01d-novodesignsystem

# Fase 4 — Hero com vídeo que anima na rolagem (aula `01e`)

**Meta:** uma primeira dobra que impressiona — vídeo avançando **frame a frame** conforme o scroll.

1. **Como funciona:** a IA quebra o vídeo em centenas de frames (no exemplo da aula, 289 imagens) e troca o frame conforme você rola. Parece complexo; é um pedido.
2. **Pré-requisito: ter um vídeo curto.** Como fazer, se você não tem:
   - Gere no **ChatGPT/Gemini** uma **imagem inicial** e uma **imagem final** (a narrativa do "antes → depois" do seu negócio; no exemplo do curso: nota de 1 dólar → mansão com carros de luxo; num case de construtora: planta → fundação → reboco → casa pronta).
   - Leve as duas ao **Gemini** (ou Magnific/Higgsfield) e peça o **vídeo de transição**: *"faça um vídeo transformando `<imagem inicial>` em `<imagem final>`; transição suave, elegante, cheia de detalhes — vamos mostrar frame a frame no site"*.
   - ⚠️ **Curto: ~4 segundos.** Vídeo de 20s = frames demais.
3. **Implemente:** nova sessão → *"Quero implementar um fundo animado na Hero. Pegue o vídeo `<caminho>`, **quebre em frames** e faça um efeito de **CSS scrolling** bem bonito."*
4. **Ajuste com print da referência:** *"1) veja a imagem em anexo — quero um cabeçalho igual a esse no lugar do atual (assim o vídeo sobe e começa no topo); 2) as informações que ficam na frente do vídeo são `<liste>` e os botões `<liste>`, com fundo tipo **vidro/glass** como na outra imagem, para o vídeo continuar visível; 3) remova `<elementos que não fazem mais sentido>`."*
5. Repare: a IA costuma **corrigir contraste de texto sozinha** no caminho. Ainda assim, itere até o hero "morrer" (não ter mais nada a fazer).

**Inputs a pedir:** tem vídeo? qual a narrativa antes→depois? quais textos/botões ficam sobre o vídeo?
**Entrega da fase:** hero com vídeo animando na rolagem, textos legíveis em cima.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01e-ajustandohero

# Fase 5 — Ajustes finos, imagens e componentes prontos (aula `01f`)

**Meta:** o corpo da página no mesmo nível do hero.

1. **Troque imagens feias por imagens geradas.** Mande a foto original ao ChatGPT e peça a recriação (*"crie uma imagem 3:4 com `<descrição>`; tire o texto do topo"*). ⚠️ **Mesmo aspect ratio em todas** (ex.: todas 3:4) — senão os cards ficam assimétricos. Salve na raiz com nomes óbvios (`ref-1`, `ref-2`…).
2. **Peça a troca citando os arquivos:** *"Quero melhorar a seção dos quatro cards — essas imagens estão feias. Troque a imagem de cada card por `<@ref-1>`…`<@ref-4>` e use elas para recriar os cards. Enviei um print de `<referência>` como inspiração."* (No Claude Code, `@` cita arquivos direto.)
3. **Componentes prontos da internet** — o atalho mais forte do módulo: **21st.dev** e **magicui.design** (Browse Components) têm marquee, bento grid, listas animadas, fundos interativos, terminal, confete… Cada componente tem um **copiar** (ou "abrir como Markdown"): copie **o texto todo** e cole no prompt — *"quero trocar `<esse elemento>` por um componente bonito que encontrei. Instale esse componente: `<cole aqui>`. Use como `<o que ele deve representar>`."* Astro insere isso e **mantém o site leve**.
4. **Copy é livre agora:** *"traduza a página toda para português"*; ou *"crie uma **duplicata** desta página mantendo o design system, mas com copy **emocional, em storytelling**"* — e teste qual converte.
5. **Ilustrações próprias com SVG:** *"crie um SVG animado de `<o que>`"*. A primeira versão nunca sai boa — itere ("aumenta esse texto", "alterna as cores"). É como as ilustrações animadas do site do Instituto foram feitas.
6. **Corrija por print:** *"você colocou fundo preto; está errado, deveria ser transparente"* — e **diga o motivo** sempre que possível.
7. **[contexto útil]** Estrutura do Astro: tudo em `src/` (componentes `.astro`); na compilação ele gera `dist/` com o HTML final, **comprimindo imagens pesadas** automaticamente.

**Inputs a pedir:** quais seções incomodam; quais imagens trocar; quer testar variação de copy?
**Entrega da fase:** página inteira coerente, com imagens próprias e ao menos um componente rico.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01f-maisajustesemelhorias

# Fase 6 — Templates-first com AGENTS.md (aula `01g`)

**Meta:** blindar o projeto para que a **segunda** (e a centésima) página saia certa de primeira.

> Só pule esta fase se você **realmente** vai ter uma única página para sempre — o que é exceção.

1. **Crie o arquivo de instruções** (cobrindo qualquer IA): *"Crie um arquivo de instruções na raiz **`AGENTS.md`** com as instruções abaixo. Crie **também** um `CLAUDE.md` com **uma única linha** dizendo para a IA ler o `AGENTS.md`."* Assim Codex, Antigravity e Claude Code todos leem a mesma regra.
2. **As instruções (o coração):**
   - Este repositório é **templates-first**: **nunca** modificamos design direto nas páginas. As páginas são montadas **exclusivamente** com componentes prontos que ficam em **`/templates`**.
   - Crie já a página **`/templates`** com os componentes que existem na home (catálogo: top banner, header, hero, seções, FAQ, footer + primitivos do design system — botões, badge, cards, eyebrow).
   - **Processo obrigatório** para toda página nova: verifique se os templates necessários existem → se faltar, **me entreviste**, crie o template, **peça minha revisão** → só depois de eu aprovar, monte a página com os templates.
   - Seja redundante à vontade — repetir a regra em outras palavras ajuda.
3. **Teste na prática:** peça uma página nova mandando a **URL original + um print** e listando as seções ("cabeçalho com título, menu lateral de aulas, vídeo central, formulário à direita, rodapé"). Ela deve **ler o `AGENTS.md`**, reaproveitar header/footer, criar só o que falta, pedir sua revisão e então montar.
4. **Sinta o ganho:** peça a **segunda** página do mesmo tipo. Sai de primeira, sem ajustes. E *"altere a cor do botão `<X>` para amarelo — no template"* muda em **todas** as páginas de uma vez.
5. **Props × hardcoded:** *hardcoded* = fixo no template (estrutura, estilo); *prop* = o que a página passa (título, lista, link de destino, preço, variante de cor). **A regra é hardcoded; a exceção é prop** — senão cada página vira uma cara diferente. Virar prop depois é fácil: *"transforme a cor em prop"*.

**Inputs a pedir:** vai ter mais de uma página? quais tipos de página? qual IA (para saber se cria `CLAUDE.md` também)?
**Entrega da fase:** `AGENTS.md` + `CLAUDE.md` na raiz, página `/templates` com o catálogo, e uma 2ª página montada só com templates.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01g-agentesmd

# Fase 7 — Formulários que dão vontade de preencher (aula `01h`)

**Meta:** formulário interativo, validado, com celebração no envio e ligado ao seu sistema.

1. **Interatividade no preenchimento:** *"à medida que a pessoa digita o nome, cite esse nome numa frase curta abaixo do campo. Ex.: se digitou 'André', mostre '**André** está pronto para `<sua promessa>`'. Atualize **a cada caractere**, sempre com o nome em negrito. Crie ~10 frases que tenham a ver com `<sua oferta>` e alterne entre elas."* ⚠️ **Dê exemplos no prompt** — sem exemplo, a IA adivinha.
2. **Validações que valem:** e-mail **corporativo** (bloquear Gmail/Hotmail/Outlook e cia., com mensagem de erro em vermelho); **telefone** com máscara e limite (11 caracteres no formato Brasil; para outros países, a validação do país); **seletor de país com bandeira e busca** (DDI puro é chato).
3. **Celebração no envio** com **animação Lottie** (grátis em `lottiefiles.com` — leve e pronta): baixe o arquivo na raiz e peça *"coloque uma celebração ao enviar; use o arquivo `<@arquivo.json>`"*.
4. **Mande os ajustes em lote** e teste tudo. Se ao enviar a página **recarregar e resetar**, diga isso — é o ajuste mais comum aqui.
5. **Integre com o mundo real** (o site ser estático não impede): Active Campaign, Brevo, HubSpot, WhatsApp (recuperação de carrinho), n8n, ou um banco de eventos próprio. O padrão de ouro é registrar **cada etapa** (abriu o form, digitou, passo 1, passo 2) — aí você vê onde perde gente. E dá para **redirecionar destinos diferentes por página**.
6. **A promessa da aula:** o que você quiser integrar, **pergunte à IA** ("consigo integrar com `<serviço>` para alimentar automaticamente quando alguém preencher?") — a resposta é praticamente sempre sim.

**Inputs a pedir:** quais campos; qual promessa para as frases dinâmicas; e-mail corporativo obrigatório?; qual serviço integrar; para onde redirecionar.
**Entrega da fase:** formulário interativo validado, com celebração e integração definida.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01h-formularios

# Fase 8 — Publicando (aula `01i`)

**Meta:** site no ar, de graça, com deploy automático a cada alteração.

1. **Por que Cloudflare Pages:** deploy automático, CDN em centenas de cidades (inclusive São Paulo), SSL e cache automáticos. **Free:** até 100 sites, **500 deploys/mês** (~16/dia), banda e requisições ilimitadas, 100 domínios por projeto, até 20.000 arquivos, 25 MB por arquivo.
2. **Passo 1 — GitHub:** conta gratuita → na IDE, ícone de **controle de código-fonte** → **Publicar no GitHub** → **repositório privado** (⚠️ **sempre privado**; público o mundo inteiro lê) → autentique se pedir.
3. **Passo 2 — Cloudflare:** conta gratuita → **Compute → Workers e Pages → Create application**.
   - ⚠️ **Pegadinha:** a tela quer criar um **Worker**. Você quer **Pages** — o botão fica **pequeno, mais abaixo** ("comece por aqui" / Get started).
   - **Importar um repositório do Git** (não subir arquivos) → conecte a conta → selecione o repo.
   - Nome do projeto: mantenha. **Branch de produção:** confira. **Framework preset: Astro.** → **Save and Deploy** (leva ~20 s).
4. **Deu erro no build?** Clique em **Copy log**, cole na sua IA: *"deu esse erro ao publicar, resolva: `<log>`"*. Causas típicas: imagem referenciada que foi deletada, dependência não declarada, ou branch `main` × `master`.
5. **O ciclo do dia a dia:** mexa à vontade no `localhost` (a versão pública não é afetada). Para publicar: **commit + push** — pela aba de código-fonte (**Confirmar e sincronizar**, com mensagem gerada pela IA) ou pedindo *"commit e push"*. O push chega no GitHub e a Cloudflare **republica sozinha**. Se o site no ar não mudou, é porque falta push (a "nuvenzinha" no VS Code mostra o que já subiu).
6. **[opcional] Domínio próprio:** projeto → **Custom Domains** → Set up a custom domain → domínio ou subdomínio → siga as instruções.
7. **[dica]** No Claude Code, `/remote-control` deixa você continuar a mesma sessão pelo celular — é onde pedir "commit e push" por chat faz mais sentido.

**Inputs a pedir:** já tem GitHub/Cloudflare? nome do repo; domínio próprio?
**Entrega da fase:** URL pública no ar (`<projeto>.pages.dev` ou seu domínio) com deploy automático funcionando.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01i-publicando

# Fase 9 — Próximos passos (aula `01j`)

**Meta:** usar o fato de o site ser feito com IA para melhorá-lo continuamente.

1. **Auditoria de SEO completa:** a IA integra com o **Google Search Console**, lista o que está e o que **não** está indexado, aponta título longo, descrição faltando, imagem ausente — e, porque foi ela que construiu o site, você diz *"ok, faça tudo"* e ela **corrige**. Reaudite dias depois para conferir o que pegou. (No WordPress, só a auditoria; a correção é manual.)
2. **Auditoria de performance e velocidade** (via Lighthouse): ela aponta o componente que está custando segundos, a imagem pesada — e aplica a correção.
3. **Mesma metodologia serve para mais:** blog com artigos automáticos, carrosséis de Instagram, criativos, integrações de tráfego.

**Inputs a pedir:** rodar auditoria agora? qual domínio.
**Entrega da fase:** primeira auditoria de SEO/performance feita e correções aplicadas.
➡️ **Travou?** https://curso.ibe.ia.br/l/sitescomia-fpn-01j-conclusao1

# Método reutilizável (inline, condensado)

- **"Greenfield" + "me faça todas as perguntas necessárias".** Vale para todo projeto novo.
- **Referência antes de estética.** Extraia → gere design system → implemente. E escolha referência **eficaz**, não só bonita.
- **Print + o motivo.** "Ao lado ficou feio" ensina a IA mais do que uma ordem seca.
- **Templates-first + regra de ouro:** edite o template, nunca a página. `AGENTS.md` (+ `CLAUDE.md` de uma linha) governa tudo.
- **Hardcoded é a regra; prop é a exceção.**
- **Dê exemplos concretos** quando pedir comportamento ("se digitou André, mostre…").
- **Erro? Copie o log inteiro e cole na IA.**
- **Componente pronto > componente inventado:** 21st.dev / magicui.design, copia e cola no prompt.
- **Publicar é commit + push.** O resto a Cloudflare faz.

# Se travar aqui (atritos reais citados nas aulas)

- **Não acho onde criar o Pages na Cloudflare:** a tela empurra "Worker"; o botão de **Pages** é o pequeno, mais abaixo, em Create application. (`01i`)
- **Build falhou:** **Copy log** → colar na IA. Imagem deletada mas referenciada, dependência não declarada, etc. (`01i`)
- **Erro de branch `main` × `master`:** copie a mensagem e cole na IA — resolve em um passo. (`01i`)
- **Publiquei e o site no ar não mudou:** falta **commit + push**; o `localhost` é só seu. (`01i`)
- **A IA não abriu o `localhost` sozinha:** abra o terminal e rode `npm install` (uma vez) e `npm run dev`. (`01b`)
- **A segunda página saiu diferente da primeira:** você ainda não fez a Fase 6 (templates-first). (`01g`)
- **Cada página ficou com uma cara:** props demais. Volte para hardcoded como padrão. (`01g`)
- **As skills de design "não fizeram nada demais":** com carta branca elas só polem dentro do design system atual. Para mudar a cara, Fase 3. (`01c`)
- **Bandeirinhas do seletor de país não carregam (Windows):** é conhecido; peça a correção — a IA resolve. (`01h`)
- **Formulário recarrega a página e reseta ao enviar:** relate exatamente isso; é o bug mais comum da fase. (`01h`)
- **Design "de IA", genérico:** falta referência. Nada de carta branca. (`01c`, `01d`)

# Guarda-fidelidade (para você, IA)

- Use **somente** os passos deste guia e das aulas do *Índice de aulas*. Não invente tela, botão, menu ou aula.
- **Não cole artefatos que moram na aula:** a extensão Extrator de Design System e as skills de design (`01b`, `01c`) o aluno pega nos recursos das aulas; componentes de terceiros ele copia do site do componente.
- O exemplo do curso é o site do **Alex Hormozi (`acquisition.com`)**. **Nunca** assuma que é o projeto do aluno — pergunte qual é a referência/negócio dele.
- Astro é para **sites e landing pages**. Se o aluno descrever um app/sistema de gestão, avise que a stack seria outra.
- Reforce o **HITL**: uma etapa por vez, confirmar no `localhost` antes de seguir. E as duas armadilhas silenciosas: **templates-first antes da 2ª página** e **commit + push** para o ar mudar.

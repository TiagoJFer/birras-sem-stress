Se você pegar só uma página aqui,
e sair tentando replicar as outras,
então, por exemplo, vamos aqui no site mesmo do Ormose,
tem a página Books, que já tem outro layout,
tem a página Podcast Request, outro layout,
você vai vendo que cada página vai usando os seus próprios componentes,
aqui já é um componente de curso, onde tem um menu,
é feio esse site, Jesus amado.
Então, aqui tem uma barra com um índice, um vídeo aqui no meio,
e um formulário aqui do lado direito.
Cada página possui os seus próprios componentes.
A gente foi encarando essa dificuldade um bom tempo atrás,
e qual foi a solução que a gente encontrou
para a gente conseguir fazer uma criação dos componentes uma vez só e reutilizando?
A gente entendeu que toda vez que você for fazer algo que não seja uma página única,
se você tiver mais de uma página, você precisa fazer isso aqui.
Olha no nosso site do Instituto, tá?
Deixa eu botar em página cheia aqui.
A gente tem uma página aqui chamada Section Templates,
ou seja, Templates de Sessão.
Isso aqui é público, você pode acessar, não tem problema nenhum.
Dark Mode, Light Mode, aqui você vai ver direitinho como é que funciona.
Então, aqui eu tenho todos os padrões que a gente utiliza, tá?
Por exemplo, os cabeçalhos, os botões.
Isso aqui, tipo, cada botão desse deu trabalho para a gente fazer.
Olha esse botão que fica aqui atrás, saindo uns ícones.
Esse outro que tem um efeito de shimmer para chamar muita atenção.
Dark Mode você vê mais ainda como ele chama atenção, né?
Cada um desses botões deu trabalho para fazer.
Aí você vai lá, cria uma página nova e ele inventa um botão do zero.
Meu Deus do céu.
Então, por isso que a gente criou essa página, Section Templates.
Todos os componentes aqui são reutilizáveis.
Cada seção dessa é uma seção reutilizável, tá vendo?
Aqui tem absolutamente tudo.
Cara, são muitas, porque a gente tem mais 60 páginas.
Acho que são 58 páginas, se eu não me engano.
Olha o tanto de coisa que tem aqui, ó.
Pega a página de precificação aqui, por exemplo, tá vendo?
Então, para não deixar a IA ficar sempre reinventando a roda,
a gente deixou tudo isso aqui prontinho
e ele só modifica um ou outro componente, entendeu?
Por exemplo, aqui, ó, tem produtos nossos que tem 7 dias de garantia,
tem outros que tem 15 dias de garantia.
Então, ele só modifica esse componente do número aqui.
Então, você pode ver que o nosso site,
ele é sempre construído a partir dos mesmos componentes.
Então, se você vier aqui, ó.
Vou abrir a formação em Vibecode,
formação agentes IA e formação IA para negócios, ó.
Todos eles são construídos com os mesmos componentes
e sempre ficam muito bonitos.
A gente só vai adaptando o conteúdo específico de cada página.
Se você for no nosso documento padrão,
já vou te mostrar como criar isso para o teu próprio repositório, tá?
Se você for no nosso documento padrão de instruções internas,
aqui, ó, você vai ver que a gente tem uma regra de ouro.
A IA sempre sabe disso quando vai mexer no nosso repositório.
A regra de ouro é, edite sempre o template e nunca a página.
Então, ó, esse repositório é um repositório template first.
Ou seja, sempre que a gente for melhorar alguma coisa,
a gente modifica o template, o componente.
As páginas, a gente não mexe direto na página.
Porque aí se eu vou lá e melhoro um componente,
se eu deixo um botão mais bonito,
esse botão mais bonito vai ser refletido nas minhas 58 páginas, entendeu?
Agora as 58 páginas ficaram mais bonitas.
Dessa forma, a gente garante
que a gente consiga sempre manter
os componentes padronizados em todas as páginas
e que se a gente vai lá e muda uma identidade visual,
muda um pequeno elemento, por exemplo,
eu não preciso ir lá e refazer a mesma alteração 50 e outra vez diferente.
Eu faço uma só, entendeu?
Então eu quero mostrar para vocês como fazer isso na prática.
Olha só.
Vamos abrir a nossa IA.
Então, eu vou falar o seguinte, ó.
Crie um arquivo de instruções na raiz.
Aqui, galera, já é uma pequena observação.
Aqui é a primeira vez que vai variar um pouco
em relação a IA que você está usando, tá?
Então se você estiver usando o Claude Code,
você vai pedir para ele criar o arquivo Claude.md.
O que é esse arquivo?
Esse é um arquivo de texto que fica na raiz
com instruções globais.
E aí toda vez que você iniciar uma nova sessão no Claude Code,
ele vai ler esse arquivo Claude.md.
Se você não estiver no Claude Code,
provavelmente vai ser um agents.md
que você tem que criar, tá?
De qualquer forma,
crie o agents.md que ele é meio global.
Todo mundo lê ele.
Então não tem problema nenhum.
Na dúvida, faz assim, ó.
Crie um arquivo de instruções na raiz agents.md
com as instruções abaixo.
Aqui eu já vou colocar as nossas instruções, tá?
Mas logo abaixo eu já vou dizer o seguinte.
Crie também um Claude.md
com uma só linha.
dizendo pra IA ler o arquivo agents.md.
Se você fizer isso,
você já cobre todos os cenários possíveis, entendeu?
Porque você vai criar um arquivo agents.md.
MD é markdown, tá?
Um arquivo de texto.
Igual aquele que eu te mostrei agora.
Você já cria um arquivo aqui que
a grande maioria das IAs vão ler.
Na grande maioria das IDEs, o codex vai ler e tudo.
E aqui você cria esse como um backup.
Porque caso o Claude code não leia ele por padrão,
ele vai ler esse Claude.md
e o Claude.md vai falar.
Leia o agents.md, entendeu?
Então aí você cobre tudo.
Manda sim que não tem problema.
Agora, quais são essas instruções, ó?
Crie um arquivo de instruções na raiz agents.md
com as instruções abaixo.
Esse repositório, a partir de agora,
passa a ser um repositório templates first.
Ou seja,
a gente não modifica
o design direto nas páginas.
As páginas sempre usam componentes prontos
que teremos em barra templates.
Vou criar uma página barra templates.
Aproveite e já crie a página barra templates
com os componentes prontos
que já fizemos na home.
A partir de agora, então,
sempre que a gente for criar uma nova página,
essa nova página deverá ser criada
exclusivamente com templates prontos
que já existem em barra templates.
não existir templates ainda
para o que queremos fazer.
Então, você deverá
primeiro criar o template
para depois aplicar o template
à página nova.
Por exemplo,
vou dar bem um exemplo do curso aqui.
Por exemplo, se eu quiser criar uma página de curso
que tenha três componentes,
menu de aulas,
vídeo da aula e formulário de aplicação,
você vai perceber que não temos esses componentes prontos ainda.
Pode ser meio redundante,
meio prolixo mesmo com a IA,
não tem problema, tá?
Pode explicar mais de uma vez a mesma coisa,
tranquilo,
faz um download do teu cérebro.
Eu faço isso o tempo todo.
Você vai perceber que não temos esses componentes prontos ainda.
Então, você me entrevista
para tirar qualquer dúvida,
cria esses componentes,
pede minha revisão manual,
e assim que eu aprovar,
aí sim você cria a página usando esses componentes.
Esse será o processo daqui para frente.
Sempre que eu te mandar criar uma nova página,
você verifica se temos os componentes prontos para isso,
cria os componentes que ainda não temos,
monta a página.
Alguma dúvida?
Show.
O que eu mandei aqui, na verdade,
duas coisas diferentes, né?
Falei para ele sobre como criar o arquivo Agents.md,
e falei também já sobre qual que vai ser
o funcionamento do nosso repositório daqui para frente.
Só lembrando,
talvez alguns de vocês
estejam aqui para criar uma única página mesmo.
Tipo, ah, Renata, é só isso que eu quero.
Aí você não precisa fazer nada disso, entendeu?
Aí está tudo bem.
Se realmente você não pretende criar uma segunda página.
Mas eu acho que isso deve ser
mais a exceção do que a regra, né?
A grande maioria de vocês,
sempre mais de uma página você vai criar.
Nem que seja para criar uma variação dessa página,
qualquer coisa assim.
Então, por isso que isso aqui eu acho que é uma prática muito boa,
muito sólida, muito saudável.
O que foi feito?
Agents.md,
define o repositório.
Vamos ver aqui, ó, como é que ficou.
Agents.md, ó.
Pode até botar um direito aqui,
abrir visualização,
para abrir de uma forma mais bonita.
Open preview,
se você tiver em inglês aí na tua ideia.
Este é o arquivo de instruções mestre do repositório.
Qualquer IA que trabalha aqui,
deve ler e seguir este arquivo.
E aí, só para te explicar, ó.
Toda vez que você abre uma sessão nova aqui,
a primeira coisa que ele vai fazer
é ler o arquivo Agents e o Claude, entendeu?
Por isso que,
este arquivo você tem que tomar muito cuidado
e cuidar dele com muito amor, assim.
Porque é a instrução que você está passando
para toda a sessão nova da tua IA, tá?
Mas, enfim, isso é papo para um outro momento.
Agents.md é sites hermosos.
Este é o arquivo de instruções.
A partir de agora, neste repositório, é templates first.
Nunca modificamos o design direto nas páginas.
As páginas são montadas exclusivamente a partir de componentes prontos.
Ele já começou a falar onde é que estão esses componentes.
O nosso design system que ele trouxe.
Então, ó.
Sempre que for pedido para criar uma página nova,
verifique se já existem os templates necessários.
Se faltar algum template, entreviste,
crie o template, adicione o template, peça a revisão.
E só depois de aprovado, monte a página usando os templates.
O que uma página pode conter, ó.
Ele já está entrando em mais detalhes aqui, beleza.
Aí ele me pediu para dar uma olhada na página barra templates.
Está aqui a página barra templates, ó.
Catálogo de templates.
Aqui tem, ó.
O top banner, tá vendo?
Top banner é aquele negocinho que estava lá em cima.
Header.
Aqui realmente está hero, ó.
Isso aqui ele chamou de training.
Isso aqui ele chamou de courses.
Tá vendo?
É uma sessão.
Isso aqui ele chamou de fac.
Que é frequently asked questions, né.
Perguntas feitas com frequência.
Isso aqui ele chamou de sessão founders.
Isso aqui ele chamou de sessão roadmap.
Isso aqui ele chamou de sessão footer.
E aqui os primitivos do design system.
Ou seja, aqueles componentes que a gente criou lá no sistema de design.
Os botões.
O badge.
Os cards.
Eyebrow, que é o rótulo de sessão.
Deve ter alguma coisa aqui atrás.
Enfim.
Então aqui ele começou a criar os templates.
Agora a gente já pode, na prática...
Testar isso, tá.
Então vou abrir uma nova sessão.
E vou pedir para ele o seguinte, ó.
Vou pegar essa página aqui.
Que é a página do...
Nem lembro que página que é essa.
Deixa eu ver.
Scaling course.
Recri a página.
Vou mandar o URL original para ele.
E vou mandar até um print aqui para ele entender a dinâmica.
Sempre que você puder ajudar ele, ajude ele.
Ou seja, explica para a IA o que tem nessa página.
Óbvio que assim ela consegue entender também.
Mas pensa que quanto mais você instruir ela, maior a chance dela acertar o que você quer.
Entendeu?
Então, eu sempre falo para o pessoal.
Cuida para não ser muito preguiçoso nesse sentido de tipo...
Joga tudo para a IA.
Ajuda a dar um tranquinho na IA, assim, só para dar um direcionamento inicial, né?
Então recria a página tal.
Essa página é a página para onde vamos quando clicamos no curso.
Vamos dizer que seja quando a pessoa clica no livro 100 milhões money models da Home.
Ah, não.
Na real, do money models é essa aqui, né?
Então eu mudo a URL aqui, ó.
Recria a página tal.
Esta página é a página para onde vamos quando clicamos no curso 100 milhões money models da Home.
Aí ele vai ser redirecionado.
A página contém...
Vamos descrever por cima aqui o que precisa ter, ó.
Um, cabeçalho com o título do curso.
Dois, menu lateral do lado esquerdo com as aulas.
Três, vídeo central com o vídeo.
Quatro, formulário de aplicação do lado direito.
Cinco, rodapé embaixo.
Né, o rodapé aqui, ó.
Uma observação.
Eu não quero...
Aqui ele tem vários vídeos, assim.
Eu não...
Acho besteira a gente perder tempo recriando isso aqui, né?
Então eu vou fazer só o introdutório mesmo.
Só essa primeira aula.
P.S.
Estou dando uma aula sobre criação de sites.
Então não precisamos recriar todas as aulas e vídeos.
Exemplifique somente com a Home.
Com vídeo introdutório.
Que vai ser o vídeo context.
A aula.
Context aqui, não.
Bom.
Mais alguma informação que eu preciso dar pra ele?
Não.
Só isso.
Você vê que aqui eu já não vou falar nada.
Ah, siga o template.
Pô, esperamos que ele já leia aquele documento e entenda.
Vamos ver, ó.
Ó, vou primeiro entender o projeto lendo o Agents.md explorando a estrutura.
Como manda o Claude.md do projeto.
Aí ele já tá lendo o arquivo.
Show.
Isso aí.
Se ele leu, a gente já sabe que ele vai saber quais instruções seguir.
O repositório é templates first.
A página só compõe templates existentes.
Se faltar algum tempo, eu tenho que entrevistar você.
Blá, blá, blá.
Já tem o contexto necessário.
O que já existe, reaproveito.
O cabeçalho e o rodapé.
E o footer, né?
O que falta pra página?
Cabeçalho com títulos do curso.
Menu lateral de aulas.
Player de vídeo central.
Formulário de aplicação.
Exatamente o que a gente imaginava.
Antes de criar os templates, fecha três pontos comigo.
Aí ele vai me fazer várias perguntas aqui.
O que você não entender?
Ah, tá muito técnico.
Fala, cara, tá muito técnico.
Me explica direito.
Ele vai te explicar novamente numa linguagem mais tranquila.
Ou vai seguir nas recomendações técnicas dele.
Então, basicamente, aqui o que ele tá me falando é.
Cara, você quer criar um template único pra tudo isso aqui, ó?
Ou você quer que isso vire um template?
Isso vire um template?
E isso vire um template?
Não sei dizer.
Muito caso a caso, né?
Então, um, eu vou dar ok.
Sempre que eu falo ok, ele entende que é porque eu estou aceitando a recomendação dele.
Conteúdo menu de aulas.
Como não temos as aulas reais, propõe uma lista temática ilustrativa.
Ok.
E três, sem o vídeo real.
Use um player placeholder.
Ou seja, um vídeo fake assim, né?
Ok.
Não precisa puxar o vídeo real.
Até porque eu não quero ter problemas autorais com o senhor Hermosa.
Abra templates e revise o classroom.
Se aprovar, eu monto a página.
Ele tá seguindo exatamente o que a gente pediu, né?
E aí, aqui tá.
Aqui estavam as sessões anteriores.
Aqui está a sessão classroom que ele mandou.
Já vi que tá errado aqui, não.
O sem money models deveria estar acima do contexto.
Não ao lado.
Ao lado ficou feio.
Sabe uma coisa que eu aprendi sobre IA?
Eu não fazia isso antes.
Quando eu comecei a fazer, minhas respostas melhoraram.
Sempre explica o motivo pra IA.
Isso ajuda muito, especialmente as IAs inteligentes, a saberem o que fazer, tá?
Explica o porquê que você tá tomando algumas decisões.
Só que há um ano atrás eu não escreveria isso.
Ao lado ficou feio.
Agora eu escrevo.
Porque isso ajuda ela a entender o meu racional.
Esse menu ficou um quadrilhão de vezes melhor do que o do Hermosa, né?
Aí aqui tá o vídeo que ele botou um placeholder aqui.
Não vai funcionar?
Aqui tem um...
Tinha um botão aqui?
Não, esse botão não existe, hein?
O botão é só aqui no ir para o passo 2, ó.
Remova o botão.
Vou pegar esse...
Texto aqui, receber meu roteiro, 3 pontinhos.
Ele vai entender.
Isso não existe no original.
Feito isso...
Tá aprovado.
Ele ajeitou, 100 milhões de money models.
Com texto.
Tirou o botão.
Fechou.
Agora você pode testar manualmente clicando.
Ah, então ele já criou a página.
Já criou a página.
Show.
Vamos voltar lá pra home.
E aí eu vou clicar no 100 milhões de money models.
Ai, vem pra cá, galera.
E aí...
O grande motivo pelo qual a gente tá fazendo tudo isso.
Percebe que, pô...
Deu uma leve dor de cabeça.
Põe leve nisso, né?
Construí isso aqui, ó.
A gente teve que fazer ajustes.
Tira o botão.
Pensa que você teria que fazer isso toda santa vez.
Pra cada um dos vídeos.
Agora que a gente tem um template...
Olha só a brincadeira, ó.
Agora cria a página...
Curso leads, ó.
Agora cria a página tal.
Que é a página...
100 milhões leads.
É isso mesmo.
Ah, vou mandar o print, né?
Sacanagem também.
Esqueci do print.
Esse é o print da página original.
Aí ele começa, ó.
O template classroom já cobre páginas de curso.
Essa é a ideia do templates first.
Não falta nada.
Então monto...
Reutilizando as posições.
Já que não temos as aulas reais.
Curso 100 milhões leads.
Primeira aula ativa.
Muito bom.
Vocês não sabem a tranquilidade que isso aqui vai te dar no teu dia a dia.
Pronto.
Página training leads montada.
Então só clicar nos 100 milhões leads.
E vamos para a nossa página.
Exatamente o que a gente buscava, né?
Deixa eu ver se ele citou aqui também, ó.
Aqui tá a página de leads.
E aqui tá a página do...
Qual que foi o primeiro que a gente fez?
O Money Models.
É isso aí.
Money Models e leads, galera.
Muito bom.
E aí aqui, ó.
Mais um dos benefícios de você ter templates.
Olha só.
Vamos dizer que a gente chegou ao consenso que, cara.
Esse botão tem que ser amarelo.
Era amarelo aqui o Dormose, né?
Então eu venho aqui.
Altere a cor do botão.
Ir para o passo 2 para amarelo.
Para chamar mais atenção.
Altere no template.
Eu falei altere no template só pra ser meio redundante.
Mas assim, em tese, já é pra ele saber que é pra alterar isso no template, tá?
E aí ele trocou.
Lembrando, estamos na página leads aqui, né?
Se eu for pra página...
Money Models também está trocado, galera.
Ó, tô na Money Models agora, tá vendo?
Também está trocado.
Você faz a modificação em um lugar, só lá no template original.
Vamos lá no template original, né?
Aqui, ó.
Você modifica o template e todas as páginas vão ser alteradas por consequência.
Existe um último detalhe aqui que eu quero citar com vocês, tá?
Então, o que a gente fez?
Criamos o barra templates e instruímos Claude.md e agents.md sobre nossa metodologia templates first, tá?
Isso a gente já fez.
Recriamos.
Páginas e funcionou.
Beleza.
O que eu gostaria que você entendesse aqui agora?
Existe um conceito que são os props, tá?
Props são propriedades.
O que são props?
Propriedades que podem ser alteradas a nível de página.
Então, olha só.
Vamos ver se ele já fez isso.
Como você lidou com os textos que mudam?
Por exemplo, os nomes das aulas.
Se você usou templates.
Porque, pensa comigo.
Embora a gente tenha um template aqui, isso aqui mudou.
Os nomes das aulas mudaram.
O vídeo vai mudar.
Então, tem várias coisas que vão mudar, mesmo usando o mesmo template.
Então, todo template, ele carrega duas coisas.
Ele carrega um conjunto de propriedades estáticas.
O nome disso é hardcoded, tá?
Hardcoded significa, assim, tá batido em pedra.
Inscrito em pedra, entendeu?
Nada vai alterar aquilo.
Hardcoded versus props.
Hardcoded é o que está...
Pô, como é que eu vou escrever isso?
Encravado.
Em inglês é tão evidente.
Em português.
Hardcoded em português.
Vamos ver.
Codificado?
É terminho ruim, né?
É o que está gravado permanentemente...
No template.
Não vai alterar...
Nas páginas que usam o template, tá?
Então, pô, a gente deixou hardcoded a cor amarela no botão, por exemplo.
Está gravado.
Não vai mudar.
Proopção.
O que muda a cada página.
Então, aqui, ó.
Boa pergunta.
É exatamente o ponto do templates first.
A estrutura e o estilo ficam fixos no template.
Qual que é a tradução de hardcoded?
É fixo, né?
O texto que muda entra por props, ó.
As propriedades que a página passa ao componente.
Nada de conteúdo é hardcoded dentro do template.
Entendeu?
Ele já sabe isso.
O template, é claro, que pode variar.
Então, ó.
Cara, isso aqui é legal, ó.
Você vê como você não precisa ser programador para entender as coisas?
Olha só.
A gente meteu aqui, ó.
O template do Classroom.
Só que aí ele passou aqui, ó.
Três props.
Três propriedades.
Eyebrow.
Cem milhões money models.
Que é o textinho que vai lá em cima.
O título.
Contexto.
As lições.
Aqui vai uma lista, ó.
Lista exemplo padrão aqui que ele botou.
Está vendo?
Então, é isso.
Tem a parte hardcoded.
Tem a parte das props.
Se você for de novo lá no ebay, ó.
Nos nossos templates.
Eu já...
Na própria página de templates.
Eu já pedi para ele deixar claro, ó.
O que são as props aqui de cada template.
Por exemplo, aqui, ó.
É...
CTA URL.
É uma prop.
Que é o quê?
É a URL de destino quando a pessoa toca nesse botão, entendeu?
O texto do CTA.
Ou seja, o que vai dentro do botão é um prop.
O número de dias é um CTA.
É um prop.
Que são sete dias.
Posso alterar aqui quando eu passo.
E a variante, que é a cor de fundo aqui, né?
No caso, está esmeralda e tal.
Então, assim.
Aí, um desse aqui, por exemplo, ó.
Certificar de participação.
Aí, já tem mais props, está vendo?
Eyebrow.
Que é isso aqui.
Então, o que é o ideal na minha experiência, tá?
É você se lembrar de usar o mínimo possível de props.
Eu já cometi o erro de, tipo, ah, transforma tudo em prop.
Aí, sabe o que acontece?
Cada página fica com uma cara diferente.
Cada página fica com uma cor de botão diferente.
Faça o contrário.
Deve até escrever isso.
Isso é importante.
Faça o seguinte.
A regra é o hardcoded.
Entendeu?
A regra é o fixo.
A exceção é o prop.
Ou seja, o prop é só o que realmente você sabe que vai ter que mudar cada página.
É o link de destino.
É o valor do teu produto.
Por aí vai.
A maioria, na dúvida, deixa hardcoded.
Até porque isso é muito fácil de mudar depois.
Você vai lá e fala.
Cara, transforme a cor em prop.
Por quê?
Porque eu quero que uma página tenha a tonalidade, o botão roxo.
A outra página tenha o botão verde.
A outra página tenha o botão amarelo.
Entendeu?
Se eu quisesse fazer isso aqui por algum motivo nessa página, eu quero botão amarelo.
Na outra verde, na outra roxa.
Aí a cor do botão tem que ser uma prop.
Sacou?
E com isso nós encerramos a parte dos templates de sessão.
Nos vemos na próxima aula.
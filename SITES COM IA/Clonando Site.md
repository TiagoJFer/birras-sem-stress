Agora a gente começa a colocar a mão na massa.
A página que eu quero construir com vocês,
essa é uma página que eu acho que muitos de vocês vão conhecer,
que é o do Alex Ormosi.
Esse cara é um extremamente popular no mundo do marketing digital,
um cara que faz lançamentos de mais de 100 milhões de dólares, assim.
Eu gosto muito do case dele, porque o site dele é muito feio, né?
Ele é aqueles caras bem...
No marketing digital americano, assim,
via de regra, ele já tem uma estética muito ruim, né?
Tudo que você vê nisso brasileiro dá um banho no americano.
Essas páginas americanas são coisa de 15 anos atrás, assim.
Então esse aqui é um cara aí que faturou mais de 250 milhões de dólares já,
em receita anual, e tá com esse site que a gente vai agora redesenhar do zero, tá?
Então qual que é o primeiro passo de tudo?
Qual a primeira coisa que você precisa fazer?
Supondo que você está reconstruindo uma página, né?
É a seguinte, você vai extrair a página e o design system atual.
Vamos pegar tudo que já tem e vamos tomar isso como nosso.
Mas Renato, como é que eu faço isso?
Dou um Ctrl A, seleciono tudo, Ctrl C e colo.
Eu dou um salvar como?
Tem mil formas de você fazer isso, né?
Mas assim, a forma mais eficaz de todas é você usar uma extensão do navegador que a gente criou.
E é realmente a forma mais eficaz.
É 100% gratuita, assim.
Então eu vou deixar aqui embaixo as instruções de como que você baixa essa extensão aí no teu Chrome, tá?
As extensões do Chrome são compatíveis com todos os navegadores também.
E aí você abre a página que você quer clonar e você dá um extrair design system.
Aqui, ó.
Cliquei.
Instantâneo, assim, né?
Ele aqui que ele pegou, ó.
409 elementos, 261 grupos de estilo, 87 referências.
Criou um zip aqui com um monte de coisa.
Então a primeira coisa que eu vou fazer é baixar esse arquivo zip aqui, ó.
Que eu vou baixar, ó.
Aquisition.com.
Deixei na minha pasta de downloads aqui, ó.
Show de bola.
Fechou.
Já tenho, então, a página do design system atual com a nossa extensão própria aqui.
Tem várias outras extensões disso na Web Store ali do Chrome, né?
Que você consegue baixar e tal.
Mas assim, pô, algumas são muito fracas, outras são pagas.
Aí você consegue fazer duas extrações por mês.
Então a gente preferiu criar a nossa, liberar de graça.
Use a bus.
Agora o próximo passo é começar aí realmente pra nossa IA.
Então vamos instalar uma IDE.
O que é uma IDE?
IDE, pessoal, é um sistema.
Um ambiente de desenvolvimento, que é onde a gente vai criar tudo.
Exemplos de IDEs que você pode instalar.
VS Code, Cursor, Google Antigravity.
Tem o próprio codex da OpenAI.
O próprio Claude Code, ele funciona também quando você abre no terminal.
Tem infinitas.
Hoje você pode usar literalmente qualquer uma delas.
Não adianta chegar nesse ponto e falar,
Ah, Renato, usou tal.
Aí eu só tenho a Y aqui, eu não vou conseguir.
Galera, com literalmente qualquer uma, você vai conseguir fazer.
Até as chinesas, a Quen, vai conseguir fazer.
Não tem problema nenhum, tá?
Qual que eu vou usar?
A minha stack, por assim dizer, é o VS Code com a extensão do Claude Code.
É assim que eu gosto de usar.
Então assim, eu não vou botar muito tempo nisso,
porque eu acho que mais da maioria de vocês já deve ter uma ideia instalada,
já começou a criar sites, já tem essa stack aí de vocês.
E eu vou deixar um, prefiro deixar um link aqui embaixo,
com um tutorial passo a passo para você conseguir instalar.
Caso você queira essa mesma stack que a minha aqui,
que é o VS Code com o Claude Code, vou deixar um tutorial.
É lá eu te ensino a baixar o VS Code,
que é a ideia mais popular do mundo hoje,
que é essa aqui da própria Microsoft, né?
Tudo de graça e tal.
E como instalar a extensão do Claude Code, etc.
Então aqui eu vou abrir a nossa IDE.
Tá aqui, ó.
Visual Studio Code, ele tem essa carinha aqui
que muitos de vocês já viram, muitos de vocês já usam, né?
Aqui não tá aberto nada, né?
Tanto é que ele me dá um bem-vindo aqui,
abrir pasta, é assim que começa.
Então a gente vai em abrir pasta.
Vou até colocar para o lado aqui, ó.
E aqui eu boto a nossa página.
Pronto.
Fechou.
Então instalar a IDE.
Abrir uma nova pasta.
Na IDE.
Aqui eu vou dar um abrir pasta.
Ele vai me jogar aqui num monte de projeto que eu tenho.
Aí eu vou criar uma pasta nova aqui, gente.
Chamada sites or mose, tá?
Ó, tô criando do zero agora essa pasta realmente.
Como vocês podem ver, tem literalmente nada dentro.
Vou dar um selecionar pasta.
Agora a IDE, ela abre essa pasta.
Ó, você pode ver que não tem absolutamente nada aqui.
Ela abre para a gente já começar a trabalhar em cima dessa pasta.
É aqui que a gente vai fazer tudo, tá?
A IDE, você pode ver que ela tem a pasta que os arquivos vão sendo populados do lado esquerdo.
E aqui do lado direito tem a IA que a gente vai usar.
O VS Code, por padrão, ele já abre no chat aqui que é o...
É o GitHub Copilot que ele chama assim, né?
Não é o que eu uso aqui.
O que eu uso é o Claude Code, que está instalado aqui por meio de uma extensão.
Novamente, como eu falei, tá tudo no tutorial aqui de baixo.
Então, você pode acessar lá para fazer a instalação, tá?
Mas, basicamente, eu fui aqui em Extensões do VS Code.
Procurei por Claude Code e instalei essa primeira aqui, ó.
Só isso.
Tem o Codex instalado aqui.
Eu tenho todas, né?
Eu sou um maluco por isso.
Então, abri a pasta, selecionei o Claude Code e agora eu consigo começar a trabalhar.
Com essa pasta pronta, eu quero mover a nossa extração de página para a pasta em que vamos trabalhar.
Ou seja, eu vou pegar aquele arquivo aqui do site do Ormose, que eu peguei, ó, que é um zip, né?
Um arquivo zipado é um arquivo comprimido.
Copiei.
Fui lá na minha pasta do Ormose, colei e aí eu vou extrair todo o conteúdo desse arquivo zip aqui para a minha pasta, tá?
Usei a própria ferramenta de extração do Windows aqui mesmo, ó.
Extrair.
Você vai ver que ele criou uma pasta aqui.
Já posso até deletar esse arquivo zip, ó.
Porque ele criou uma pasta aqui.
Vou renomear essa pasta para base-ormose, tá?
Só para a gente lembrar.
E aqui estão todos os arquivos que a gente extraiu lá.
Você pode, inclusive, ver que aqui no VS Code, ó, já apareceu base-ormose, ó.
Ele já está com essa pasta aberta aqui.
Então agora a gente vai pedir para ele recriar.
Ah, mas Renato, eu já quero recriar mais bonito.
Fica tranquilo, a gente vai ter muito tempo para deixar ele mais bonito, tá?
Recria como ele está, depois a gente vai periquitando ele.
Recria do zero site que você extraiu usando o framework Astro.
Deixa eu explicar para vocês, galera.
A gente aqui está falando de código, né?
Por mais que a grande maioria de nós não somos programadores, estamos criando código.
A IA está criando esse código para nós.
Existem muitas formas diferentes de você criar um site.
Todo site, ele é um arquivo HTML, tá?
HTML é essa extensão Hypertext Markup Language, que é esse formato de arquivo aqui que, basicamente, tudo que está na internet é um arquivo do tipo HTML.
Agora, existem frameworks já prontos para você criar esses sites, para você criar essas páginas HTML.
Você pode pedir para a IA vir diretamente e já criar um arquivo HTML.
Mas não é uma boa prática.
Via de regra, as melhores práticas são você usar alguns frameworks gratuitos que tem no mercado, extremamente populares,
porque eles têm muitos benefícios em relação a criar uma página diretamente HTML, CSS, assim, tal.
Então, até perguntei para o chat GPT aqui para você ver que não sou eu falando.
Quais são minhas opções para gerar páginas HTML?
Quais frameworks posso usar?
Você pode ver que já é logo a primeira recomendação que ele me dá.
Astro.
Se o objetivo é gerar sites institucionais, landing pages, blogs e páginas extremamente rápidas,
esse aqui, galera, não é um framework para você criar aplicativos.
Ah, eu vou criar o sistema de gestão da minha empresa.
Aí você não vai usar Astro.
Você vai usar React, vai usar outras aí.
Astro é um framework, uma biblioteca que você usa para criar sites estáticos.
Por quê?
Porque ele tem HTML estático por padrão.
O que significa isso?
Que ele já entrega lá para o navegador do teu usuário o HTML prontinho, limpinho, bonitinho,
e gera, por consequência, essas duas grandes vantagens.
Um SEO muito bom.
SEO, caso você não saiba, significa Search Engine Optimization, né?
Que é basicamente o quão bem o Google consegue te encontrar.
E hoje em dia não só o Google, né?
O chat GPT, o Claude, enfim.
O quão bem qualquer IA consegue te encontrar.
Quando você entrega esse HTML todo bonitinho para o navegador do usuário,
isso é muito atraente para as ferramentas de busca.
Então o Google vai te encontrar muito bem.
As ferramentas de IA vão te encontrar muito bem.
Então te ajuda a ser bem indexado.
E todo mundo que está criando o site, via de regra, quer ser bem indexado pelo Google, né?
E também é muito rápido.
É uma tela de carregamento assim, instantânea.
Você vai ver quando a gente criar que ele vai carregar em menos de um segundo.
É bizarro.
A performance que esse astro te entrega.
E pode usar um monte de outros recursos.
Tem uma integração excelente.
Deploy, que é publicação aqui, muito fácil.
Então, enfim, ele até te explica mais a fundo.
Ele te dá outras opções aqui que você pode usar, mas...
Bom, se você está aqui é porque você quer aprender comigo.
Eu já usei todas essas.
E para a landing page, a que eu tenho a melhor experiência é astro.
Não é à toa que ela é a mais popular do mundo para esse objetivo, tá?
Então, você vai pedir para a IA recriar do zero o site que você extraiu usando o framework astro.
Como é que a gente vai fazer isso?
Vamos aqui na tua IA.
E aqui, como eu disse, pessoal, vocês podem usar o codex da OpenAI, por exemplo, que tem até plano gratuito.
Vocês podem usar o Google Antigravity, que também consegue usar no plano gratuito.
Então, literalmente para qualquer IA que tenha essa formatação de ideia aqui.
Aí você vai chegar aqui e vai pedir.
Esse é um projeto Greenfield.
Oh, Renato, você só me vem com um termo técnico.
Galera, meu trabalho aqui é explicar, desmistificar esses termos técnicos, né?
Então, quando você fala que é Greenfield, é uma nomenclatura que a gente usa para dizer para a IA que é um projeto feito do zero.
Em inglês seria Campos Verdes.
Então, tipo, pô, é chegar numa terra assim que não tem ninguém.
É aquele campo todo verde, entendeu?
O oposto desse seria um Brownfield.
Que aí é o campo marrom, assim.
É como se já tivesse passado o gado por lá, já tivesse comido pasto.
Não sei, não tenho fazenda, né?
Mas, enfim.
Então, quando você fala que é Greenfield, aí ela já entende.
Ah, é um projeto que eu estou começando do zero.
Então, você já ajuda ela a entender melhor.
Esse é um projeto Greenfield.
Aqui, eu quero recriar o site do Alex Ormose.
E futuramente, vamos fazer um design monstruoso de tão bom.
Por enquanto, vamos só recriar como já é hoje.
Tá?
Vamos usar o framework Astro para isso.
Se você não falar qual que é o framework, ele vai te perguntar, muito provavelmente, tá?
Eu já prefiro falar que vai ser o Astro.
E eu já fiz uma extração completa do site dele.
Está na pasta.
Aí, eu vou pegar a pasta base Ormose, que eu coloquei aqui, ó.
Botão direito, copiar caminho, tá vendo?
E colo aqui, ó.
E, aqui, quem já me conhece sabe que eu adoro fazer isso aqui, né?
Me faça quaisquer perguntas necessárias.
Galera, que em etapas de planejamento, lembre-se de sempre pedir para a Yá te fazer as perguntas necessárias.
Senão, ela vai começar a supor um monte de coisa.
E, quando ela supõe um monte de coisa, você está dando a ela a liberdade de fugir completamente do que você queria.
Então, pô, o que você não sabe, me perguntem.
Já explorei a extração.
Contexto que entendi.
É a homepage do acquisition.com, empresa do Ormose, uma página só, tema claro com navy, roxo, vermelho, etc.
Tem as seções tal, dependências externas, escopo de páginas.
O que você quer, Renato?
Você quer só a homepage ou você quer a homepage e páginas internas?
Por enquanto, eu vou fazer só a home, tá?
Então, eu vou responder, ó.
Um A.
Assets, imagens, ícones.
Como você quer tratar?
Baixar tudo para public e servir localmente?
Recomendo.
Ou entrega direto lá do site deles?
Localmente.
Ou seja, eu vou abaixar e a gente vai fornecer essas imagens.
Eu não vou ficar puxando lá do site do Ormose, né?
Três.
Fidelidade.
O que é recriar hoje?
Criação fiel e limpa, HTML, CSS semântico, próprio no visual idêntico, componentizado em ácido.
Ou clone pixel perfect?
Não, não.
Pode ver que a minha IA já está instruída a sempre me dar a recomendação dela, né?
Te sugiro fazer o mesmo, inclusive.
Falar qual é a sua recomendação.
Ele sempre me fala qual é a melhor recomendação dele.
Widget, iClosed, agendamento.
Precisa disso?
Não.
Possividade.
Recrio mobile?
Sim, para mobile também.
Custa nada.
É tão fácil para ela fazer isso.
Minha stack sugerida astro puro, mais CSS.
Pererê, pererê, pererê.
Enquanto ele cria aqui, só uma observação, né?
Ah, Renato, mas...
E se eu não tenho um site ainda?
Se quero realmente criar do absoluto zero?
Aí, galera, vocês fazem a mesma coisa, só que na hora da instrução, você explica que você quer criar do zero.
Tipo assim, ó.
Esse é um projeto Greenfield para criarmos um site do zero usando o framework astro.
vai ser o melhor site já feito na história da humanidade.
E o objetivo é...
Aí você explica o que você quer aqui.
É, por exemplo, mostrar a minha construtora que fica em Florianópolis.
Ou então é mostrar os trabalhos que já fiz com base nas informações da empresa que estou te mandando em anexo, por exemplo.
Porque lá no Pronto você consegue anexar o que você tem de PDF.
Enfim, essa é a hora de você explicar o que você quer.
O mais importante de tudo isso aqui que a gente está fazendo é esse cara aqui, ó.
É o framework astro.
É ele que está dando a base para tudo que a gente vai fazer daqui para frente, entendeu?
E aí ele finalizou.
Diz, pronto, a home do acquisition.com está recriada em astro.
Fiel original, verificada em desktop mobile.
O que foi entregue?
Astro estático puro, com design tokens, as sessões, os assets, que são as imagens, as fontes.
Responsivo, interatividade validada, etc e tal.
E aí ele fala assim, ó, abra tal, tal, tal e já dê uma olhada.
Sempre que ele fala de localhost é o quê?
Ele já montou um servidor no teu computador para você pré-visualizar como é que vai ficar.
Então você não precisa ir lá e publicar o site na internet para ver como é que ficou.
Ele já abriu aqui.
Só que assim, eu sei que essa é uma configuração muito de iá para iá, né?
Pode ser que no teu ele não tenha feito isso ainda.
Então qual que é o segredo aqui?
Volta lá para os...
Vocês veem que eu estou muitas vezes aumentando a tela do Claude Code aqui, né?
Se você fizer isso aumenta e diminui e tal.
Então vocês vão ver, muitas vezes eu aumentando e diminuindo, porque eu estou sempre tentando
deixar a tela o maior possível para quem assiste do celular, né?
Mas aí algumas vezes eu vou voltando para cá que precisa.
Porque aqui, ó, eu vou abrir o terminal.
Então no teu, se você estiver no VS Code, a maioria das ferramentas são muito parecidas,
vai ter o terminal aqui em cima, ó.
Terminal.
Você vai mandar um novo terminal.
Tá?
Aí nesse terminal que vai aparecer aqui, ó, você vai escrever dois comandos.
Primeiro, npm install, que é para ele instalar qualquer dependência que tenha.
Tipo assim, ah, eu estou usando o próprio framework Astro.
Ele vai usando um monte de coisa, um monte de pacote pronto da internet.
Então aqui ele instala todos, tá?
Então, ó, para testar, você vai mandar um npm install.
install.
Isso você só precisa fazer uma vez, o npm install, tá?
Só uma vez.
Mas aí toda vez que você quiser ver o servidor, você vai mandar esse código aqui, ó.
npm run dev, tá?
npm run dev.
Porque aí ele vai abrir o servidor.
No nosso caso já estava um aberto, mas tudo bem, eu abro outro aqui, não tem problema nenhum.
Aí ele te dá uma URL, ó.
Essa URL, você pode ir lá no seu navegador.
Local host, tararã.
Opa, fui dar um ctrl c para copiar, eu acabei fechando aqui, ó.
Então vamos pegar essa URL e aí eu vou aqui no nosso navegador, abrir ela, ó.
E tá aqui, galera.
Esse é o site.
Vamos só comparar lado a lado.
Ó, dá para ver pela URL aqui, né?
Então esse é o da... do Hermose mesmo, esse é o nosso.
Pequenas diferenças, né?
Tipo, aqui tem um fundo cinzinha, no nosso tá branco.
Parece que a fonte dele talvez esteja um pouquinho maior aqui, mas, cara, no geral...
Aqui o FAQ nosso tá aberto.
Sobre os nossos fundadores, idêntico.
Cara, tá praticamente idêntico, tá?
Ótimo.
Então recriamos com sucesso a página do Acquisition.
Vou até fechar o deles aqui.
Essa aqui é a nossa.
Está navegável?
A gente tinha pedido para ele criar só uma página, né?
Então se eu navegar para cá, não encontrado.
Eu não pedi para ele criar essa cacetada de página aqui.
Embora a gente vá falar sobre isso, sobre como criar mais páginas.
Porque dificilmente é uma só, você vai querer criar 5, 10.
A gente aqui tem mais de 60 páginas, mas a gente vai falar sobre isso ainda.
Então, galera, aqui a gente termina a nossa primeira missão.
Extrair o Design System e criar a primeira página igual a que a gente quis começar a trabalhar, né?
No nosso caso foi a do Hermose.
No teu caso vai ser igual a tua.
Ou, como a gente falou antes aqui, se você não tem uma que você queira copiar e você queira começar do absoluto zero, criar o seu primeiro site,
você seguiu a mesma metodologia, só que ao invés de você mandar uma referência, como a gente fez, você vai explicar.
Ah, cara, eu sou tal coisa.
E manda aquela que eu te falei.
Me faça todas as perguntas que você precisa para criar um site muito massa.
Aí ele vai te perguntando, tá, o que você quer mostrar no seu site?
Seus produtos físicos ou seus serviços?
Ah, os meus serviços.
Do que você presta serviço?
Entendeu?
Ele vai te perguntando e vai montando para você.
Então, de qualquer forma, a gente encerra essa aula aqui com a nossa primeira página pronta.
Nos vemos na próxima aula.
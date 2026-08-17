E como é que a gente publica o site?
Eita, essa é a parte gostosa.
Porque a publicação, acredite ou não,
ela é 100% gratuita em serviços extremamente robustos.
Existem mil formas diferentes de você publicar um site,
mil serviços diferentes, eu vou mostrar pra vocês
o que eu considero o mais prático, tá?
Criei um site com framework e astro,
onde você me sugere publicar.
Cloudflare Pages, minha principal recomendação.
A minha também.
Atilify, Vercel, GitHub Pages, Render, Fly.io.
Ele vai te dar várias sugestões.
Galera, isso aqui é uma delícia.
Não tem por que você não fazer no Cloudflare Pages.
Você ganha deploy automático, CDN em centenas de cidades.
Então, teu site vai estar hospedado em São Paulo,
não em Washington.
Então, você entrega mais rápido pros teus usuários.
Certificado de segurança automático, compressão,
cache domínio, um monte de coisa, galera.
Qual que é o passo a passo?
Ou melhor, antes do passo a passo, pré-requisitos.
Você vai precisar de uma conta gratuita no GitHub e uma conta gratuita no Cloudflare, tá?
Ah, mas Renato, como é que eu faço uma conta gratuita?
Você vai em github.com e faz a tua conta.
Aí você vai em Cloudflare.com e faz a tua conta.
Tem nenhum segredo.
Agora vamos para o passo a passo.
Então, o primeiro passo é subir o seu repositório para o GitHub.
GitHub, galera, é um hubzão com todos os códigos do mundo.
Todo mundo que tem qualquer tipo de código publica no GitHub.
E o que você criou foi um site.
Não, você criou o código, né?
O que o código faz é um site.
Então, no final das contas, tudo que a gente fez foi pra isso aqui, ó.
Foi pra ter essas pastas todas aqui, ó.
Todos esses arquivos.
Foi isso.
Foi isso que a gente foi criando, certo?
Esse é o teu repositório.
Como é que você sobe isso pro GitHub?
Você vai vir aqui nesse iconezinho do VS Code.
Dependendo da IA que você estiver usando, da IDE que você estiver usando, talvez mude um pouquinho.
Se não souber, é como só perguntar.
Você vai vir aqui.
E você vai achar algum iconezinho como esse aqui, ó.
Publicar em GitHub, tá vendo?
Clica lá.
Aí ele vai te perguntar.
Você quer publicar num repositório público ou repositório privado?
Pelo santo, amor de Deus.
Privado.
Público é assim, ó.
O mundo inteiro vai ver.
Tá público.
Como são os repositórios de código aberto públicos, entendeu?
Mas cuida, porque às vezes, pô, tem informação ali que você não quer, que as pessoas vejam.
Então, na dúvida, é sempre privado, galera.
Sempre.
Publicar num repositório privado.
Pode ser que ele te peça pra autenticar com o GitHub antes disso, tá?
Que o meu já estava autenticando.
Pode ser que ele te peça.
Ah, faz login com teu GitHub aí.
Só fazer.
Publicar num repositório privado do GitHub.
Estamos publicando.
O repositório foi publicado com êxito.
Abrir no GitHub, ó.
Já vou lá.
Aí ele já abriu, ó.
GitHub.com barra Renato Asse, que é meu nome de usuário no GitHub, barra Sites Transformoses,
que é o nome do nosso repositório.
Já está tudo aqui, galera, ó.
Tudo aqui, tudo aqui, tudo aqui, ó.
Todos os arquivos que a gente tinha, ó.
SRC, páginas.
Tem as páginas que a gente criou lá no começo.
Tem o índice, tem a página templates.
Tá tudo aqui.
Training, que é o curso lá, né?
Tá tudo aqui, galera.
Então a gente já tem no GitHub o nosso repositório.
Aí você vai criar um Cloudflare Pages lá no Cloudflare.
Então aqui no menu do Cloudflare, você vai aqui em Compute, ó.
Workers e Pages, tá?
Ó.
Cloudflare.
Compute, Workers e Pages.
Aí você vai em Criar Aplicação, Create Application.
Aqui é uma pegadinha.
Você tem que clicar nesse botão aqui embaixo, que está meio escondidinho, ó.
Porque eu não quero criar uma aplicação, né?
Eu quero criar um Pages.
Aí fica pequenininho aqui, ó.
Querendo dar um Deploying Pages, começa por aqui, ó.
É estranho isso, mas enfim, é assim.
Aí você vai cair aqui, ó.
Nas páginas, tá?
O que você quer fazer?
Você quer subir os seus arquivos ou você quer importar um repositório do Git?
Importar um repositório do Git, né, galera?
Importar repositório Git.
Aí ele já te pergunta qual repositório.
Aqui ele já está conectado com a minha conta.
Se não tivesse, dá um Edge Account.
Ah, conecte aqui com o seu GitHub.
Aquele esquema de sempre que você já conhece.
Vai conectar, vai aparecer aqui, ó.
Aí ele te pergunta qual é o repositório que você quer.
Sites or Moz.
Tá na mão.
Selecionei.
Nome do projeto?
Sites or Moz.
Branch de produção?
Master.
Eu já vi que às vezes acontece de, dependendo qual é a IDE que você está usando,
um erro bem técnica e bobo, assim, mas às vezes a IA acaba criando uma branch.
O que é a branch?
É como se fosse uma versão do repositório.
Acaba criando com o nome Main, que é principal, ao invés de Master.
Aí acaba dando uma confusão, assim.
Caso aconteça isso contigo, dependendo da IA aí, você explica isso pra IA e fala, ó.
O Cloudflare me apresentou um erro aqui, falou que é Main, não sei o que, deveria ser Master.
Ele vai mostrar a mensagem de erro.
Copia e cola a mensagem de erro na tua IA, que a IA resolve.
Qual o framework?
Opa, aqui é importante, galera.
Framework preset.
Qual é o framework preset?
Qual é?
Qual é?
Astro, galera.
Popular, né?
Todos esses frameworks são os mais populares aqui, ó.
Astro.
Só isso, galera.
Save and deploy.
Deployando o site.
Clonando.
Construindo.
Levou 18 segundos.
Muito bom.
Ó.
Às vezes acontece de dar algum errinho aqui.
Assim, ah, sei lá.
O site referenciou uma imagem.
Aí você deletou a imagem.
Aí ele vai dar um erro no build.
Ali naquela tela vai aparecer um erro.
E aí tem um botãozinho assim, copy, log.
Deixa eu ver se eu consigo reproduzir pra vocês aqui, ó.
Aí tem esse botão, copy, log.
Se deu erro aqui no build, vai aparecer um xzinho, tudo.
Vai ter bem cara de erro, sim.
Aí você dá um copy, log.
Ele vai copiar todo esse texto aqui, ó.
Com o log do erro.
Aí você vai pra tua IA e fala, cara, deu esse erro.
Resolva, por favor.
E ele vai resolver.
Então ele já deu deploy e tudo aqui.
Aí o que ele me diz, ó.
Que o meu site já está disponível em sites-hormose.pages.dev.
Aí, galera.
Qualquer pessoa que acessar sites-hormose.pages.dev agora, acessa o nosso site aqui, ó.
E aí se você quiser colocar num domínio customizado, você vem aqui em Custom Domains.
Setup a Custom Domain.
Aí você fala, ah, eu quero colocar em hormoseclone.com.br.
Ou, não, em hormoseclone.ib.abr.
Que aí você pode colocar num subdomínio, por exemplo, entendeu?
Aí você dá um continue aqui, ele vai te dar as instruções pra isso.
E aí uma última observação que eu queria fazer pra você aqui é o seguinte, ó.
Configurações.
Você vai ver que aqui tem, ó.
No controle de Branch.
Essa opção aqui, ó.
Permitir Deploys Automáticos, tá?
Tá ativado.
O que eu quero dizer com isso?
Toda vez que você subir uma nova versão do teu código lá pro GitHub, automaticamente ele vai dar um novo deploy.
Ou seja, ele vai republicar tudo de novo.
Quer ver, ó.
Vamos fazer uma alteração aqui.
Vamos transformar esse botão em verde aqui, ó.
Estou pronto para escalar, tá?
Então eu vou vir aqui e vou falar.
Na Home, troque a cor do botão Estou pronto para escalar.
De preto para verde, ó.
No Local Host, que é o quê?
É o nosso ambiente local, nosso computador ficou verde.
No site, está preto ainda, tá vendo?
Vou atualizar de novo aqui, ó.
Continua preto.
No nosso site, tá verde.
Beleza.
Então isso é o código local que está no seu computador.
Então qual que é a boa prática, né, galera?
Vocês podem fazer absolutamente tudo o que vocês quiserem no teu computador.
Que eles chamam de Local Host.
Pode ir testando coisa, tira coisa, põe coisa, brinca.
Pode fazer o que você quiser.
Porque a versão pública não vai ser afetada.
Quando você estiver pronto para fazer o deploy, para publicar a nova versão, o que você faz?
Isso depende agora de IDE, tá?
Se você está fazendo o mesmo que eu aqui no VS Code, você faz o quê?
Você pode...
Ah, só para você ver aqui, ó.
É um pouquinho complexo, assim, isso aqui é um pouquinho intimidante.
Mas isso aqui você vai se familiarizar com o tempo, tá?
O que ele está dizendo aqui, ó.
Cada alteração que eu fiz no meu site virou um commit, ele chama, né?
Você pode ver que onde está a nuvenzinha, ó.
É a nuvem significa que é o que está na nuvem.
É a versão que está publicada.
Então, essa é a versão que está publicada.
Aí tem uma nova alteração aqui que não está publicada.
Porque ela está à frente da nuvem, tá vendo?
O que é o botão?
O botão estou pronto para escalar em verde.
Então, já é uma nova alteração.
Mas que eu não enviei para a nuvem ainda.
Então, como é que você envia isso para a nuvem?
Você tem que fazer um push.
Push é de empurrar em inglês, tá?
Eu empurro lá para o GitHub.
E aí, quando bater lá no GitHub, ele já vai...
O Cloudflare vai reconhecer e vai automaticamente publicar de novo.
Várias formas de fazer isso.
Eu posso vir aqui, ó.
Gero uma mensagem, por exemplo, alterei a cor do botão.
Escrevo a mensagem, né?
Posso gerar essa mensagem com o IA.
O VS Code faz isso, ó.
Gerar a mensagem do commit.
Ele pensa um pouquinho porque ele vai entender o que é a alteração
para poder gerar a melhor mensagem possível.
E aí, eu venho aqui, ó.
E boto, geralmente, um confirmar e sincronizar.
Que ele faz o quê?
Ele puxa tudo que está lá na nuvem
para ver se está atualizado com o meu
e empurra o que tem aqui.
Então, ele sincroniza as duas versões.
O que está no computador e o que está na nuvem.
Ou eu posso pedir para a própria IA.
Commit e push.
Commit significa a gente pegar as alterações que a gente fez
e transformar numa versão aqui pronta para enviar.
E push é para empurrar lá para o GitHub.
Posso pedir assim, ó.
Commit e push.
Algumas pessoas vão te dizer que é um desperdício
você pedir para o Claude Opus fazer um push
que eu poderia fazer com o botão.
Mas aí eu não vou te julgar se você quiser fazer isso.
Eu faço isso quando eu estou no celular.
Porque o Claude, ele tem uma funcionalidade bem legal.
Que é o barra remote control aqui, né?
Quando você ativa isso aqui,
barra remote control,
você consegue continuar gerenciando
essa conversa pelo aplicativo do Claude no teu celular.
Então muitas vezes eu vou descer alguma coisa assim,
aí eu dou um remote control e continuo na sessão aqui pelo meu celular.
Aí no celular eu não tenho essa interface do VS Code,
eu tenho só a conversa.
Aí na própria conversa eu peço commit e push.
O legal é que ele mesmo já faz todas as verificações necessárias.
E aí você pode ver, ó,
que a nuvenzinha subiu para a última versão, ó.
A nuvenzinha que estava embaixo subiu.
Está vendo?
Quer dizer que então a última versão que está no meu computador
é também a que está publicada.
Se eu for lá no Cloudflare,
em deployments, né?
Eu vou ver que já pipocou uma nova versão.
Ó, a primeira que a gente fez foi há nove minutos atrás.
E essa nova versão foi alguns segundos atrás.
Pena, eu queria tentar pegar ela em tempo real aqui,
mas não deu porque é muito rápido.
E aí eu posso ir em detalhes, ó.
Aí eu vejo que, pô, foi dois mais dois,
foi vinte segundos aqui para ele fazer tudo.
Mas, enfim, essa nova versão aqui já é a que está no ar.
Então, se eu vier aqui no site, ó,
agora sim, se eu atualizar,
vou dar um atualizar,
ah, ele já pegou a versão nova.
Então, é assim que você vai fazendo o teu dia a dia agora.
Você vai fazendo qualquer modificação que você quiser aqui.
E aí, sabendo que quando você fizer o push,
você vai empurrar lá para o GitHub a tua versão nova,
ó, aqui no GitHub,
há um minuto atrás,
o último,
a última versão que ele pegou, né?
Então, você vai empurrar para o GitHub a nova versão,
tudo que você fez,
e, por consequência,
o Cloudflare já vai atualizar e publicar.
Esse é o processo do teu dia a dia agora.
Quanto custa?
Zero, galera.
O GitHub é um serviço gratuito.
Tem os planos pagos lá que a gente não precisa de nada disso.
E o Cloudflare é absurdo.
Quais são os limites do Cloudflare pages no plano free?
Se liga.
Até 100 sites.
Até 500 deploys por mês.
Ou seja, 500 deploys por mês dá 16 deploys por dia.
Largura de banda ilimitada.
Request para arquivos estáticos ilimitado.
Domínios customizados 100 por projeto.
No máximo 20 mil arquivos.
O nosso está com quanto?
Vamos ver.
O nosso está com 133 arquivos,
para você ter uma base.
Tamanho máximo de cada arquivo 25 MB.
Então, galera, é infinito.
Com isso, nós publicamos o nosso site.
Então, e nos vemos na próxima aula.
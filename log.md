# Todo de erros, bugs e tudo mais.

- [x] Não builda por causa de warnings
- [x] Warning relativo ao useRef() -taquei o foda-se pra isso
- [x] Formatação das imagens no feed
- [x] falta fazer alguns caminhos do Redux/talvez eu tenha que usar contextApi { loginPopUp, } -> alterei para contextApi
- [x] melhores as regras de segurança firebase
- [x] criar um componente de loading bonitinho
- [x] fazer o sistema para haver apenas uma request do user
- [x] iniciar o firebase por default
- [x] fazer o sistema de login
- [x] fazer o sistema de cadastro
- [x] fazer o sistema de post
- [x] fazer o sistema de feed
- [x] fazer o sistema de comentários
- [x] fazer o sistema de seguir
- [x] fazer o sistema de notificações
- [x] fazer o sistema de curtir
- [x] fazer o sistema de descurtir
- [x] adicionar o alertar de notificações no footerMenu
- [x] finalizar o mobile menu
- [x] fazer pagina de seguidores -> Falta melhorar ainda(n mostra specs nem location)
- [x] fazer pagina de seguindo -> Falta melhorar ainda(n mostra specs nem location)
- [ ] arrumar os links nos menus
- [ ] arrumar os post com imagens
- [ ] arrumar o sistema de comentarios
- [x] apagar as notificações apos o usuario aceitar o convite de amizade
- [ ] fazer o sistema de chat
- [ ] interação entre os usuários {chat, post✔️, feed✔️ -> falta melhorar, etc}
- [ ] poder armazenar fotos e fundir com a conta
- [ ] tratar os erros do firebase para mostrar ao usuário
- [ ] atualizar o sistema de cadastro (ta faltando os gostos, etc)
- [ ] criar as funções de cancelar solicitação de amizade e de deixar de seguir
- [ ] fazer a opção de bloquear usuários
- [ ] fazer a opção de deletar conta - opcional
- [ ] fazer a opção de deletar post
- [ ] fazer a opção de deletar comentário - opcional
- [ ] criar a pagina das histórias da marcela

# proximos passos

### interação entre os usuários

- [x] corrigir objeto enviado no cadastro para a API
- [x] postar algo
- [x] adicionar amigos
- [x] ver post de amigos e seus amigos verem seus posts

rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /users/{uid} {
allow read, write : if request.auth.uid == uid;
}
match /users/{userId}/posts/{idPost}{
allow read : if request.auth.uid != null &&
exists(/databases/$(database)/documents/users/$(userId)/friendshipRequests/$(request.auth.uid)) &&
      	get(/databases/$(database)/documents/users/$(userId)/friendshipRequests/$(request.auth.uid)).data.accepted == true;
}
}
}

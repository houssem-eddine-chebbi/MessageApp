# MessageApp

RUN APPLICATION: 
  1. cd Back-Node/
  2. npm start


Doc Technique: 

  - BD: 
    MongoDB avec un seul modèle Message (body, private, from, to)
    
  - Back:
    NodeJS avec le framework ExpressJS qui renvoie par défaut la page static dans public (le projet react buildé)
    avec API (/api/messages) qui contient 3 routes: 
      - /privatemessages (get) prend query param DisplayName et renvoie tt les messages privés du user (DisplayName) (envoiyer et recu par lui)
      - /publicmessages (get) retourne tt les messages public
      - /postmessage (post) prend un message en param et le rajoute dans la BD
      
      
   - Front React: 
    Interface "login" pour prendre un DisplayName (juste front pas vraiment une authentification). tant que t'as pas renseigné un DisplayName t'es redirigé vers l'interface de login.
    
    Interface des message public (affiche tt les messages public).
    
    Interface de message privé (liste tt les users qui t’ont envolées un msg ou l'inverse).
    
    la possibilité d'envoiyer un msg public ou privé.

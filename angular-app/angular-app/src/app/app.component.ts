import { Component } from '@angular/core';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   title = 'Gestion des utilisateurs';
  userActif: User;
 
   // -- Déclaration d'un object contact de type Contact (décrit plus haut)
   aUser: User = {
     id: 1,
     name: 'Astrid JONATHAN',
     pseudo: 'astridjonathan',
     email: 'aj@gmail.com',
     password: 'astrid'
   };
   // -- Tableau de contact
  users: User[] = [
     {
       id: 1,
       name: 'Astrid JONATHAN',
       pseudo: 'astridjonathan',
       email: 'aj@gmail.com',
       password: 'astrid'
     },
     {
       id: 2,
       name: 'Hugo LIEGEARD',
      pseudo: 'hugoliegeard',
       email: 'hugo.j@gmail.com',
       password: 'leFormateur'
     },
     {
       id: 3,
       name: 'Rosemael ANTHONY',
       pseudo: 'rosemaelanthony',
       email: 'rose.a@gmail.com',
       password: 'rosemael'
     },
   ];
   /**
    * Cette fonction permet d'afficher le profil d'un contact
    */
  onSubmit(usersubmit: User) {
     // -- Comment afficher dans la console
    this.userActif = usersubmit;
   }
}


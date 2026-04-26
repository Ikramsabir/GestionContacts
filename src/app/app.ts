// app.ts 
/*import { Component } from '@angular/core'; 
import { FormulaireContact } from './formulaire-contact/formulaire-contact'; 
 
@Component({ 
  selector: 'app-root', 
  standalone: true, 
  imports: [FormulaireContact], // ← Import direct ! 
  template: ` 
    <h1>Gestionnaire de Contacts</h1> 
    <app-formulaire-contact></app-formulaire-contact> 
  ` 
}) 
export class App { }*/


//app.ts 
import { Component } from '@angular/core'; 
import { FormulaireContact } from './formulaire-contact/formulaire-contact';
import { ListeContacts } from './liste-contacts/liste-contacts';
import { Contact } from './contact.interface'; 
 
@Component({ 
  selector: 'app-root', 
  standalone: true, 
  imports: [FormulaireContact, ListeContacts], 
  templateUrl:"./app.html"
}) 
export class App { 
  mesContacts: Contact[] = []; 
 
  ajouterContact(contact: Contact): void { 
    this.mesContacts.push(contact); 
    console.log('Contact ajouté :', contact);
  }
}
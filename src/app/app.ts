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
 
 /* ajouterContact(contact: Contact): void { 
    this.mesContacts.push(contact); 
    console.log('Contact ajouté :', contact);
  }*/

   // constructor : injection uniquement (vide ici) 
  constructor() { } 
 
  // ngOnInit : initialisation des données 
  ngOnInit(): void { 
    // Pré-remplir avec 2 contacts démo 
    this.mesContacts = [ 
      { nom: 'Ali Benali', email: 'ali@example.com', telephone: '0600000001' }, 
      { nom: 'Sara Alami', email: 'sara@example.com', telephone: '0600000002' }, 
    ]; 
    console.log('AppComponent initialisé avec', this.mesContacts.length, 'contacts'); 
  } 
 
  ajouterContact(contact: Contact): void { 
    this.mesContacts = [...this.mesContacts, contact]; // Nouvelle référence ! 
  }

  // app.component.ts 
supprimerContact(index: number): void { 
  this.mesContacts = this.mesContacts.filter((_, i) => i !== index); 
  console.log(`Contact ${index} supprimé. Reste : ${this.mesContacts.length}`); 
} 


// app.component.ts 
get nombreContacts(): number { 
  return this.mesContacts.length; 
} 
 
get messageStatut(): string { 
  if (this.mesContacts.length === 0) return 'Carnet vide'; 
  if (this.mesContacts.length === 1) return '1 contact'; 
  return `${this.mesContacts.length} contacts`; 
}
}
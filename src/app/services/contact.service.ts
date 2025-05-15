import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Observable, from } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID'; // Vous devrez remplacer ceci
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Vous devrez remplacer ceci
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Vous devrez remplacer ceci

  constructor() {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init(this.PUBLIC_KEY);
  }

  sendContactForm(formData: ContactFormData): Observable<any> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Votre Nom', // Remplacez par votre nom
      reply_to: formData.email,
    };

    return from(
      emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams)
    );
  }
}

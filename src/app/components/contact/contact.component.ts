import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { finalize } from 'rxjs/operators';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;

  contactInfo: ContactInfo = {
    email: 'diallo.mamadou.aliou.dap@gmail.com',
    phone: '+33 7 53 89 66 87',
    location: 'Paris, France',
    socialLinks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mamadou-aliou-diallo-dap/',
        icon: 'fab fa-linkedin',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/MamadouAlphaDiallo',
        icon: 'fab fa-github',
      },
    ],
  };

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.contactService
        .sendContactForm(this.contactForm.value)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe({
          next: () => {
            this.snackBar.open('Message sent successfully!', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error sending message:', error);
            this.snackBar.open(
              'Failed to send message. Please try again.',
              'Close',
              {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
              }
            );
          },
        });
    }
  }
}

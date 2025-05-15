import { Injectable } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animation,
  AnimationReferenceMetadata,
} from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  // Animation pour les entrées de page
  pageAnimation = trigger('pageAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate(
        '600ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
    ]),
  ]);

  // Animation pour les listes avec effet stagger
  listAnimation = trigger('listAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate(
              '500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]);

  // Animation pour les cartes
  cardAnimation = trigger('cardAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-20px)' }),
      animate(
        '400ms ease-out',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
  ]);

  // Animation pour le fade in
  fadeAnimation = trigger('fadeAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 })),
    ]),
  ]);
}

import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        stagger(100, [
          animate(
            '300ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const pageAnimation = trigger('pageAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '300ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '200ms ease-in',
      style({ opacity: 0, transform: 'translateY(20px)' })
    ),
  ]),
]);

export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' })),
  ]),
]);

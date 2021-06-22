import { transition, trigger, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export const slideInOut: AnimationTriggerMetadata = trigger('coverSlideInOut', 
    [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(100%)' }))
      ]),
    ]);
    
export const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s ease-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 0 }),
      // animate('1s ease-in', style({ opacity: 0 }))
    ])
  ])

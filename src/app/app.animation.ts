import { animate, animateChild, group, query as q, style, transition, trigger } from '@angular/animations';
const query = (s: any, a: any, o: any = { optional: true }) => q(s, a, o);
export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%' })),
        query(':enter', style({ transform: 'translateY(100%)' })),
        group([
            query(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('1.0s ease-in-out', style({ transform: 'translateY(-100%)', height: 0, overflow:'hidden' }))
            ]),
            query(':enter', [
                animate('1.0s ease-in-out', style({ transform: 'translateY(0%)', height: "100%", overflow:'auto' })),
                animateChild()
            ])
        ]),
    ]),
]);
export const pageAnimation = trigger('pageAnimation', [
    
]);
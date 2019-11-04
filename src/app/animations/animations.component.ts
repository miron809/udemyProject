import { Component, OnInit } from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {bounce, bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue'})),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)'
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(500)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        // query('h4', animate(1500)),
        style({background: 'green'}),
        animate('1s', style({
          background: 'pink'
        })),
        animate(750)
      ]),
      // void => *
      transition(':enter', [
        animate('4s', keyframes([
          style({background: 'red', offset: 0}),
          style({background: 'black', offset: .2}),
          style({background: 'orange', offset: .3}),
          style({background: 'blue', offset: 1}),
        ]))
        // style({opacity: 0}),
        // animate(850)
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1}),
        group([
          animate(850, style({
            opacity: 0,
            transform: 'scale(1.2)'})),
          animate(300, style({
            color: 'black',
            fontWeight: 'bold'
          }))
        ])
      ])
    ]),

  //  use animation library
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          delay: .3
        }
      }))
    ])
  ]
})
export class AnimationsComponent implements OnInit {
  boxState = 'start';
  visible = true;

  constructor() { }

  ngOnInit() {
  }

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted(event: AnimationEvent) {
    console.log(event);
  }

  animationDone(event: AnimationEvent) {
    console.log(event);
  }
}

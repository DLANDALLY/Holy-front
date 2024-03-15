import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';
import { Observable, Observer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';


export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe],
   animations: [
    trigger('translateTab', [
      state('start', style({
        transform: 'translateX(0)'
      })),
      transition('* => start', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class AboutMeComponent {
  asyncTabs: Observable<ExampleTab[]>

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
  
}

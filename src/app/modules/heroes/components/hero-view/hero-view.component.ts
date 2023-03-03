import { Component, Input } from '@angular/core';

export enum HeroViewMode {
  summary = 'summary',
  details = 'details',
  editor = 'editor'
}

@Component({
  selector: 'app-hero-view',
  template: `
    <ng-container [ngSwitch]="mode">
      <div *ngSwitchCase="'summary'">
        <app-hero-summary></app-hero-summary>
      </div>
      <div *ngSwitchCase="'details'">
        <app-hero-details></app-hero-details>
      </div>
      <div *ngSwitchCase="'editor'">
        <app-hero-editor></app-hero-editor>
      </div>
      <div *ngSwitchDefault>
        <app-hero-summary></app-hero-summary>
      </div>
    </ng-container>
  `,
  styles: [
  ]
})
export class HeroViewComponent {
  @Input()
  mode!: HeroViewMode | string;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { TopHeroesComponent } from './pages/top-heroes/top-heroes.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';
import { HeroSummaryComponent } from './components/hero-view/hero-summary/hero-summary.component';
import { HeroAvatarComponent } from './components/hero-view/hero-avatar/hero-avatar.component';
import { HeroDetailsComponent } from './components/hero-view/hero-details/hero-details.component';
import { HeroEditorComponent } from './components/hero-view/hero-editor/hero-editor.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    TopHeroesComponent,
    AllHeroesComponent,
    HeroViewComponent,
    HeroSummaryComponent,
    HeroAvatarComponent,
    HeroDetailsComponent,
    HeroEditorComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }

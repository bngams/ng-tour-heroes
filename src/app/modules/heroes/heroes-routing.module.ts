import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { HeroDetailsComponent } from './components/hero-view/hero-details/hero-details.component';
import { HeroEditorComponent } from './components/hero-view/hero-editor/hero-editor.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { TopHeroesComponent } from './pages/top-heroes/top-heroes.component';

const routes: Routes = [
  { path : 'top', component: TopHeroesComponent },
  { path: 'all', component: AllHeroesComponent, children: [
    { path: 'details', component: HeroDetailsComponent} 
  ]},
  // { path: 'action', component: SidebarComponent, outlet: 'side', children: [
  //   { path: 'details', component: HeroDetailsComponent},
  //   { path: 'edit', component: HeroEditorComponent },
  // ]}
  { path: 'action/details', component: HeroDetailsComponent, outlet: 'side' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

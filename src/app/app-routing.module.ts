import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './launches/pages/launches.module#LaunchesPageModule' },
  { path: 'missions', loadChildren: './missions/pages/missions.module#MissionsPageModule' },
  { path: 'cores', loadChildren: './cores/pages/cores.module#CoresPageModule' },
  { path: 'pads', loadChildren: './pads/pages/pads.module#PadsPageModule' },
  { path: 'history', loadChildren: './history/pages/historical-events/historical-events.module#HistoricalEventsPageModule' },
  { path: 'about', loadChildren: './app-core/pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './app-core/pages/settings/settings.module#SettingsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'rockets', loadChildren: './rockets/pages/rockets.module#RocketsPageModule' },
  { path: 'payloads', loadChildren: './payloads/pages/payloads.module#PayloadsPageModule' },
  { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule' },
  { path: 'ships', loadChildren: './ships/pages/ships.module#ShipsPageModule' },
  { path: 'dragons', loadChildren: './dragons/pages/dragons.module#DragonsPageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

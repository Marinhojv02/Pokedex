import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SeachBarComponent } from './seach-bar/seach-bar.component';
import { RoutingModule } from '../pages/routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    PokemonListComponent,
    SeachBarComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SeachBarComponent,
    PokemonListComponent,

  ]
})
export class SharedModule { }

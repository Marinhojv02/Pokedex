import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';


import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        HomeComponent,
        PokemonComponent,
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule
    ]
})
export class PagesModule { }

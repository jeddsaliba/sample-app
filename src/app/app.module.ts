import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/form/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { dogReducer } from './redux/dog/dog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DogEffect } from './redux/dog/dog.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      dogs: dogReducer
    }),
    EffectsModule.forRoot([DogEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

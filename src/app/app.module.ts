import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventsListComponent } from './page/events-list/events-list.component';


const appRoutes: Routes = [
  { path:"**", component: EventsListComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

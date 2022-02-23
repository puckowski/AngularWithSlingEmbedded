import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardListComponent } from './components/card-list/card-list.component';
import { RootContentComponent } from './components/root-content/root-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SlingCardListComponent } from './components/sling-card-list/sling-card-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardListComponent,
    RootContentComponent,
    SlingCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

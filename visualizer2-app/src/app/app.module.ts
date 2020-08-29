import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule} from '@angular/material/slider'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AnimateComponent } from './animate/animate.component';
import { BubbleComponent } from './bubble/bubble.component';
import { InsertionComponent } from './insertion/insertion.component';
import { SelectionComponent } from './selection/selection.component';
import { QuickComponent } from './quick/quick.component';
import { MergeComponent } from './merge/merge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnimateComponent,
    BubbleComponent,
    InsertionComponent,
    SelectionComponent,
    QuickComponent,
    MergeComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavComponent]
})
export class AppModule { }

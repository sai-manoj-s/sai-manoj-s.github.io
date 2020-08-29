import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from '../app/nav/nav.component';
import { AnimateComponent } from '../app/animate/animate.component'
import  { BubbleComponent } from '../app/bubble/bubble.component'
import  { QuickComponent } from '../app/quick/quick.component'
import { SelectionComponent } from '../app/selection/selection.component'
import { MergeComponent } from '../app/merge/merge.component'
import { InsertionComponent } from '../app/insertion/insertion.component'
import { HomeComponent } from '../app/home/home.component'

const routes: Routes = [
  {
    path:'refresh',
    component: AnimateComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'n',
    component: AnimateComponent
  },
  {
    path:'mergesort',
    component: MergeComponent
  },
  {
    path:'bubblesort',
    component: BubbleComponent
  },
  {
    path:'insertionsort',
    component: InsertionComponent
  },
  {
    path:'quicksort',
    component: QuickComponent
  },
  {
    path:'selectionsort',
    component: SelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

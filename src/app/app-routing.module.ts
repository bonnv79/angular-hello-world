import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: "hello",
    component: HelloComponent,
    title: "Hello"
  },
  {
    path: "data-binding",
    component: DataBindingComponent,
    title: "Data Binding"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

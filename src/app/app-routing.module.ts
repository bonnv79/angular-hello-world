import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventInComponentComponent } from './event-in-component/event-in-component.component';
// import { HelloComponent } from './hello/hello.component';
// import { HomeComponent } from './home/home.component';
import { PassingDataBetweenComponentsComponent } from './passing-data-between-components/passing-data-between-components.component';
import { StructureDirectiveIfElseComponent } from './structure-directive-if-else/structure-directive-if-else.component';
import { StructureDirectiveNgForComponent } from './structure-directive-ng-for/structure-directive-ng-for.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ContentProjectComponent } from './content-project/content-project.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';

export const routes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent,
  //   title: "Home"
  // },
  // {
  //   path: "hello",
  //   component: HelloComponent,
  //   title: "Hello"
  // },
  {
    path: "data-binding",
    component: DataBindingComponent,
    title: "Data Binding"
  },
  {
    path: "structure-directive-if-else",
    component: StructureDirectiveIfElseComponent,
    title: "Structure directive if-else"
  },
  {
    path: "structure-directive-ng-for",
    component: StructureDirectiveNgForComponent,
    title: "Structure directive ng-for"
  },
  {
    path: "binding",
    component: BindingComponent,
    title: "Binding"
  },
  {
    path: "passing-data-between-components",
    component: PassingDataBetweenComponentsComponent,
    title: "Passing data between components"
  },
  {
    path: "event-in-component",
    component: EventInComponentComponent,
    title: "Event in component"
  },
  {
    path: "two-way-binding",
    component: TwoWayBindingComponent,
    title: "Two way binding"
  },
  {
    path: "template-variable",
    component: TemplateVariableComponent,
    title: "Template variable (Todo)"
  },
  {
    path: "content-project",
    component: ContentProjectComponent,
    title: "Content Project"
  },
  {
    path: "ng-template-outlet",
    component: NgTemplateOutletComponent,
    title: "Ng Template Outlet"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

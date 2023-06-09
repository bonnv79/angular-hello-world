import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MenuComponent } from './menu/menu.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { StructureDirectiveIfElseComponent } from './structure-directive-if-else/structure-directive-if-else.component';
import { StructureDirectiveNgForComponent } from './structure-directive-ng-for/structure-directive-ng-for.component';
import { BindingComponent } from './binding/binding.component';
import { PassingDataBetweenComponentsComponent } from './passing-data-between-components/passing-data-between-components.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EventInComponentComponent } from './event-in-component/event-in-component.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { ContentProjectComponent } from './content-project/content-project.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ChTabPanelComponent } from './ch-tab-panel/ch-tab-panel.component';
import { ChTabGroupComponent } from './ch-tab-group/ch-tab-group.component';
import { CounterComponent } from './counter/counter.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { TitlePipeComponent } from './title-pipe/title-pipe.component';
import { IsAdultComponent } from './is-adult/is-adult.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { ControlLabelComponent } from './control-label/control-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    DataBindingComponent,
    HomeComponent,
    StructureDirectiveIfElseComponent,
    StructureDirectiveNgForComponent,
    BindingComponent,
    PassingDataBetweenComponentsComponent,
    ProgressBarComponent,
    EventInComponentComponent,
    AuthorDetailComponent,
    TwoWayBindingComponent,
    ToggleComponent,
    TemplateVariableComponent,
    ContentProjectComponent,
    NgTemplateOutletComponent,
    TabContainerComponent,
    DependencyInjectionComponent,
    TabGroupComponent,
    TabPanelComponent,
    BsTabGroupComponent,
    ContentChildComponent,
    ChTabPanelComponent,
    ChTabGroupComponent,
    CounterComponent,
    PipeExampleComponent,
    TitlePipeComponent,
    IsAdultComponent,
    RxjsExampleComponent,
    ControlLabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

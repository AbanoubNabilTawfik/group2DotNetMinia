import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentsComponent } from './departments/departments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LeftNavComponent,
    RightNavComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructureDirectivesComponent,
    PipesComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    DepartmentsComponent,
    NotFoundComponent,
    DepartmentDetailsComponent,
    OverviewComponent,
    ContactComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

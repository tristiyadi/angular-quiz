import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './views/navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './views/personal/personal.component';
import { WorkComponent }      from './views/work/work.component';
import { AddressComponent }   from './views/address/address.component';
import { ResultComponent }    from './views/result/result.component';

/* Shared Service */
import { FormDataService }    from './core/services/formData.service';
import { WorkflowService }    from './core/services/workflow.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

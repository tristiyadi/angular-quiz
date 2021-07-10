import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent }    from './views/personal/personal.component';
import { WorkComponent }        from './views/work/work.component';
import { AddressComponent }     from './views/address/address.component';
import { ResultComponent }      from './views/result/result.component';

import { WorkflowGuard }        from './core/services/workflow-guard.service';

export const routes: Routes = [
  { path: 'personal',  component: PersonalComponent },
  { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
  { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
  { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
  { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[WorkflowGuard]
})
export class AppRoutingModule { }

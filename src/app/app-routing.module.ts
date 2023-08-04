import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAdmissionComponent } from './new-admission/new-admission.component';

const routes: Routes = [{
    path: '', component: NewAdmissionComponent,
    data: { title: 'NOVA ADMISSÃO COOPERADO' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

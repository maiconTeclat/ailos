import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    WizardStepsComponent,
    NewAdmissionComponent
  ],
  imports: [
    [BrowserModule, FormsModule],
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }

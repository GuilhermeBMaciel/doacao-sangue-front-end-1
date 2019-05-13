import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form.component';
import { CadastroFormModule } from '../cadastro-form/cadastro-form.module';
import { FormDebugComponent } from '../form-debug/form-debug.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroFormModule
  ]
})
export class LoginFormModule { }

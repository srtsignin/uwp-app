import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoginComponent } from './card-login.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ CardLoginComponent ]
})
export class CardLoginModule {}

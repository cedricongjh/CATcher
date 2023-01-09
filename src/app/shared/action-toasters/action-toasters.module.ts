import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SuccessActionComponent } from './success-action/success-action.component';
import { UndoActionComponent } from './undo-action/undo-action.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [UndoActionComponent, SuccessActionComponent],
  exports: [UndoActionComponent, SuccessActionComponent],
  entryComponents: [UndoActionComponent, SuccessActionComponent]
})
export class ActionToasterModule {}

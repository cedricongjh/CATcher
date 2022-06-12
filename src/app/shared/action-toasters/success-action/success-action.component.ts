import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-success-action',
  templateUrl: './success-action.component.html'
})
export class SuccessActionComponent {
  constructor(public snackBarRef: MatSnackBarRef<SuccessActionComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}

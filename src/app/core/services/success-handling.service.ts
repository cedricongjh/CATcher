import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SuccessActionComponent } from '../../shared/action-toasters/success-action/success-action.component';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class SuccessHandlingService {
  constructor(private snackBar: MatSnackBar, private logger: LoggingService) {}

  handleSuccess(message: string) {
    this.logger.info(message);
    this.snackBar.openFromComponent(SuccessActionComponent, { data: { message: message } });
  }
}

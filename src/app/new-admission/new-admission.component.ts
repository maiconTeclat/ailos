import { Component } from '@angular/core';
import { UtilsService } from '../utils.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.scss']
})
export class NewAdmissionComponent {
  loading: boolean = false;
  cpf: string = '';
  cpfValidationResult: { name: string; isValid: boolean } | null = null;

  constructor(private utilsService: UtilsService) {
  }

  onCpfInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const cpf = inputElement.value;

    this.cpf = cpf || '';
    this.cpfValidationResult = null;
  }

  onValidateCpf() {
    this.loading = true;
    this.utilsService.delay(1000).then(() => {
      this.cpfValidationResult = this.utilsService.validateCpf(this.cpf);
      this.loading = false;
    });
  }
}

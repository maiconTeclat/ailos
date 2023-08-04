import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  validateCpf(cpf: string): { name: string; isValid: boolean } {
    const cleanCpf = cpf.replace(/\D/g, ''); // Remove non-numeric characters

    if (cleanCpf.length !== 11) {
      return { name: '', isValid: false };
    }

    if (/^(\d)\1+$/.test(cleanCpf)) {
      return { name: '', isValid: false };
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    const verificationDigit1 = remainder === 10 ? 0 : remainder;

    if (verificationDigit1 !== parseInt(cleanCpf.charAt(9))) {
      return { name: '', isValid: false };
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    const verificationDigit2 = remainder === 10 ? 0 : remainder;

    if (verificationDigit2 !== parseInt(cleanCpf.charAt(10))) {
      return { name: '', isValid: false };
    }

    return { name: 'Maicon Eduardo Prange', isValid: true };
  }

  delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}

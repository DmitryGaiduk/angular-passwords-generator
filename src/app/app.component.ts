import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  password = ''
  passwordLength = 0;

  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(e: any) {
    let parsedNumber = parseInt(e.target.value)

    if (!isNaN(parsedNumber)) {
      this.passwordLength = parsedNumber;
    }
  }

  generatePassword(): void {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*(){};+-=_';

    let symbolsPool = '';

    this.password = '';


    if (this.includeSymbols) {
      symbolsPool += symbols
    }

    if (this.includeLetters) {
      symbolsPool += letters
    }

    if (this.includeNumbers) {
      symbolsPool += numbers;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * symbolsPool.length);
      this.password += symbolsPool[index];
    }
  }
}

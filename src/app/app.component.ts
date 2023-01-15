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

  generate(): void {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const nums = '1234567890'
    const symbols = '!@#$%^&*(){};+-=_'

    let availableSymbols = '';
    this.password = '';


    if (this.includeSymbols) {
      availableSymbols += letters
    }

    if (this.includeLetters) {
      availableSymbols += symbols
    }

    if (this.includeNumbers) {
      availableSymbols += nums;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * availableSymbols.length);
      this.password += availableSymbols[index];
    }
  }
}

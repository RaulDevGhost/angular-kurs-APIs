import { Component } from '@angular/core';

@Component({
  selector: 'app-quantum-dropdown',
  templateUrl: './quantum-dropdown.component.html',
  styleUrls: ['./quantum-dropdown.component.scss'],
})
export class QuantumDropdownComponent {
  options: Array<{ id: number; name: string }> = [
    { id: 1, name: 'Sentence 1' },
    { id: 2, name: 'Sentence 2' },
    { id: 3, name: 'Sentence 3' },
    { id: 4, name: 'Sentenc4 ' },
  ];
  selectedIndex: number | undefined;
  test = 'Select Country';
  isShow = false;

  showing() {
    this.isShow = !this.isShow;
  }

  updateOptions(event: any, option: { id: number; name: string }) {
    this.selectedIndex = event.target.checked ? option.id : undefined;
    console.log(option);
    this.test = option.name;
    this.isShow = false;
  }
}

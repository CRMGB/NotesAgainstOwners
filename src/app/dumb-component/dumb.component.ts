import { Component, Input, OnInit } from '@angular/core';
import { Notes } from '@app/_models/notesModel';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dumb-component',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {
  @Input() notesInput: Notes[];
  @Input('userInput') userOwner: string; // tslint:disable-line: no-input-rename
  @Input('formGroup') formGroup: FormGroup; // tslint:disable-line: no-input-rename

  constructor() {
  }

  ngOnInit() {

  }

}
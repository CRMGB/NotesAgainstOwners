import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllNotesService } from '@app/_services/all-notes.service';
import { Notes } from '../_models/notesModel'
import { AuthenticationService } from '@app/_services';
@Component({
  selector: 'app-smart-notes-load',
  templateUrl: './smart-notes-load.component.html',
  styleUrls: ['./smart-notes-load.component.less']
})
export class SmartNotesLoadComponent implements OnInit {
  notesModel: Notes[]
  userSigned: any;
  validationForm: FormGroup;
  submitted = false;
  dynamicForm: FormGroup;

  constructor(
    private notesDetailService: AllNotesService,
    private authenticationService: AuthenticationService,
    public fb: FormBuilder
  ) {
    this.validationForm = fb.group({
      titleFormEx: [null, [Validators.required, Validators.email]],
      passwordFormEx: [null, Validators.required],
      tickets: new FormArray([])
    });
  }

  ngOnInit() {
    this.notesModel = this.notesDetailService.getNotes()
    this.userSigned = this.authenticationService.getUserSignedIn().username
    this.createDynamicForm()
  }
  get titleFormEx() {
    return this.validationForm.get('titleFormEx');
  }
  get passwordFormEx() {
    return this.validationForm.get('passwordFormEx');
  }
  createDynamicForm() : void {
    let group: any = {};
    this.notesModel.forEach(note => {
      group[note.title] = new FormControl(note.title || '', Validators.required);
      group[note.body] = new FormControl(note.body || '', Validators.required);
      group[note.media] = new FormControl(note.media || '', Validators.required);
    });
    this.dynamicForm = new FormGroup(group);
  }


  onSubmit() {
    this.submitted = true;
    // this.submit.emit();
    if (this.validationForm.invalid) {
      return;
    }
    // this.notesService.save(this.titleFormEx.value)
  }

  // onSave(notes: Notes) {
  //   this.notesDetailService.save(notes);
  // }

}

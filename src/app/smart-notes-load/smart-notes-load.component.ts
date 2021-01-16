import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/_services';
import { AllNotesService } from '@app/_services/all-notes.service';
import { first } from 'rxjs/operators';
import { Notes } from '../_models/notesModel'
import { User } from '../_models/user'

@Component({
  selector: 'app-smart-notes-load',
  templateUrl: './smart-notes-load.component.html',
  styleUrls: ['./smart-notes-load.component.less']
})
export class SmartNotesLoadComponent implements OnInit{
  @Input() notesModel: Notes[];
  @Input() userModel: User[];
  users: User[];
  validationForm: FormGroup;
  dynamicForm : FormGroup;
  submitted = false;
  // loading: Observable<boolean>;
  // notes: Observable<Notes>;
  
  constructor(
    private userService: UserService,
    private notesDetailService: AllNotesService,
    public fb: FormBuilder
    ) { 
    this.validationForm = fb.group({
        titleFormEx: [null, [Validators.required, Validators.email]],
        passwordFormEx: [null, Validators.required],
        tickets: new FormArray([])
        });
    // this.loading = this.notesDetailService.loading;
    // this.notes = this.notesDetailService.notes;
  }
  get titleFormEx() { 
    return this.validationForm.get('titleFormEx'); 
  }
  get passwordFormEx() { 
      return this.validationForm.get('passwordFormEx'); 
  }

  ngOnInit(){
    // this.loading = true;
    console.log("from samrt-notes-load ", this.notesModel)
    this.userService.getAll().pipe(first()).subscribe(users => {
      // this.loading = false;
    this.users = users;
    });
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
    this.titleFormEx;
    this.passwordFormEx;
    console.log("title", this.titleFormEx.value);
    // this.notesService.save(this.titleFormEx.value)
  }

  // onSave(notes: Notes) {
  //   this.notesDetailService.save(notes);
  // }

}

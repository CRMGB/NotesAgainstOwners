import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { first } from 'rxjs/operators';

import { AllNotesService } from '@app/_services/all-notes.service';
import { Notes } from '@app/_models/notesModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    notesModel: Notes[];

    constructor(private notesDetailService: AllNotesService) { }

    ngOnInit() {
        const notes = this.notesDetailService.getNotes()
        console.log("this notes", notes)
        this.setAllNotes(notes)
    }

    setAllNotes(allNotes) {
        this.notesModel = allNotes;
    }

    // constructor(
    //     private userService: UserService,
    //     private notesService: NotesService,
    //     public fb: FormBuilder
    //     ) { 
    //         this.validationForm = fb.group({
    //             titleFormEx: [null, [Validators.required, Validators.email]],
    //             passwordFormEx: [null, Validators.required],
    //           });
    //     }

    //     get titleFormEx() { return this.validationForm.get('titleFormEx'); }
    //     get passwordFormEx() { return this.validationForm.get('passwordFormEx'); }

    // ngOnInit() {
    //     this.loading = true;
    //     this.userService.getAll().pipe(first()).subscribe(users => {
    //         this.loading = false;
    //         this.users = users;
    //     });
    // }

    // //Try to display first which is easier then two way binding
    // onSubmit() {
    //     this.submit.emit();
    //     console.log("title", this.titleFormEx.value);
    //     this.notesService.save(this.titleFormEx.value)

    // }

}
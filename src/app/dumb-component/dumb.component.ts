import { Component, OnInit } from '@angular/core';
import { AllNotesService } from '@app/_services/all-notes.service';
import { Notes } from '@app/_models/notesModel';
import { FormGroup,  } from '@angular/forms';
import { User } from '@app/_models';

@Component({
    selector: 'dumb-component',
    templateUrl: './dumb.component.html',
    //styleUrls: ['./home.component.css']
})
export class DumbComponent implements OnInit {
    notesModel: Notes[];
    userModel: User[];
    validationForm: FormGroup;
    loading = false;
    users: User[];
    constructor(private notesDetailService: AllNotesService) { }

    ngOnInit() {
        const notes = this.notesDetailService.getNotes()
        this.loadAllData(notes)
    }

    loadAllData(allNotes) {
        this.notesModel = allNotes;
    }

}
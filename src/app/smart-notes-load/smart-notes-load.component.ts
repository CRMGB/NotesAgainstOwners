import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '@app/_services';
import { NotesService } from '@app/_services/notes.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';
import { Notes } from '../_models/notesModel'
import { User } from '../_models/user'
@Component({
  selector: 'app-smart-notes-load',
  templateUrl: './smart-notes-load.component.html',
  styleUrls: ['./smart-notes-load.component.less']
})
export class SmartNotesLoadComponent implements OnInit{
  @Input() notesModel: Notes[];
  counter = 0;
  
  // loading: Observable<boolean>;
  // notes: Observable<Notes>;
  constructor(
    private notesDetailService: NotesService
  ) {
    // this.loading = this.notesDetailService.loading;
    // this.notes = this.notesDetailService.notes;
  }
  ngOnInit(){
    console.log("from samrt-notes-load ", this.notesModel)

  }

  // onSave(notes: Notes) {
  //   this.notesDetailService.save(notes);
  // }

  // loadNotes(){

  // }

  // onSubmit() {
  //   this.notes = this.notesDetailService.getNotesData();
  //   for (var note in this.notes){
  //     console.log("saved Notes!", note)
  //   }
  //   console.log("hellooooo", this.notes)
  // }

}

import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { Notes } from '../_models/notesModel';

@Injectable({ providedIn: 'root' })
export class NotesService {

  // loading: Observable<boolean>;
  // notes: Observable<Notes>;

  private databaseNotes: Notes;
  defaultBehaviourValue = [
    { 
    'id': 1 , 
    'title': 'Some Title', 
    'body': 'Some Body', 
    'media': 'Some media',
    'status': 'SomeStatus',
    'created': "20/01/2021",
    'edited': "20/01/2021",
    'deleted': "20/01/2021",
    'owner': "Some"
  }];

  private notes = new BehaviorSubject<Notes[]>( this.defaultBehaviourValue );
  product = this.notes.asObservable();

  notesArray: any = [];
  constructor() { }

 getNotes(newNote) {
   console.log('Create a new note: ', newNote);
   this.notesArray.push(newNote);
   this.notes.next(this.notesArray);
  }

  removeNote(idToRemove: number){
    this.notesArray = this.notesArray.filter( item => item.id !== idToRemove );
    this.notes.next(this.notesArray);
  }

  // save(notes: Notes) {
  //   setTimeout(() => {
  //     this.databaseNotes = notes;

  //     alert("saved Notes!");
  //     console.log("saved Notes!", notes)
  //     for (var note in this.databaseNotes){
  //       console.log("saved Notes!", note)
  //     }
  //     this.needNewNotesData.next(null);
  //   }, 500);
  // }
}
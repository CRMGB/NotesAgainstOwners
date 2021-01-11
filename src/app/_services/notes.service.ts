import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, timer, of } from 'rxjs';
import { switchMap, tap, delay } from 'rxjs/operators';

import { Notes } from '../_models/notes';

@Injectable({ providedIn: 'root' })
export class NotesService {

  loading: Observable<boolean>;

  notes: Observable<Notes>;

  private needNewNotesData = new BehaviorSubject<void>(null);

  private databaseNotes: Notes;

  constructor() {
    this.databaseNotes = new Notes();
    this.databaseNotes.id
    this.databaseNotes.title
    this.databaseNotes.body
    this.databaseNotes.media
    this.databaseNotes.status
    this.databaseNotes.created
    this.databaseNotes.edited
    this.databaseNotes.deleted
    this.databaseNotes.owner

    const loadingSubj = new BehaviorSubject<boolean>(true);
    this.loading = loadingSubj.asObservable();

    this.notes = this.needNewNotesData.pipe(
      switchMap(() => {
        return this.getNotesData();
      }),
      tap(() => loadingSubj.next(false))
    );
  }

  getNotesData() {
    // get the tenant from the "database"
    return of(this.databaseNotes).pipe(delay(1000)); // delay to simulate asynchronicity
  }

  save(notes: Notes) {
    setTimeout(() => {
      // setTimeout to simulate asynchronicity

      // save to the "database"
      this.databaseNotes = notes;

      alert("saved!");

      this.needNewNotesData.next(null);
    }, 500);
  }
}
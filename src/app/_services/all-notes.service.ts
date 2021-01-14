import { Notes } from '../_models/notesModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllNotesService {

  constructor() { }

  getNotes(): Notes[] {
    let data;
    return data = [
      {
        id: 1,
        title: 'noteTitle',
        body: 'note body',
        media: '45000',
        status: 'Some Status',
        created: '20/01/2021',
        edited: '20/01/2021',
        deleted: '20/01/2021',
        owner: 'Test user1',
      },
      {
        id: 2,
        title: 'noteTitle',
        body: 'note body2',
        media: '45000',
        status: 'Some Status',
        created: '20/01/2021',
        edited: '20/01/2021',
        deleted: '20/01/2021',
        owner: 'Test user2',
      },
      {
        id: 3,
        title: 'noteTitle',
        body: 'note body3',
        media: '45000',
        status: 'Some Status',
        created: '20/01/2021',
        edited: '20/01/2021',
        deleted: '20/01/2021',
        owner: 'Test user3',
      },
    ];
  }
}

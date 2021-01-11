import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_services';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';
import {Notes} from '../_models/notes'
import {User} from '../_models/user'
@Component({
  selector: 'app-smart-notes-load',
  templateUrl: './smart-notes-load.component.html',
  styleUrls: ['./smart-notes-load.component.less']
})
export class SmartNotesLoadComponent {

}

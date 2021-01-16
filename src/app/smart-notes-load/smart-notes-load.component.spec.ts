import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { SmartNotesLoadComponent } from './smart-notes-load.component';

describe('SmartNotesLoadComponent', () => {
  let component: SmartNotesLoadComponent;
  let fixture: ComponentFixture<SmartNotesLoadComponent>;
  let userSigned;
  let mocknotesDetailService;
  let mockauthenticationService;
  let NOTES;
  let USERINPUT;
  let mockFormGroup;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartNotesLoadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    userSigned = {
      authdata: "dXNlclRlc3QxOnVzZXJUZXN0MQ==",
      firstName: "UserTest1FirstName",
      id: 2,
      lastName: "UserTest1LastName",
      username: "userTest1"
    }

    NOTES = [
      {
        body: "note body",
        created: "20/01/2021",
        deleted: "20/01/2021",
        edited: "20/01/2021",
        id: 1,
        media: "45000",
        owner: "userTest1",
        status: "Some Status",
        title: "noteTitle1"
      },
      {
        body: "note body2",
        created: "20/01/2021",
        deleted: "20/01/2021",
        edited: "20/01/2021",
        id: 1,
        media: "45000",
        owner: "userTest1",
        status: "Some Status",
        title: "noteTitle2"
      }
    ]

    USERINPUT = "userTest1"

    mocknotesDetailService = jasmine.createSpyObj([userSigned]);
    mockauthenticationService = jasmine.createSpyObj(NOTES);
    mockFormGroup = jasmine.createSpyObj(formBuilder);
    component = new SmartNotesLoadComponent(
      mocknotesDetailService,
      mockauthenticationService,
      mockFormGroup
    );
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartNotesLoadComponent);
    component = fixture.componentInstance;
    
    // pass in the form dynamically
    component.dynamicForm = formBuilder.group({
        title: null,
        body: null,
        media: null
    });
    fixture.detectChanges();
});

});

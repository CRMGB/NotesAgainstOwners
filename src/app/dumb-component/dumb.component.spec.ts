import { DumbComponent } from "./dumb.component";
import { of } from "rxjs";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, Type } from "@angular/core";
import { AllNotesService } from '@app/_services/all-notes.service';
import { Notes } from '@app/_models/notesModel';
import { By } from "@angular/platform-browser";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
describe('Dumb Component test', () => {
    let fixture: ComponentFixture<DumbComponent>;
    let component: DumbComponent;
    let mockNotesService;
    let Step2Component: any;
    let mockUserService;
    let NOTES;
    let USERINPUT;
    const formBuilder: FormBuilder = new FormBuilder();
    @Component({
        selector: 'dumb-component',
        templateUrl: './dumb.component.html',
    })
    class FakeDumbComponent {
        @Input() notesInput: Notes[];
        @Input('userInput') userOwner: string; // tslint:disable-line: no-input-rename
        @Input('formGroup') formGroup: FormGroup; // tslint:disable-line: no-input-rename
    }
    beforeEach(async(() => {
        mockNotesService = jasmine.createSpyObj(['getNotes']);
        mockUserService = jasmine.createSpyObj(['getUserSignedIn']);
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
        TestBed.configureTestingModule({
            schemas: [
              CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
              FormsModule,
              ReactiveFormsModule
            ],
            declarations: [
                DumbComponent
            ]
          }).compileComponents();

        USERINPUT = "userTest1"

        TestBed.configureTestingModule({
            declarations: [
                DumbComponent,
                FakeDumbComponent
            ],
            providers: [
                { 
                    provide: AllNotesService, 
                    useValue: mockNotesService, 
                    userValue : mockUserService
                }
            ]
        })
        fixture = TestBed.createComponent(DumbComponent);
        // mockFormbuilder = jasmine.createSpyObj(userSigned);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DumbComponent);
        component = fixture.componentInstance;
        
        // pass in the form dynamically
        component.formGroup = formBuilder.group({
            title: null,
            body: null,
            media: null
        });
        fixture.detectChanges();
    });
      
    it('should set notes correctly from the service', () => {
        mockNotesService.getNotes.and.returnValue(of(NOTES));
        fixture.detectChanges();
        expect(fixture.componentInstance.notesInput.length).toBe(2);
    })
    it('should get userInput correctly from the service', () => {
        mockUserService.getUserSignedIn.and.returnValue(of(USERINPUT));
        fixture.detectChanges();
        expect(fixture.componentInstance.userOwner).toEqual("userTest1");
    })
})
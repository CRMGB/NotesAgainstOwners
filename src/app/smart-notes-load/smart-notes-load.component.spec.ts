import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNotesLoadComponent } from './smart-notes-load.component';

describe('SmartNotesLoadComponent', () => {
  let component: SmartNotesLoadComponent;
  let fixture: ComponentFixture<SmartNotesLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartNotesLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartNotesLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

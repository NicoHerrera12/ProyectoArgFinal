import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplabComponent } from './xplab.component';

describe('XplabComponent', () => {
  let component: XplabComponent;
  let fixture: ComponentFixture<XplabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

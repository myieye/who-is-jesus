import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseOrderSelectComponent } from './verse-order-select.component';

describe('VerseOrderSelectComponent', () => {
  let component: VerseOrderSelectComponent;
  let fixture: ComponentFixture<VerseOrderSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseOrderSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseOrderSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

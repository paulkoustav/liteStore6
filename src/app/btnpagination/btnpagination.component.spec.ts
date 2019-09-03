import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnpaginationComponent } from './btnpagination.component';

describe('BtnpaginationComponent', () => {
  let component: BtnpaginationComponent;
  let fixture: ComponentFixture<BtnpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

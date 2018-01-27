import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterblogComponent } from './registerblog.component';

describe('RegisterblogComponent', () => {
  let component: RegisterblogComponent;
  let fixture: ComponentFixture<RegisterblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

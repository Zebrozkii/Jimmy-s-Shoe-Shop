import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeShoesComponent } from './nike-shoes.component';

describe('NikeShoesComponent', () => {
  let component: NikeShoesComponent;
  let fixture: ComponentFixture<NikeShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikeShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

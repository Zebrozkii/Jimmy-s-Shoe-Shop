import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GucciShoesComponent } from './gucci-shoes.component';

describe('GucciShoesComponent', () => {
  let component: GucciShoesComponent;
  let fixture: ComponentFixture<GucciShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GucciShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GucciShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

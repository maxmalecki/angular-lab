import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { compteurComponent } from './compteur.component';

describe('compteur', () => {
  let component: compteurComponent;
  let fixture: ComponentFixture<compteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ compteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(compteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

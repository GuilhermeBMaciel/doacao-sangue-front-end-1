import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHemocentroComponent } from './editar-hemocentro.component';

describe('EditarHemocentroComponent', () => {
  let component: EditarHemocentroComponent;
  let fixture: ComponentFixture<EditarHemocentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarHemocentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHemocentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

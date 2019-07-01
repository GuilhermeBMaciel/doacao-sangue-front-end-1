import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirHemocentroComponent } from './excluir-hemocentro.component';

describe('ExcluirHemocentroComponent', () => {
  let component: ExcluirHemocentroComponent;
  let fixture: ComponentFixture<ExcluirHemocentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirHemocentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirHemocentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

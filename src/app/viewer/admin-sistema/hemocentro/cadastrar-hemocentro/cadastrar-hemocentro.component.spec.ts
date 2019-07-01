import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHemocentroComponent } from './cadastrar-hemocentro.component';

describe('CadastrarHemocentroComponent', () => {
  let component: CadastrarHemocentroComponent;
  let fixture: ComponentFixture<CadastrarHemocentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarHemocentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarHemocentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

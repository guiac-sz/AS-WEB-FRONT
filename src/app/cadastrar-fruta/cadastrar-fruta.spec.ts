import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFruta } from './cadastrar-fruta';

describe('CadastrarFruta', () => {
  let component: CadastrarFruta;
  let fixture: ComponentFixture<CadastrarFruta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarFruta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFruta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaProductsUiComponent } from './panda-products-ui.component';

describe('PandaProductsUiComponent', () => {
  let component: PandaProductsUiComponent;
  let fixture: ComponentFixture<PandaProductsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaProductsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaProductsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

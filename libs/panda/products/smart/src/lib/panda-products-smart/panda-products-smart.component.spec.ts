import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaProductsSmartComponent } from './panda-products-smart.component';

describe('PandaProductsSmartComponent', () => {
  let component: PandaProductsSmartComponent;
  let fixture: ComponentFixture<PandaProductsSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaProductsSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaProductsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

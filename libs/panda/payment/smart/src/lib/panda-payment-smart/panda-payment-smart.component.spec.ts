import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaPaymentSmartComponent } from './panda-payment-smart.component';

describe('PandaPaymentSmartComponent', () => {
  let component: PandaPaymentSmartComponent;
  let fixture: ComponentFixture<PandaPaymentSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaPaymentSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaPaymentSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

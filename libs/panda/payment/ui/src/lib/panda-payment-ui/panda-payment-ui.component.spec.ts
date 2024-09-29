import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaPaymentUiComponent } from './panda-payment-ui.component';

describe('PandaPaymentUiComponent', () => {
  let component: PandaPaymentUiComponent;
  let fixture: ComponentFixture<PandaPaymentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaPaymentUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaPaymentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

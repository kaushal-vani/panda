import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaCheckOutSmartComponent } from './panda-check-out-smart.component';

describe('PandaCheckOutSmartComponent', () => {
  let component: PandaCheckOutSmartComponent;
  let fixture: ComponentFixture<PandaCheckOutSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaCheckOutSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaCheckOutSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

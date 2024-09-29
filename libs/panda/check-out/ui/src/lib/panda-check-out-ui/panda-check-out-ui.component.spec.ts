import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaCheckOutUiComponent } from './panda-check-out-ui.component';

describe('PandaCheckOutUiComponent', () => {
  let component: PandaCheckOutUiComponent;
  let fixture: ComponentFixture<PandaCheckOutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaCheckOutUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaCheckOutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

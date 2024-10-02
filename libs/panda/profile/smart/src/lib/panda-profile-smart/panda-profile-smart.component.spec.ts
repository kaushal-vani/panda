import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaProfileSmartComponent } from './panda-profile-smart.component';

describe('PandaProfileSmartComponent', () => {
  let component: PandaProfileSmartComponent;
  let fixture: ComponentFixture<PandaProfileSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaProfileSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaProfileSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

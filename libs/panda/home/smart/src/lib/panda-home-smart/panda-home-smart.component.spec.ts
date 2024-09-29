import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaHomeSmartComponent } from './panda-home-smart.component';

describe('PandaHomeSmartComponent', () => {
  let component: PandaHomeSmartComponent;
  let fixture: ComponentFixture<PandaHomeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaHomeSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaHomeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

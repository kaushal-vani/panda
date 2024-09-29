import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaAuthenticationSmartComponent } from './panda-authentication-smart.component';

describe('PandaAuthenticationSmartComponent', () => {
  let component: PandaAuthenticationSmartComponent;
  let fixture: ComponentFixture<PandaAuthenticationSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaAuthenticationSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaAuthenticationSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

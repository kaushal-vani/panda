import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaAboutUsSmartComponent } from './panda-about-us-smart.component';

describe('PandaAboutUsSmartComponent', () => {
  let component: PandaAboutUsSmartComponent;
  let fixture: ComponentFixture<PandaAboutUsSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaAboutUsSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaAboutUsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

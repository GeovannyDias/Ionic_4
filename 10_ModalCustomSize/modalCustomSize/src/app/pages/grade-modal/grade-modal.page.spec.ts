import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradeModalPage } from './grade-modal.page';

describe('GradeModalPage', () => {
  let component: GradeModalPage;
  let fixture: ComponentFixture<GradeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

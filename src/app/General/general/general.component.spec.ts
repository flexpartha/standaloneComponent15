import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponent } from './general.component';
import { DomSanitizer } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/httpServ/employee.service';

fdescribe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;
  let mockEmployeeService: Partial<EmployeeService>;

  beforeEach(async () => {
    mockEmployeeService = {
      getSafeHtml: jasmine.createSpy('getSafeHtml').and.returnValue('<h1>Sanitization Success</h1>'),
    };
    await TestBed.configureTestingModule({
      declarations: [ GeneralComponent ],
      providers: [{
        provide: EmployeeService, useValue: mockEmployeeService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show dynamic component', () => {
    component.showDynamicComponent();
    // You can add your expectations here based on how you handle dynamic component creation
  });

  it('should remove dynamic component', () => {
    component.removeDynamicComponent();
    // You can add your expectations here based on how you handle dynamic component removal
  });

  it('should get sanitized HTML', () => {
    component.getXSSValue();
    expect(component.safeValue).toBe('<h1>Sanitization Success</h1>');
    expect(mockEmployeeService.getSafeHtml).toHaveBeenCalled();
  });
});

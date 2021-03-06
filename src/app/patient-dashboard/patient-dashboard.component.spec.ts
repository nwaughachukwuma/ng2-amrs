/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DynamicRoutesService } from '../shared/dynamic-route/dynamic-routes.service';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { PatientService } from './patient.service';
import { PatientResourceService } from '../openmrs-api/patient-resource.service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FakeAppFeatureAnalytics } from '../shared/app-analytics/app-feature-analytcis.mock';
import { AppFeatureAnalytics } from '../shared/app-analytics/app-feature-analytics.service';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { LocalStorageService } from '../utils/local-storage.service';
import {
  ProgramEnrollmentResourceService
}
  from '../openmrs-api/program-enrollment-resource.service';
import { EncounterResourceService } from '../openmrs-api/encounter-resource.service';
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
class MockActivatedRoute {
  params = Observable.of([{'id': 1}]);
}

describe('Component: PatientDashboard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientDashboardComponent,
        PatientService,
        MockBackend,
        BaseRequestOptions,
        PatientResourceService,
        FakeAppFeatureAnalytics,
        AppSettingsService,
        LocalStorageService,
        EncounterResourceService,
        ProgramEnrollmentResourceService,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: AppFeatureAnalytics,
          useClass: FakeAppFeatureAnalytics
        },
        {provide: Router, useClass: MockRouter}, {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
        }, DynamicRoutesService
      ]
    });
  });
  it('should create an instance', () => {
    let component = TestBed.get(PatientDashboardComponent);
    expect(component).toBeTruthy();
  });
});

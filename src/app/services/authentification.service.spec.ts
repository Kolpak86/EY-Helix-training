import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthentificationService } from './authentification.service';

describe('AuthentificationService', () => {
    beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientModule, RouterTestingModule.withRoutes([])] }));

    it('should be created', () => {
        const service: AuthentificationService = TestBed.get(AuthentificationService);
        expect(service).toBeTruthy();
    });
});

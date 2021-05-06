import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
            providers: [AuthGuard],
        });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});

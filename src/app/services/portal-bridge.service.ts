import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Portal } from '../models';

@Injectable({
    providedIn: 'root',
})
export class PortalBridgeService {
    private activePortal = new BehaviorSubject<Portal>(null);

    readonly portal$ = this.activePortal.asObservable();

    constructor() {}

    setPortal(portal: Portal) {
        this.activePortal.next(portal);
    }
}

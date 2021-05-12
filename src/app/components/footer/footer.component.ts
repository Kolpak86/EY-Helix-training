import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portal } from 'src/app/models';
import { PortalBridgeService } from 'src/app/services/portal-bridge.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    portal$: Observable<Portal>;

    constructor(private portalBridge: PortalBridgeService) {}

    ngOnInit() {
        this.portal$ = this.portalBridge.portal$;
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuKitListComponent } from './main-menu-kit-list/main-menu-kit-list.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
    declarations: [
        FooterComponent,
        MainMenuComponent,
        MainMenuKitListComponent,
        MessageDisplayComponent,
        ModalContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        FooterComponent,
        MainMenuComponent,
        MessageDisplayComponent,
        ModalContentComponent
    ]
})
export class SharedComponentesModule { }

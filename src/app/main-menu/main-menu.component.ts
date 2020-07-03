import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})

export class MainMenuComponent implements OnInit {
    public userinfo: User = {
        id: 0,
        email: '',
        name: '',
        role: '',
        lastLogin: ''
    };

    public isMenuCollapsed = true;

    constructor(public authService: AuthService) { }

    ngOnInit(): void {
        
    }
}

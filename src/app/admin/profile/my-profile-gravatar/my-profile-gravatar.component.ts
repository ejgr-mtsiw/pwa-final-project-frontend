import { Component, OnInit, Input } from '@angular/core';
import { Md5 } from 'ts-md5';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-my-profile-gravatar',
    templateUrl: './my-profile-gravatar.component.html',
    styleUrls: ['./my-profile-gravatar.component.scss']
})
export class MyProfileGravatarComponent implements OnInit {

    @Input()
    email: string = '';

    public gravatar: string = '';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        let emailhash: any = Md5.hashStr(this.email.trim().toLowerCase());
        this.gravatar = `https://www.gravatar.com/avatar/${emailhash}`;
    };
}

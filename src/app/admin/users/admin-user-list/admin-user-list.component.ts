import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { MessageTypes } from 'src/app/message/message-types';
import { Message } from 'src/app/message/message';
import { UserService } from 'src/app/services/user.service';
import { ModalContentComponent } from 'src/app/shared-componentes/modal-content/modal-content.component';

@Component({
    selector: 'app-admin-user-list',
    templateUrl: './admin-user-list.component.html',
    styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

    users: User[] = [];
    selectedUser: User = this.users[0];

    messageTypes = MessageTypes;
    message!: Message;

    createFormVisible: boolean = false;
    editFormVisible: boolean = false;

    private LIST_CLASS_SMALL: string = 'col-md-6';
    private LIST_CLASS_LONG: string = 'col-md-12';
    listClass: string = this.LIST_CLASS_LONG;

    constructor(private userService: UserService, private modalService: NgbModal) { }

    ngOnInit(): void {
        this.getUsers();
    }

    showEditForm(): void {
        this.listClass = this.LIST_CLASS_SMALL;

        this.createFormVisible = false;
        this.editFormVisible = true;
    }

    hideEditForm(): void {
        this.editFormVisible = false;
        this.listClass = this.LIST_CLASS_LONG;
    }

    showCreateForm(): void {
        this.listClass = this.LIST_CLASS_SMALL;

        this.editFormVisible = false;
        this.createFormVisible = true;
    }

    hideCreateForm(): void {
        this.createFormVisible = false;
        this.listClass = this.LIST_CLASS_LONG;
    }

    getUsers(): void {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }

    onNewUser(user: User): void {
        this.users.push(user);
    }

    onResultMessage(message: Message): void {
        this.hideCreateForm();
        this.hideEditForm();

        this.message = message;
    }

    onEditUserClick(user: User): void {
        this.selectedUser = user;
        this.showEditForm();
    }

    onCreateUserClick(): void {
        this.showCreateForm();
    }

    onDeleteUserClick(user: User): void {
        const modalRef = this.modalService.open(ModalContentComponent);
        modalRef.componentInstance.title = 'Remover ' + user.name;
        modalRef.componentInstance.content = `
            <p>Tem a certeza que deseja remover o utilizador ${user.name}?</p>`;
        modalRef.componentInstance.okButtonText = 'Eliminar o utilizador ' + user.name;

        modalRef.result.then(
            (closedReason) => {
                this.userService.deleteUser(user).subscribe((result) => {
                    if (result.status == 200) {
                        let index: number = this.users.indexOf(user, 0);
                        this.users.splice(index, 1);

                        this.message = new Message(
                            MessageTypes.SUCCESS,
                            result.message.pt
                        );
                    } else {
                        this.message = new Message(
                            MessageTypes.DANGER,
                            result.message.pt
                        );
                    }
                });
            },
            (dismissedReason) => {
            }
        );
    }
}

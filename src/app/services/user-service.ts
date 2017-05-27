import {Injectable} from '@angular/core';
import {Group} from "../models/group";
import {User} from "../models/user"
/**
 * Created by denisziegler on 5/27/17.
 */

@Injectable()
export class UserService {
    private _users: User[];

    private _editingUser: User;
    
    constructor() {
        this._users = [];
    }

    setEditingUser(user: User){
        this._editingUser = user;
    }

    get editingUser(): User {
        return this._editingUser;
    }

    finishEditing() {
        this.add(this._editingUser);
        this._editingUser = null;
    }

    add(user: User){
        user.id = this._users.length;
        this._users.push(user);
    }

    get list(): User[] {
        return this._users;
    }
}
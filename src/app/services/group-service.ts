import {Injectable} from '@angular/core';
import {Group} from "../models/group";
/**
 * Created by denisziegler on 5/27/17.
 */

@Injectable()
export class GroupService {
    private _groups: Group[];

    constructor() {
        this._groups = [];
    }

    add(group: Group){
        group.id = this._groups.length;
        this._groups.push(group);
    }

    get list(): Group[] {
        return this._groups;
    }

    findByName(name: string){
        return this._groups.find((group: Group) => {
            return group.name == name;
        })
    }

    findById(id: number){
        return this._groups.find((group: Group) => {
            return group.id == id;
        })
    }
}
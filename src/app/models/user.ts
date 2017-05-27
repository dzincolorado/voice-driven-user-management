import {Group} from "../models/group";
/**
 * Created by denisziegler on 5/25/17.
 */

export class User {
    constructor(name: string){
        this.groups = [];
        this.name = name;
    }
    id: number;
    name: string;
    groups: Group[];

    addGroup(group: Group){
        this.groups.push(group);
    }

    removeGroup(group: Group){
        let idx = this.groups.findIndex((testGroup: Group) => {
            return testGroup.id == group.id;
        });

        if(idx >= 0) {
            this.groups.splice(idx, 1);
        }
    }

    get stringifiedGroups(): string {
        return this.groups.map((group: Group) => {
            return group.name;
        }).join(", ");
    }
}

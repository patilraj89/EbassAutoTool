import {Injectable} from '@angular/core';

@Injectable()

export class HostService{
    constructor(){}

    getHost() {        
        return "http://lt096844:8080";
     }
}
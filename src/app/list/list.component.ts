import { Component, OnInit } from '@angular/core';
import { DataService } from './../data/data.service';
import { Contract } from '../api/contract';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    private contract: Contract;

    constructor(private dataservice: DataService) {
        let data = dataservice.getData();
        this.contract = data;
    }

    ngOnInit() {
        console.log("Init of list..");
    }
}


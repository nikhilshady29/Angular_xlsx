import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file';
import { ExcelMethodsService } from '../excel-methods.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    private myService: ExcelMethodsService
    ) { }

  data :any;
  flag : Boolean = false;

  ngOnInit(): void {
  }

  display(e) {

    this.myService.getData(e.target.files[0]).then((data) => this.data = data.rows);
    this.flag = true;
  }

}

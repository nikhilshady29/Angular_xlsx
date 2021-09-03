import { Injectable } from '@angular/core';
import readXlsxFile from 'read-excel-file';

@Injectable({
  providedIn: 'root'
})
export class ExcelMethodsService {

  constructor() { }

  getData(inputFile: File) {
    
    const schema = {
      'Firstname': {
        prop: 'firstName',
        type: String
      },
      'Lastname': {
        prop: 'lastName',
        type: String
      }
    };
    
    //const inputFile: File = e.target.files[0];
    return readXlsxFile(inputFile, { schema });
  }

}

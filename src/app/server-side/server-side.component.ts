import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-server-side',
  templateUrl: './server-side.component.html',
  styleUrls: ['./server-side.component.css']
})


export class ServerSideComponent implements OnInit {
  displayedColumns: string[] = ['no', 'firstName', 'email', 'contactNumber','age','action'];
  empData:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  sort: MatSort | undefined;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
   // this.dataSource.sort=this.sort;
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(){
    this.http.get('https://hub.dummyapis.com/employee?').subscribe
    ((resp:any)=>{
      this.empData=resp;
      this.dataSource=new MatTableDataSource(this.empData);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  filterChange(event:Event){
    const filterValue=(event.target as HTMLInputElement).value
    this.dataSource.filter=filterValue;
  }

  getRow(row:any){
  //  console.log(row);
    
  }

  getEditfdetails(row:any){
    console.log(row)
  }
}

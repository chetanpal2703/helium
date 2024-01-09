import {AfterViewInit, Component,HostListener, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
    // Reference to MatSidenav
    @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 
    // Flags to control the visibility of option lists
    showAdminOptions = false;
    showUserOptions = false;

    // Flag to control visibility of the toggle button
    isToggleVisible = false;
    constructor() {
      // Initially, check the screen width and set the flag accordingly
      this.checkScreenWidth();
    }
    // Method to toggle the side navigation
  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleList(type: string) {
    if (type === 'admin') {
      this.showAdminOptions = !this.showAdminOptions;
      this.showUserOptions = false;
    } else if (type === 'user') {
      this.showUserOptions = !this.showUserOptions;
      this.showAdminOptions = false;
    }
  }

  // Listen for window resize events to update the toggle button visibility
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
  private checkScreenWidth() {
    this.isToggleVisible = window.innerWidth < 768; // Adjust the breakpoint as needed
  }
  

  
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  public title: string;
  public subtitle: string;
  public web: string;


  constructor(){
    this.title="Sergio García";
    this.subtitle="Desarrollador de Software";
    this.web="Checolin00p2.mx";

  }

  ngOnInit(){
    
  }

}

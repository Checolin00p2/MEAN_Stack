import { Component,OnInit} from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit{
  public url:string="";
  public projects: Project[]=[];

  constructor(
    private _projectServices: ProjectService
  ){

  }

  ngOnInit(){
    this.url=Global.url;
    this.getProjects();
  }

  getProjects(){
    this._projectServices.getProjects().subscribe(
      response=>{
        if(response.projects){
          this.projects=response.projects;
          
        }
      },error=>{
        console.log(<any>error);
      }
    )
  }
}

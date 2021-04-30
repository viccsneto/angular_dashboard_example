import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  all_options = [];
  constructor(private dashboardService: DashboardService) {}
  geometry: any;
  material: any;
  mesh:any;
  ngOnInit(): void {
    this.all_options.push(this.dashboardService.NGXECharts1());
    this.all_options.push(this.dashboardService.NGXECharts2());
    this.all_options.push(this.dashboardService.NGXECharts3());
    this.all_options.push(this.dashboardService.NGXECharts4());
  }

  initialize3DCanvas(THREE)
  {
    //console.log("initialize3DCanvas", THREE);
    this.geometry = new THREE.BoxGeometry( 200, 200, 200 );
    this.material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    THREE.scene.add( this.mesh );

  }

  update3DCanvas(THREE)
  {
    //console.log("update3DCanvas", THREE);
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

  }
}

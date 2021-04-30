import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pie = [];
  table = [];
  mesh: any;
  mesh2: any;
  geometry: any;
  material: any;
  material2: any;
  constructor(
    private dashboardService: DashboardService
  ) {

  }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.BigChart();
    this.cards = this.dashboardService.Cards();
    this.pie = this.dashboardService.Pie();
    this.table = this.dashboardService.Table();
  }

  initialize3DCanvas(THREE)
  {
    //console.log("initialize3DCanvas", THREE);
    this.geometry = new  THREE.IcosahedronGeometry( 200, 1 )
    this.material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
    this.material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
    /*
    this.material2 = new THREE.MeshPhongMaterial( {
      color: 0xffffff,
      flatShading: true,
      vertexColors: true,
      shininess: 0
    } );

    */

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.mesh2 = new THREE.Mesh( this.geometry, this.material2 );
    this.mesh2.scale.x = 0.5;
    this.mesh2.scale.y = 0.5;
    this.mesh2.scale.z = 0.5;

    THREE.scene.add( this.mesh );
    THREE.scene.add( this.mesh2 );

  }

  update3DCanvas(THREE)
  {
    //console.log("update3DCanvas", THREE);
    this.mesh.rotation.x +=  0.5 * THREE.elapsedTime;
    this.mesh.rotation.y +=  0.2 * THREE.elapsedTime;
    this.mesh2.rotation.y += 0.5 * THREE.elapsedTime;

  }

}

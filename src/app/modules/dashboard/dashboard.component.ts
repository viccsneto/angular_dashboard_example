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
    THREE.geometry = new  THREE.IcosahedronGeometry( 200, 1 )
    THREE.material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
    THREE.material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
    THREE.mesh = new THREE.Mesh( THREE.geometry, THREE.material );
    THREE.mesh2 = new THREE.Mesh( THREE.geometry, THREE.material2 );
    THREE.mesh2.scale.x = 0.5;
    THREE.mesh2.scale.y = 0.5;
    THREE.mesh2.scale.z = 0.5;

    THREE.scene.add( THREE.mesh );
    THREE.scene.add( THREE.mesh2 );

  }

  update3DCanvas(THREE)
  {
    //console.log("update3DCanvas", THREE);
    //THREE.mesh.rotation.x +=  0.5 * THREE.elapsedTime;
    THREE.mesh.rotation.y -=  0.2 * THREE.elapsedTime;
    THREE.mesh2.rotation.y += 0.5 * THREE.elapsedTime;

  }

}

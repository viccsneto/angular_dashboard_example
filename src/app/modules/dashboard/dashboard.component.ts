import { Component, OnInit } from '@angular/core';
import { AS3DComponent } from 'src/app/shared/widgets/as3d/AS3D.component';
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
    THREE.geoSphere = new  THREE.SphereGeometry( 200, 8, 8)

    THREE.matRed = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    THREE.mshRedSphere = new THREE.Mesh( THREE.geoSphere, THREE.matRed );
    THREE.scene.add( THREE.mshRedSphere );

    THREE.matYellow = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
    THREE.mshYellowSphere = new THREE.Mesh( THREE.geoSphere, THREE.matYellow );
    THREE.mshYellowSphere.scale.set(0.5, 0.5, 0.5);
    THREE.scene.add( THREE.mshYellowSphere );

    THREE.matWhite = new THREE.MeshBasicMaterial( { color: 0xffffff});
    THREE.mshWhiteSphere = new THREE.Mesh( THREE.geoSphere, THREE.matWhite );
    THREE.mshWhiteSphere.position.set( 500, 0, 0 );
    THREE.mshWhiteSphere.scale.x = 0.15;
    THREE.mshWhiteSphere.scale.y = 0.15;
    THREE.mshWhiteSphere.scale.z = 0.15;

    THREE.light1 = new THREE.PointLight( 0xffffff, 0.25, 700 )
    THREE.mshWhiteSphere.position.y = -900;
    THREE.mshWhiteSphere.add(THREE.light1);

    THREE.mshYellowSphere.add(THREE.mshWhiteSphere);

    THREE.matFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0.5, metalness: 1 } );
    THREE.geoFloor = new THREE.BoxGeometry( 2000, 80, 2000 );
		THREE.mshFloor = new THREE.Mesh( THREE.geoFloor, THREE.matFloor );
    THREE.mshFloor.position.y -= 550;
		THREE.scene.add( THREE.mshFloor );

    THREE.renderer.setClearColor(0x0f0f3f);

    THREE.controls = new THREE.CameraControls( THREE.camera, THREE.renderer.domElement );
    THREE.controls.target.copy( THREE.mshYellowSphere.position );
		THREE.controls.update()
  }

  update3DCanvas(THREE)
  {
    THREE.mshRedSphere.rotation.y -= 0.2 * THREE.elapsedTime;
    THREE.mshYellowSphere.rotation.y += 0.5 * THREE.elapsedTime;
  }

}

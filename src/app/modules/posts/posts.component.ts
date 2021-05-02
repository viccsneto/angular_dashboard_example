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
  ngOnInit(): void {
    this.all_options.push(this.dashboardService.NGXECharts1());
    this.all_options.push(this.dashboardService.NGXECharts2());
    this.all_options.push(this.dashboardService.NGXECharts3());
    this.all_options.push(this.dashboardService.NGXECharts4());
  }

  initialize3DCanvas(THREE)
  {
    //console.log("initialize3DCanvas", THREE);
    THREE.geometry = new THREE.TorusKnotGeometry( 50, 10, 200, 32 )
    THREE.wiregeometry = new THREE.TorusKnotGeometry( 50, 10.15, 200, 32 )
    THREE.material = new THREE.MeshPhongMaterial( { color: 0xcfcfcf} );
    THREE.wirematerial = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: true} );
    THREE.wiremesh = new THREE.Mesh( THREE.wiregeometry, THREE.wirematerial );

    THREE.mesh = new THREE.Mesh( THREE.geometry, THREE.material );
    THREE.mesh.add(THREE.wiremesh);
    THREE.mesh.scale.x = 5;
    THREE.mesh.scale.y = 5;
    THREE.mesh.scale.z = 5;
    THREE.light1 = new THREE.PointLight( 0xff0000, 1, 2000 )
    THREE.light1.position.set( 50, 200, 30 );
    THREE.light2 = new THREE.PointLight( 0x0000ff, 10, 2000 )
    THREE.light2.position.set( 50, 200, 30 );

    THREE.light3 = new THREE.PointLight( 0xffffff, 10, 2000 )
    THREE.light3.position.set( 150, -300, 30 );

    THREE.scene.add(THREE.light1);
    THREE.mesh.add(THREE.light2);
    THREE.scene.add( THREE.mesh );
    THREE.geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
    THREE.matStdFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0.5, metalness: 1 } );
		THREE.mshStdFloor = new THREE.Mesh( THREE.geoFloor, THREE.matStdFloor );
    THREE.mshStdFloor.position.y -= 500;
		THREE.scene.add( THREE.mshStdFloor );

    THREE.controls = new THREE.OrbitControls( THREE.camera, THREE.renderer.domElement );
    THREE.controls.target.copy( THREE.mesh.position );
		THREE.controls.update()


  }

  update3DCanvas(THREE)
  {
    //console.log("update3DCanvas", THREE);
    THREE.mesh.rotation.x += 0.1 * THREE.elapsedTime;
    THREE.mesh.rotation.y += 0.2 * THREE.elapsedTime;

  }
}

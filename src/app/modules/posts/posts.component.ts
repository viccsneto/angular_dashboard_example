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
  wiregeometry: any;
  material: any;
  wirematerial: any;
  mesh:any;
  wiremesh:any;

  light1:any;
  light2:any;
  light3:any;
  ngOnInit(): void {
    this.all_options.push(this.dashboardService.NGXECharts1());
    this.all_options.push(this.dashboardService.NGXECharts2());
    this.all_options.push(this.dashboardService.NGXECharts3());
    this.all_options.push(this.dashboardService.NGXECharts4());
  }

  initialize3DCanvas(THREE)
  {
    //console.log("initialize3DCanvas", THREE);
    this.geometry = new THREE.TorusKnotGeometry( 50, 10, 200, 32 )
    this.wiregeometry = new THREE.TorusKnotGeometry( 50, 10.15, 200, 32 )
    this.material = new THREE.MeshPhongMaterial( { color: 0xcfcfcf} );
    this.wirematerial = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: true} );
    this.wiremesh = new THREE.Mesh( this.wiregeometry, this.wirematerial );

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.mesh.add(this.wiremesh);
    this.mesh.scale.x = 5;
    this.mesh.scale.y = 5;
    this.mesh.scale.z = 5;
    this.light1 = new THREE.PointLight( 0xff0000, 1, 2000 )
    this.light1.position.set( 50, 200, 30 );
    this.light2 = new THREE.PointLight( 0x0000ff, 10, 2000 )
    this.light2.position.set( 50, 200, 30 );

    this.light3 = new THREE.PointLight( 0xffffff, 10, 2000 )
    this.light3.position.set( 150, -300, 30 );

    THREE.scene.add(this.light1);
    this.mesh.add(this.light2);
    THREE.scene.add( this.mesh );
    THREE.geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
    THREE.matStdFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0.5, metalness: 1 } );
		THREE.mshStdFloor = new THREE.Mesh( THREE.geoFloor, THREE.matStdFloor );
    THREE.mshStdFloor.position.y -= 500;
		THREE.scene.add( THREE.mshStdFloor );

    const controls = new THREE.OrbitControls( THREE.camera, THREE.renderer.domElement );
    controls.target.copy( this.mesh.position );
		controls.update()


  }

  update3DCanvas(THREE)
  {
    //console.log("update3DCanvas", THREE);
    this.mesh.rotation.x += 0.1 * THREE.elapsedTime;
    this.mesh.rotation.y += 0.2 * THREE.elapsedTime;

  }
}

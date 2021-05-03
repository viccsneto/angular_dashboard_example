import { element } from 'protractor';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-threejscanvas',
  templateUrl: './threejscanvas.component.html',
  styleUrls: ['./threejscanvas.component.scss']
})
export class ThreejscanvasComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('threejscanvas', { static: false }) threejscanvas: ElementRef;
  @Output() init: EventEmitter<any>  = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  public scene:any;
  public camera:any;
  public renderer:any;
  public clock: any;
  private THREE: any;
  private _animationFrameRequestID = 0;
  constructor(private renderer2:Renderer2
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buildTHREEObject();
    this.renderer2.appendChild(this.threejscanvas.nativeElement, this.THREE.renderer.domElement);

    this.clock = new this.THREE.Clock();
    this.init.emit(this.THREE);
    this._animate();
  }

  _animate() {
    this._animationFrameRequestID = requestAnimationFrame(() => this._animate());

    this.update.emit({...this.THREE, elapsedTime: this.clock.getDelta()});
    this.THREE.renderer.render( this.THREE.scene, this.THREE.camera );
  }

  private buildTHREEObject()
  {
    this.THREE = {
      ...THREE,
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000),
      elapsedTime: 0,
      OrbitControls
    };

    this.THREE.camera.position.z = 1000;
    this.THREE.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.THREE.renderer.setSize( window.innerWidth, window.innerHeight);
    return this.THREE;
  }

  ngOnDestroy()
  {
    window.cancelAnimationFrame(this._animationFrameRequestID);
  }
}

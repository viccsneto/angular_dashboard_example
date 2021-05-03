import { element } from 'protractor';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as THREE from "three";
import { CameraControls } from 'three/examples/jsm/controls/experimental/CameraControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
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

  private _THREE: any;
  private _clock: any;
  private _animationFrameRequestID = 0;
  private _boundingClientRect = {width: 1, height: 1};

  constructor(
    private elementRef:ElementRef,
    private renderer2:Renderer2
  ) {

  }

  private updateBoundingClientRect()
  {
    let element = this.elementRef.nativeElement;
    while (element.clientWidth === 0 && element.parentElement) {
      element = element.parentElement;
    }

    this._boundingClientRect = this.elementRef.nativeElement.parentElement.getBoundingClientRect();
    this._boundingClientRect.width = Math.max(this._boundingClientRect.width, 1);
    this._boundingClientRect.height = Math.max(this._boundingClientRect.height, 1);
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.updateBoundingClientRect();
    this.buildTHREEObject();
    this.renderer2.appendChild(this.threejscanvas.nativeElement, this._THREE.renderer.domElement);

    this._clock = new this._THREE.Clock();
    this.init.emit(this._THREE);
    this._animate();
  }

  _animate() {
    this._animationFrameRequestID = requestAnimationFrame(() => this._animate());

    this.update.emit({...this._THREE, elapsedTime: this._clock.getDelta()});
    this._THREE.renderer.render( this._THREE.scene, this._THREE.camera );
  }

  private buildTHREEObject()
  {
    this._THREE = {
      ...THREE,
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera( 75, this._boundingClientRect.width / this._boundingClientRect.height, 1, 10000),
      elapsedTime: 0,
      CameraControls,
      FlyControls,
      FirstPersonControls,
      OrbitControls
    };

    this._THREE.camera.position.z = 1000;
    this._THREE.renderer = new THREE.WebGLRenderer({ antialias: true });
    this._THREE.renderer.setSize( this._boundingClientRect.width, this._boundingClientRect.height);
    return this._THREE;
  }

  ngOnDestroy()
  {
    window.cancelAnimationFrame(this._animationFrameRequestID);
  }
}

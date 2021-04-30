import { element } from 'protractor';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'app-threejscanvas',
  templateUrl: './threejscanvas.component.html',
  styleUrls: ['./threejscanvas.component.scss']
})
export class ThreejscanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('threejscanvas', { static: false }) threejscanvas: ElementRef;
  @Output() init: EventEmitter<any>  = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  public scene:any;
  public camera:any;
  public renderer:any;
  constructor(private renderer2:Renderer2
  ) {

  }

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight);
  }

  ngAfterViewInit() {
    this.renderer2.appendChild(this.threejscanvas.nativeElement, this.renderer.domElement);
    this.init.emit({...THREE, scene:this.scene});
    this._animate();
  }

  _animate() {
    requestAnimationFrame(() => this._animate());


    this.update.emit({...THREE, scene:this.scene});
    this.renderer.render( this.scene, this.camera );
  }



}

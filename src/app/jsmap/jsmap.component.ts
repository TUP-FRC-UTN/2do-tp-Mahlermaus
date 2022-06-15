import { Component, ViewChild, ElementRef, Input, SimpleChanges, OnInit } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';
import { marcadorProvider } from '../providers/marcadorProvider'



@Component({
  selector: 'app-jsmap',
  templateUrl: './jsmap.component.html',
  styleUrls: ['./jsmap.component.css']
})
export class JsmapComponent implements OnInit {
  private map?: H.Map;
  listaMarcadores: any = [];

  @ViewChild('map') mapDiv?: ElementRef;
  @Input() public zoom = 8;
  @Input() public lat = 0;
  @Input() public lng = 0;



  constructor(private marcadorApi: marcadorProvider) {

    this.getMarcadores();

  }
  ngOnInit(): void {
  }

  async getMarcadores() {
    this.marcadorApi.getMarcadores().subscribe((data) => {
      if (data.ok) {
        this.listaMarcadores = data.listaMarcadores;
        this.dibujarMarcadores();
      } else {
        alert(data.error)
      }
    });
  }

  dibujarMarcadores() {
    for (let i = 0; i < this.listaMarcadores.length; i++) {
      var mark = new H.map.Marker({
        lat: this.listaMarcadores[i].latitud,
        lng: this.listaMarcadores[i].longitud
      });
      this.map?.addObject(mark);
    }
  }

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: 'p8Evx69rIXlqTp_UxWOpdKPk7lh2lKDHuYkctrv8yns'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: { lat: -31.442422, lng: -64.1954641 },
          zoom: 11,
        },
      );
      onResize(this.mapDiv.nativeElement, () => {
        map.getViewPort().resize();
      });

      this.map = map;
      //dibujarMarcadores(this.map);

    }



  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.map) {
      if (changes['zoom'] !== undefined) {
        this.map.setZoom(changes['zoom'].currentValue);
      }
      if (changes['lat'] !== undefined) {
        this.map.setCenter({ lat: changes['lat'].currentValue, lng: this.lng });
      }
      if (changes['lng'] !== undefined) {
        this.map.setCenter({ lat: this.lat, lng: changes['lng'].currentValue });
      }
    }
  }






}


// function dibujarMarcadores(map: H.Map) {
//   const lista = JSON.parse(this.listaMarcadores);
//  c
//   var mark2 = new H.map.Marker({ lat: -31.3650993, lng: -64.2261053 });
//   map.addObject(mark2);
//   var mark3 = new H.map.Marker({ lat: -31.3690064, lng: -64.2424084 });
//   map.addObject(mark3);

// }


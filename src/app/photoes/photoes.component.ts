import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoes',
  templateUrl: './photoes.component.html',
  styleUrls: ['./photoes.component.css']
})
export class PhotoesComponent implements OnInit {

  constructor() {

     
    }




  ngOnInit() {

    var canvas = <HTMLCanvasElement>document.getElementById('viewport');
    var context = canvas.getContext('2d');

    make_base();

    function make_base()
      {
        var base_image = new Image();
        base_image.src = '/assets/ashvini.jpg';
        base_image.onload = function(){
          context.drawImage(base_image, 5, 5, 100, 100);
        }
      }

  }

}

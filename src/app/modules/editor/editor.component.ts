import { AfterViewInit, Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'editor-component',
    templateUrl: './editor.html',
    styleUrls: ['./editor.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class EditorComponent implements AfterViewInit {
    
    canvas = null;
    tilesetContainer = null;
    tilesetSelection = null;
    tilesetImage = null;

    selection = [0, 0]; //Which tile we will paint from the menu

    isMouseDown = false;
    currentLayer = 0;
    layers = [ {}, {}, {} ];

    defaultState = [{"0-4":[3,2],"1-4":[4,2],"2-4":[4,2],"3-4":[4,2],"4-4":[4,1],"5-5":[4,2],"6-5":[4,2],"7-5":[4,2],"8-5":[4,2],"9-5":[4,2],"10-5":[4,2],"11-6":[3,2],"12-6":[4,2],"13-6":[4,2],"14-6":[4,2],"12-5":[4,1],"5-4":[4,1],"3-3":[4,1],"0-3":[4,1],"1-3":[4,1],"4-3":[4,1],"5-3":[4,1],"7-3":[4,1],"8-3":[4,1],"9-3":[4,1],"10-3":[4,1],"10-4":[4,1],"11-4":[4,1],"11-5":[4,1],"4-5":[3,2],"2-3":[4,1],"6-3":[4,1],"11-3":[4,1],"12-3":[4,1],"13-3":[4,1],"14-3":[4,1],"6-4":[4,1],"7-4":[4,1],"8-4":[4,1],"9-4":[4,1],"12-4":[4,1],"13-4":[4,1],"14-4":[4,1],"13-5":[4,1],"14-5":[4,1],"14-2":[4,1],"13-2":[4,1],"12-2":[4,1],"11-2":[4,1],"10-2":[4,1],"9-2":[4,1],"8-2":[4,1],"7-2":[4,1],"6-2":[4,1],"5-2":[4,1],"4-2":[4,1],"3-2":[4,1],"2-2":[4,1],"1-2":[4,1],"0-2":[4,1],"0-1":[4,1],"1-1":[4,1],"2-1":[4,1],"3-1":[4,1],"4-1":[4,1],"6-1":[4,1],"8-1":[4,1],"9-1":[4,1],"10-1":[4,1],"11-1":[4,1],"12-1":[4,1],"13-1":[4,1],"14-1":[4,1],"7-1":[4,1],"5-1":[4,1],"0-0":[4,1],"1-0":[4,1],"2-0":[4,1],"3-0":[4,1],"4-0":[4,1],"5-0":[4,1],"6-0":[4,1],"7-0":[4,1],"8-0":[4,1],"9-0":[4,1],"10-0":[4,1],"11-0":[4,1],"12-0":[4,1],"13-0":[4,1],"14-0":[4,1],"14-14":[2,6],"7-14":[3,6],"6-14":[2,6],"5-14":[3,6],"4-13":[3,6],"3-13":[2,6],"1-11":[2,10],"1-10":[2,10],"0-8":[0,6],"0-10":[2,10],"3-10":[3,6],"4-10":[2,6],"0-5":[3,6],"0-6":[0,6],"0-7":[1,6],"0-9":[1,6],"0-11":[2,10],"0-12":[2,10],"0-13":[2,10],"0-14":[0,6],"1-14":[1,6],"1-13":[2,10],"1-12":[3,6],"1-9":[2,6],"1-8":[1,6],"1-7":[0,6],"1-6":[3,6],"1-5":[2,6],"2-5":[3,6],"2-6":[2,6],"2-7":[3,6],"2-8":[0,6],"2-9":[3,6],"2-13":[2,10],"2-14":[0,6],"3-14":[1,6],"3-12":[3,6],"3-11":[2,6],"3-9":[2,6],"3-8":[3,6],"3-7":[2,6],"3-6":[3,6],"3-5":[2,6],"4-6":[2,6],"4-7":[3,6],"4-8":[2,6],"4-9":[3,6],"4-11":[3,6],"4-12":[2,6],"4-14":[2,6],"5-13":[2,6],"5-12":[4,10],"5-11":[4,10],"5-10":[4,10],"5-9":[4,10],"5-8":[3,6],"5-7":[2,6],"5-6":[3,6],"6-6":[2,6],"6-7":[3,6],"6-8":[2,6],"6-9":[4,10],"6-10":[4,10],"6-11":[4,10],"6-12":[4,10],"6-13":[3,6],"7-13":[2,6],"7-12":[4,10],"7-10":[4,10],"7-9":[4,10],"7-8":[3,6],"7-7":[2,6],"7-6":[3,6],"8-6":[2,6],"8-7":[3,6],"8-10":[4,10],"8-11":[4,10],"8-12":[4,10],"8-14":[2,6],"8-13":[3,6],"9-14":[3,6],"9-13":[2,6],"9-12":[4,10],"9-11":[4,10],"9-10":[4,10],"9-7":[2,6],"9-6":[3,6],"10-7":[3,6],"10-8":[2,6],"10-9":[3,6],"10-10":[2,6],"10-11":[3,6],"10-12":[2,6],"10-13":[3,6],"10-14":[2,6],"10-6":[2,6],"11-7":[2,6],"12-7":[3,6],"13-7":[2,6],"14-7":[2,6],"14-8":[2,6],"14-9":[3,6],"14-10":[4,3],"14-11":[4,4],"14-12":[2,6],"14-13":[3,6],"13-14":[3,6],"12-14":[2,6],"11-14":[3,6],"11-13":[2,6],"12-13":[3,6],"13-13":[2,6],"13-12":[3,6],"12-12":[2,6],"11-12":[3,6],"11-11":[2,6],"12-11":[3,6],"13-11":[4,4],"13-10":[2,6],"12-10":[2,6],"11-10":[3,6],"12-9":[3,6],"13-9":[2,6],"13-8":[3,6],"12-8":[2,6],"11-9":[2,6],"11-8":[3,6],"2-10":[2,10],"2-11":[2,10],"2-12":[2,10],"8-9":[4,10],"8-8":[4,10],"9-9":[4,10],"9-8":[4,10],"7-11":[4,10]},{"5-9":[2,7],"6-9":[2,7],"7-9":[2,7],"3-9":[0,6],"3-11":[0,6],"3-13":[0,6],"1-9":[0,6],"2-9":[1,6],"1-10":[1,7],"3-10":[1,6],"3-12":[1,6],"2-10":[1,7],"1-12":[2,10],"0-8":[1,2],"1-8":[1,2],"2-8":[1,2],"2-7":[2,1],"2-6":[2,0],"1-6":[1,0],"0-6":[1,0],"1-7":[1,1],"0-7":[1,1],"11-11":[3,3],"12-11":[4,3],"13-11":[4,4],"14-11":[4,4],"11-12":[3,4],"11-13":[3,5],"12-13":[4,5],"13-13":[4,5],"14-13":[4,5],"12-12":[4,4],"13-12":[4,4],"14-12":[4,4],"0-10":[0,7],"13-10":[3,3],"11-5":[3,1],"4-4":[3,1],"8-8":[2,7],"9-8":[2,7]},{"0-5":[4,12],"1-5":[4,12],"2-5":[4,12],"3-5":[4,12],"4-6":[4,12],"5-6":[4,12],"6-6":[4,12],"7-6":[4,12],"8-6":[4,12],"9-6":[4,12],"10-6":[4,12],"11-7":[4,12],"12-7":[4,12],"13-7":[4,12],"14-7":[4,12],"0-9":[4,12],"1-9":[4,12],"2-9":[4,12],"11-14":[4,12],"12-14":[4,12],"13-14":[4,12],"14-14":[4,12],"6-2":[2,15],"6-3":[0,13],"7-3":[3,12],"8-3":[0,14],"9-3":[1,16],"10-3":[1,15],"11-3":[4,15],"4-2":[4,14],"5-2":[0,12],"4-1":[0,13],"3-1":[3,14],"1-1":[1,16],"2-1":[0,14],"11-1":[4,2],"12-1":[4,2],"13-1":[5,2],"11-0":[4,0],"12-0":[4,0],"13-0":[5,0],"10-1":[4,2],"9-1":[3,2],"10-0":[4,0],"9-0":[3,0],"9-2":[4,12],"10-2":[4,12],"11-2":[4,12],"12-2":[4,12],"13-2":[4,12],"5-13":[4,13],"9-13":[5,13],"6-13":[4,11],"7-13":[4,11],"8-13":[4,11],"0-14":[4,11],"1-14":[4,11],"2-14":[5,13]}];
    
    mapWidth = 0;
    mapHeight = 0;
    tileSize = 0;
    showProperties = false;
    mapData = {
      title: 'Map 1',
      palette: '',
      map: [],
      mapBlocks: [],
      mapWidth: 0,
      mapHeight: 0,
      tileSize: null,
    };

    constructor() {}

    ngAfterViewInit(): void {
      this.canvas = document.querySelector("canvas");
      console.log('this.canvas: ', this.canvas);
      this.tilesetContainer = document.querySelector(".tileset-container");
      this.tilesetSelection = document.querySelector(".tileset-container_selection");
      this.tilesetImage = document.querySelector("#tileset-source");

      this.selection = [0, 0]; //Which tile we will paint from the menu

      this.isMouseDown = false;
      this.currentLayer = 0;
      this.layers = [
        //Bottom
        {
            //Structure is "x-y": ["tileset_x", "tileset_y"]
            //EXAMPLE: "1-1": [3, 4],
        },
        //Middle
        {},
        //Top
        {}
      ];

      this.init();
    }

    init() {
      this.tilesetImage.src = "https://assets.codepen.io/21542/TileEditorSpritesheet.2x_2.png";
      this.layers = this.defaultState;

      //Select tile from the Tiles grid
      this.tilesetContainer.addEventListener("mousedown", (event) => {
        this.selection = this.getCoords(event);
        this.tilesetSelection.style.left = this.selection[0] * 32 + "px";
        this.tilesetSelection.style.top = this.selection[1] * 32 + "px";
      });

      //Bind mouse events for painting (or removing) tiles on click/drag
      this.canvas.addEventListener("mousedown", () => {
        this.isMouseDown = true;
      });
      this.canvas.addEventListener("mouseup", () => {
        this.isMouseDown = false;
      });
      this.canvas.addEventListener("mouseleave", () => {
        this.isMouseDown = false;
      });
      this.canvas.addEventListener("mousedown", (event) => { this.addTile(event) } );
      this.canvas.addEventListener("mousemove", (event) => {
        if (this.isMouseDown) {
          this.addTile(event);
        }
      });

      this.setSizeCanvas('15x15');
      const tileWidthText = getComputedStyle(document.documentElement).getPropertyValue('--tile-width');
      const tileWidth = Number(tileWidthText.replace('px', ''));

      this.tileSize = tileWidth;
      this.mapWidth = this.canvas.width / this.tileSize;
      this.mapHeight = this.canvas.height / this.tileSize;

      this.draw();
      this.setLayer(0);
    }

    clearCanvas() {
      this.layers = [{}, {}, {}];
    }

    exportImage() {
      const data = this.canvas.toDataURL();
      const image = new Image();
      image.src = data;

      const w = window.open("");
      w.document.write(image.outerHTML);
    }

    setLayer(newLayer) {
       //Update the layer
        this.currentLayer = newLayer;

        //Update the UI to show updated layer
        var oldActiveLayer = document.querySelector(".layer.active");
        if (oldActiveLayer) {
            oldActiveLayer.classList.remove("active");
        }
        document.querySelector(`[tile-layer="${ this.currentLayer }"]`).classList.add("active");
    }

    draw() {
      const ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      var size_of_crop = 32;
      
      this.layers.forEach((layer) => {
          Object.keys(layer).forEach((key) => {
            //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
            var positionX = Number(key.split("-")[0]);
            var positionY = Number(key.split("-")[1]);
            var [tilesheetX, tilesheetY] = layer[key];

            ctx.drawImage(
                this.tilesetImage,
                tilesheetX * 32,
                tilesheetY * 32,
                size_of_crop,
                size_of_crop,
                positionX * 32,
                positionY * 32,
                size_of_crop,
                size_of_crop
            );
          });
      });
    }

    addTile(mouseEvent) {
      var clicked = this.getCoords(mouseEvent);
      var key = clicked[0] + "-" + clicked[1];
      console.log('key: ', key);

      if (mouseEvent.shiftKey) {
          delete this.layers[this.currentLayer][key];
      } else {
          this.layers[this.currentLayer][key] = [this.selection[0], this.selection[1]];
      }
      this.draw();
    }

    getCoords(e) {
      console.log('e: ', e);
      const { x, y } = e.target.getBoundingClientRect();
      const mouseX = e.clientX - x;
      const mouseY = e.clientY - y;
      return [Math.floor(mouseX / 32), Math.floor(mouseY / 32)];
   }

   setSizeCanvas(size) {
    const width = Number(size.split("x")[0]);
    const height = Number(size.split("x")[1]);

    // get size of tile 
    const tileWidthText = getComputedStyle(document.documentElement).getPropertyValue('--tile-width');
    const tileHeightText = getComputedStyle(document.documentElement).getPropertyValue('--tile-height');

    const tileWidth = Number(tileWidthText.replace('px', ''));
    const tileHeight = Number(tileHeightText.replace('px', ''));
    this.canvas.width = width * tileWidth;
    this.canvas.height = height * tileHeight;

    this.tileSize = tileWidth;
    this.mapWidth = this.canvas.width / this.tileSize;
    this.mapHeight = this.canvas.height / this.tileSize;

    this.draw();
   }

   viewProperties() {
    this.showProperties = true;
    this.mapData.map = this.layers;
    this.mapData.palette = this.tilesetImage.src;
    this.mapData.tileSize = this.tileSize;
    this.mapData.mapWidth = this.mapWidth;
    this.mapData.mapHeight = this.mapHeight;
   }
   
  }
  
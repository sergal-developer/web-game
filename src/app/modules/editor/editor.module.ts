import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EditorComponent } from "./editor.component";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        EditorComponent
    ],
    exports: [
        EditorComponent
    ],
    providers: [],
  })
  export class EditorModule { }
  
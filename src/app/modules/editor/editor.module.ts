import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EditorComponent } from "./editor.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule
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
  
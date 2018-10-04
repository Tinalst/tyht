import {NgModule} from "@angular/core";
import {FormComponent} from "./form.component";
import {RouterModule, Routes} from "@angular/router";
import {UpimgComponent} from "./upimg/upimg.component";
import {EditorComponent} from "./editor/editor.component";
import {LinkageComponent} from "./linkage/linkage.component"
import {UnsavedGuard} from "../service/unsaved-guard";
const route:Routes = [
  {path:'',component:FormComponent,canDeactivate:[UnsavedGuard]},
  {path:'upimg',component:UpimgComponent},
  {path:'editor',component:EditorComponent},
  {path:'linkage',component:LinkageComponent}
]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports:[RouterModule]
})
export class FormRoutingModule{}

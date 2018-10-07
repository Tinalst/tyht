import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {DialogService} from "xxddialog/components/dialog.service"
@NgModule({
  exports:[HttpClientModule],
  providers:[MessageService,DialogService]
})
export class CoreModule { }

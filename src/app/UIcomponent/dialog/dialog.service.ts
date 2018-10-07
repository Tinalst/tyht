import {Injectable} from "@angular/core";
import {Subject} from "rxjs/index";
import {Observable} from "rxjs/index";
import {Dialog} from "./dialog";
@Injectable()
export class DialogService{
  zIndex:number = 10000;
  private requireDialogSource = new Subject<Dialog>();
  requireDialogSource$ = this.requireDialogSource.asObservable()
  confirm(dialog:Dialog){
    this.zIndex++;
    this.requireDialogSource.next(dialog);
    return this;
  }
}

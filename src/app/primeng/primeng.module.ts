import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card'
import {AvatarModule} from 'primeng/avatar'
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {ChipsModule} from 'primeng/chips';
import {FileUploadModule} from 'primeng/fileupload';
import {ImageModule} from 'primeng/image';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PanelModule} from 'primeng/panel';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {BadgeModule} from 'primeng/badge';
import {MultiSelectModule} from 'primeng/multiselect';
import { TieredMenuModule } from 'primeng/tieredmenu';
const primeNgComponents=[
  ConfirmDialogModule,
  ButtonModule,
  CardModule,
  AvatarModule,
  DataViewModule,
  ButtonModule,
  InputTextModule,
  ChipsModule,
  FileUploadModule,
  ImageModule,
  TableModule,
  CalendarModule,
  FormsModule,
  ReactiveFormsModule,
  MenubarModule,
  ConfirmDialogModule,
  PanelModule,
  AvatarGroupModule,
  RadioButtonModule,
  DropdownModule,
  InputTextareaModule,
  BadgeModule,
  MultiSelectModule,
  TieredMenuModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primeNgComponents,
  ],
  exports:[
    primeNgComponents,
  ],
  providers: [],
  bootstrap: [PrimengModule]
})
export class PrimengModule {

 }

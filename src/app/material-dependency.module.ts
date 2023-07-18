//  this module is a custom file introduced to hold the different imports from the the angular materialize.
// This is done to take out the bloating from the app module file and to gain more ControlContainer. 

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

//this file will be imported into appmodule instead
// @NgModule() is the basic, where we are adding more params using {}
@NgModule({
//imports and export arrays will contain the required material modules. 
    imports:[MatButtonModule,MatIconModule],
    exports:[MatButtonModule,MatIconModule]

})
export class MaterialDependencyModule{ 
}

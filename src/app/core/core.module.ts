// Anglar
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Core Libs
import {
  NumberDirective,
} from "./index";

@NgModule({
	imports: [CommonModule],
	declarations: [
		// directives
		NumberDirective,
	],
	exports: [
		// directives
		NumberDirective,
	],
	providers: [],
})
export class CoreModule {}

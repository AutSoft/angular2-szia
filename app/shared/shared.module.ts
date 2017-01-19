import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [HttpModule, CommonModule],
    exports: [HttpModule, CommonModule],
    declarations: [],
    providers: [],
})
export class SharedModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CypressTestTriggerOnMaskChangeComponent } from './cypress-test-trigger-on-mask-change.component';
import { CypressTestMaskComponent } from './cypress-test-component.component';
import { CypressTestMaskShadowDomComponent } from './cypress-test-shadow-dom.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, FormsModule, NgxMaskModule.forRoot()],
	declarations: [
		CypressTestMaskShadowDomComponent,
		CypressTestMaskComponent,
		CypressTestTriggerOnMaskChangeComponent,
	],
	exports: [
		CypressTestMaskShadowDomComponent,
		CypressTestMaskComponent,
		CypressTestTriggerOnMaskChangeComponent,
	],
})
export class CypressTestMaskModule {}
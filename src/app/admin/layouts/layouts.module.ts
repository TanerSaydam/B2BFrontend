import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { AsideModule } from './aside/aside.module';
import { FooterModule } from './footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent
  }
]

@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    AsideModule,
    FooterModule
  ],
  exports: [
    LayoutsComponent
  ]
})
export class LayoutsModule { }

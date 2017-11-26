import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerListPage } from './lawyer-list';

@NgModule({
  declarations: [
    LawyerListPage,
  ],
  imports: [
    IonicPageModule.forChild(LawyerListPage),
  ],
})
export class LawyerListPageModule {}

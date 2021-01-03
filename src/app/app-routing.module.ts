import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoituresComponent} from './add-voitures/add-voitures.component';
const routes: Routes = [
  {path: "voitures", component : VoituresComponent},
  {path: "add-voitures", component : AddVoituresComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

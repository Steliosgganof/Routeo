import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ABMComponent } from './abm/abm.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abm', component: ABMComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'catalogo', component: CatalogoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

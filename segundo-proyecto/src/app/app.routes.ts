import { Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioEditarComponent } from './components/formulario-editar/formulario-editar.component';
import { FormularioAgregarComponent } from './components/formulario-agregar/formulario-agregar.component';

export const routes: Routes = [
    {path: '', component: ListadoComponent, pathMatch: 'full'},
    //@PathVariable --> :id
    {path: 'editar/:id', component: FormularioEditarComponent}, // /editar/1 o /editar/1
    {path: 'nuevo', component: FormularioAgregarComponent}, 
];

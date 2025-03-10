import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavRoutes } from './types/nav-routes';
import { BmiComponent } from './pages/bmi/bmi.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: NavRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', show: false },
    { path: 'home', component: HomeComponent, title: 'Accueil', show: true },
    { path: 'about', component: AboutComponent, title: 'A propos', show: true },
    { 
        path: 'bmi',
        component: BmiComponent,
        title: 'Calcul de BMI',
        show: true 
    },
    { path: 'shop-list', title: 'Liste de courses', component: ShoppingListComponent, show: true },
    {
        path: 'product',
        title: 'Rechercher un Produit',
        component: ProductComponent,
        show: true
    }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [

  {path:'',component:HomeComponent,
    pathMatch:'full',
    
  },
  {path:"login",component:LoginComponent,
    pathMatch:"full"
  },
  {path:"dashboard",component:DashboardComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {path:'books',component:BookListComponent,
  canActivate:[AuthGuard]
},
  {path:'create-book',component:CreateBookComponent,
  canActivate:[AuthGuard]
},
  {path:'update-book/:id',component:UpdateBookComponent,
  canActivate:[AuthGuard]
},
  {path: 'book-details/:id', component: BookDetailsComponent,
  canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

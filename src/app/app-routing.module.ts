import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './pages/backlog/backlog.component';
import { BoardComponent } from './pages/board/board.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  { path: '', component: CreateUserComponent },
  { path: 'board', component: BoardComponent },
  { path: 'backlog', component: BacklogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

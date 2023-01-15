import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz_bank/quizzes',
    pathMatch: 'full',
  },
  {
    path: 'quiz_bank/quizzes',
    component: QuizzesComponent,
  },
  {
    path: 'quiz_bank/questions',
    component: QuestionsComponent,
  },
  {
    path: 'quiz_bank/quizzes/create',
    component: CreateQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

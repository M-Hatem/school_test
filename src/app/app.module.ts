import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuizListComponent } from './components/quizzes/quiz-list/quiz-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent,
    QuizzesComponent,
    CreateQuizComponent,
    QuizListComponent,
    NavbarComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

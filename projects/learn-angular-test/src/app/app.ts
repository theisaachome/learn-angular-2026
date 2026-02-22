import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private readonly _myCount = signal(0);


  ngOnInit(): void {

  }
  protected readonly title = signal('learn-angular-test');

  countNumber() {
    this._myCount.update((newValue) => newValue + 1);
  }

  get Count () {
    return this._myCount;
  }
}

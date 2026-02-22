
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

export class TodoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  add(todo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, todo);
  }

  getTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

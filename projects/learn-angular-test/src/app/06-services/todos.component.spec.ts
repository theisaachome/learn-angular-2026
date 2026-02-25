import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service:TodoService;

  beforeEach(() => {
    service = new TodoService(null as any);
    component = new TodosComponent(service);
  });

  it('should set todo property with the items returned', () => {
    let todos = [1,2,3,4];
    vi.spyOn(service, 'getTodos').mockReturnValue(of(todos));
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });
});

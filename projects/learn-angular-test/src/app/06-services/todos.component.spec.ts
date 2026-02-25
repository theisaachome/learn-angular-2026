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

  it('should call the server to save the changes when a new item is added', () => {
    let newItem = { title: 'New Todo' };

    // ✅ Correct: Use mockReturnValue with of()
    const spy = vi.spyOn(service, 'add').mockReturnValue(of({ id: 1, ...newItem }));

    component.add(); // Or component.add(newItem) depending on your method signature

    expect(spy).toHaveBeenCalled();
  });

  it('should call the server to delete an item',()=>{
    // 1. Mock the confirm dialog so the code actually reaches the service call
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    // 2. IMPORTANT: Use mockReturnValue with of()
    // If you use mockResolvedValue, it returns a Promise, which lacks .subscribe()
    const spy = vi.spyOn(service, 'delete').mockReturnValue(of(null));

    const id = 1;
    component.delete(id);

    expect(spy).toHaveBeenCalledWith(id);
  })

});

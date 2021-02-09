import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators'

class Todo extends Model {
    static table = 'todos';

    @field('title') title;
    @field('body') body;
    @field('is_completed') isCompleted;
}

export default Todo;

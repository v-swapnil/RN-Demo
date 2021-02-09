import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import Todos from './todos';

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
    schema: schema,
    // dbName: 'myapp', // optional database name or file system path
    // migrations, // optional migrations
    synchronous: true, // synchronous mode only works on iOS. improves performance and reduces glitches in most cases, but also has some downsides - test with and without it
    // experimentalUseJSI: true, // experimental JSI mode, use only if you're brave
});

// Then, make a Watermelon database from it!
const database = new Database({
    adapter: adapter,
    modelClasses: [Todos],
    actionsEnabled: true,
});

export default database;

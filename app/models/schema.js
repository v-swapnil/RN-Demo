import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'todos',
            columns: [
                { name: 'title', type: 'string' },
                { name: 'body', type: 'string', isOptional: true },
                { name: 'is_completed', type: 'boolean' },
            ],
        }),
    ],
});

export default schema;

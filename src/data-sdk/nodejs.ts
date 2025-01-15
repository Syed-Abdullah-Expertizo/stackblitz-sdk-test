import type { Project } from "@stackblitz/sdk";

export const nodeFileBasedTodoAppPrompt: Project = {
  title: "Node.js TODO App",
  description: "A simple TODO app using Node.js and local file storage.",
  template: "node",
  settings: { compile: { trigger: "save", action: "refresh" } },
  files: {
    "package.json": `{
  "name": "file-based-todo",
  "version": "1.0.0",
  "scripts": {
    "start": "ts-node src/index.ts"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  }
}`,
    "tsconfig.json": `{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}`,
    "src/data.ts": `export let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build a TODO app", completed: false }
];`,
    "src/index.ts": `import express from 'express';
import { todos } from './data';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.use(express.json());

// Read all tasks
app.get('/todos', (req, res) => {
  const newTodo = {
    id: todos.length+1,
    task: 'New Task Added',
    completed: false,
  };
  todos.push(newTodo);
  saveToFile();
  res.status(201).send(todos);
});

// Add a new task
app.post('/todos', (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task, completed: false };
  todos.push(newTodo);
  saveToFile();
  res.status(201).send(newTodo);
});

// Update a task
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) return res.status(404).send({ error: 'Task not found' });

  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  saveToFile();
  res.send(todo);
});

// Delete a task
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).send({ error: 'Task not found' });

  todos.splice(index, 1);
  saveToFile();
  res.send({ message: 'Task deleted successfully' });
});

// Save todos to the local file
const saveToFile = () => {
  fs.writeFileSync(
    'src/data.ts',
    \`export let todos = \${JSON.stringify(todos, null, 2)};\`
  );
};

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`
  }
};

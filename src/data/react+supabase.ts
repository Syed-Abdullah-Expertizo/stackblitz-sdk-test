import type { Project } from "@stackblitz/sdk";

export const ReactSupabaseCounterProject: Project = {
  title: "React Firebase Counter",
  description: "A simple React counter app using Tailwind CSS and Firebase Realtime Database.",
  template: "node",
  settings: { compile: { trigger: "save", action: "hmr" } },
  files: {
  "vite.config.ts":`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
`,

"tsconfig.node.json":`{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}`,

"tsconfig.json":`{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}`,

"tsconfig.app.json":`{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`,

"postcss.config.js":`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

"tailwind.config.js":`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
`,

"package.json":`{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@supabase/supabase-js": "^2.39.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}`,

"index.html":`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

"eslint.config.js":`import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);`,

"constants.ts":`export const VITE_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdWRua2FzZnB2b3V4c3FnbHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNTcxMTIsImV4cCI6MjA1MTczMzExMn0.ZYwqILCHGCletcn8hU6Rsvqqr-7fZFqMwRka9PBHyKA';
export const VITE_SUPABASE_URL = 'https://rjudnkasfpvouxsqglyq.supabase.co';
`,

"src/main.tsx":`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,

"src/index.css":`@tailwind base;
@tailwind components;
@tailwind utilities;
`,

"src/App.tsx":`import React from 'react';
import { Counter } from './components/Counter';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Counter />
    </div>
  );
}`,

"src/components/Counter.tsx":`import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';
import { Button } from './ui/Button';

export function Counter() {
  const { count, increment, decrement, isLoading, isUpdating, error } = useCounter();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="bg-white p-8 rounded-xl shadow-lg animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-gray-800">Supabase Counter</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center gap-6">
          <Button
            variant="decrement"
            icon={Minus}
            onClick={decrement}
            disabled={isUpdating}
            aria-label="Decrease counter"
          />
          <span className={\`text-5xl font-bold min-w-[120px] text-center \${isUpdating ? 'opacity-50' : ''}\`}>
            {count}
          </span>
          <Button
            variant="increment"
            icon={Plus}
            onClick={increment}
            disabled={isUpdating}
            aria-label="Increase counter"
          />
        </div>
        {error && (
          <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
        )}
      </div>
      <p className="text-gray-600 text-sm">
        The counter is synchronized in real-time with Supabase
      </p>
    </div>
  );
}`,

"src/components/ui/Button.tsx":`import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'increment' | 'decrement';
  icon: LucideIcon;
}

export function Button({ 
  variant = 'increment', 
  icon: Icon,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "p-3 text-white rounded-lg transition-colors disabled:opacity-50";
  const variantStyles = {
    increment: "bg-green-500 hover:bg-green-600",
    decrement: "bg-red-500 hover:bg-red-600"
  };

  return (
    <button
      className={\`\${baseStyles} \${variantStyles[variant]} \${className}\`}
      {...props}
    >
      <Icon size={24} />
    </button>
  );
}`,

"src/hooks/useCounter.ts":`import { useState, useCallback, useRef } from 'react';
import { getCounter, createCounter, updateCounter } from '../lib/api/counter';
import { formatError } from '../lib/utils/error';
import { useRealtime } from './useRealtime';

export function useCounter() {
  const [count, setCount] = useState(0);
  const [counterId, setCounterId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  
  const latestCount = useRef(count);
  latestCount.current = count;

  useRealtime({
    table: 'counters',
    onUpdate: (newData) => {
      if (newData.value !== latestCount.current) {
        setCount(newData.value);
      }
    },
  });

  const initCounter = useCallback(async () => {
    try {
      let counter = await getCounter();

      if (!counter) {
        counter = await createCounter(0);
      }

      setCounterId(counter.id);
      setCount(counter.value);
      setError(null);
    } catch (err) {
      console.error('Counter initialization error:', err);
      setError(formatError(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useState(() => {
    initCounter();
  });

  const updateValue = useCallback(async (newValue: number) => {
    if (!counterId || isUpdating) return;

    setIsUpdating(true);
    try {
      const updated = await updateCounter(counterId, newValue);
      setCount(updated.value);
      setError(null);
    } catch (err) {
      console.error('Counter update error:', err);
      setError(formatError(err));
      setCount(latestCount.current);
    } finally {
      setIsUpdating(false);
    }
  }, [counterId, isUpdating]);

  const increment = useCallback(() => {
    updateValue(latestCount.current + 1);
  }, [updateValue]);

  const decrement = useCallback(() => {
    updateValue(latestCount.current - 1);
  }, [updateValue]);

  return {
    count,
    increment,
    decrement,
    isLoading,
    isUpdating,
    error
  };
}`,

"src/hooks/useRealtime.ts":`import { useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import type { RealtimeChannel } from '@supabase/supabase-js';

type RealtimeConfig = {
  table: string;
  onUpdate: (newData: any) => void;
};

export function useRealtime({ table, onUpdate }: RealtimeConfig) {
  const isMounted = useRef(true);

  useEffect(() => {
    const channel: RealtimeChannel = supabase
      .channel(\`\${table}_changes\`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table,
        },
        (payload) => {
          if (isMounted.current && payload.new) {
            onUpdate(payload.new);
          }
        }
      )
      .subscribe();

    return () => {
      isMounted.current = false;
      supabase.removeChannel(channel);
    };
  }, [table, onUpdate]);
}`,

"src/lib/supabase.ts":`import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from '../../constants.ts';

const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
`,

"src/lib/database.types.ts":`export interface Database {
  public: {
    Tables: {
      counters: {
        Row: {
          id: string;
          value: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          value?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          value?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}`,

"src/lib/api/counter.ts":`import { supabase } from '../supabase';
import type { Counter, CounterInsert } from './types';

export async function getCounter(): Promise<Counter | null> {
  const { data, error } = await supabase
    .from('counters')
    .select('*')
    .limit(1)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

export async function createCounter(value: number = 0): Promise<Counter> {
  const insert: CounterInsert = { value };
  const { data, error } = await supabase
    .from('counters')
    .insert([insert])
    .select()
    .single();

  if (error) throw error;
  if (!data) throw new Error('Failed to create counter');
  return data;
}

export async function updateCounter(id: string, value: number): Promise<Counter> {
  const { data, error } = await supabase
    .from('counters')
    .update({ value })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  if (!data) throw new Error('Failed to update counter');
  return data;
}`,

"src/lib/api/types.ts":`import type { Database } from '../database.types';

export type Counter = Database['public']['Tables']['counters']['Row'];
export type CounterInsert = Database['public']['Tables']['counters']['Insert'];
export type CounterUpdate = Database['public']['Tables']['counters']['Update'];`,

"src/lib/utils/error.ts":`export function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}`,

"supabase/migrations/20250106083333_shy_voice.sql":`CREATE TABLE IF NOT EXISTS counters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  value integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE counters ENABLE ROW LEVEL SECURITY;

-- Allow public access to read and update counter
CREATE POLICY "Allow public read access"
  ON counters
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public update access"
  ON counters
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update the updated_at column
CREATE TRIGGER update_counters_updated_at
  BEFORE UPDATE ON counters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();`,

  "supabase/migrations/20250106095319_black_hat.sql":`-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON counters;
DROP POLICY IF EXISTS "Allow public update access" ON counters;

-- Create new comprehensive policies
CREATE POLICY "Allow public insert access"
  ON counters
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public read access"
  ON counters
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public update access"
  ON counters
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);`
}
}



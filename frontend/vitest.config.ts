import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: [
      // Services, guards, models — no Angular template compilation needed
      'src/app/core/**/*.spec.ts',
      // Store tests — pure signal logic
      'src/app/features/projects/projects.store.spec.ts',
      // Pure model/util tests
      'src/app/core/models/**/*.spec.ts',
    ],
    reporters: ['verbose'],
  },
});

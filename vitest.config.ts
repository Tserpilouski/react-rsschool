import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      extension: ['ts', 'tsx'],
      include: ['src'],
      all: true,
      exclude: [
        '**/*.type.ts',
        '**/*.d.ts',
        '**/*.interface.ts',
        '**/*.constants.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
      ],
    },
  },
});

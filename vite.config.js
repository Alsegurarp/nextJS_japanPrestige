import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable the new React Compiler with Babel plugin
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {
            // React Compiler configuration for optimal performance
            compilationMode: 'annotation',  // Compile components with "use memo" or similar annotations
            panicThreshold: 'all_errors',   // More strict error handling
          }]
        ],
      },
    }),
    // React Router DOM v7 works seamlessly with React Compiler
  ],

  // Optimize dependencies
  optimizeDeps: {
    include: ['gsap', '@gsap/react'],
  },
  
  // Development server optimizations
  server: {
    hmr: {
      overlay: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Simplified chunking to prevent hoisting issues
        manualChunks(id) {
          // Basic vendor chunk for node_modules
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        // Standard chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Optimize for React Compiler and LCP
    target: 'esnext',
    minify: 'esbuild',
    modulePreload: {
      polyfill: true
    },
    cssCodeSplit: true,
    // Inline small assets to reduce HTTP requests
    assetsInlineLimit: 4096,
  },
})
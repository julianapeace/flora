// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/chancecordelia/Documents/Projects/farmers-ai-agent/flora/node_modules/.pnpm/vite@5.4.11_@types+node@22.8.4/node_modules/vite/dist/node/index.js";
import topLevelAwait from "file:///Users/chancecordelia/Documents/Projects/farmers-ai-agent/flora/node_modules/.pnpm/vite-plugin-top-level-await@1.4.4_@swc+helpers@0.5.15_rollup@4.29.2_vite@5.4.11_@types+node@22.8.4_/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import react from "file:///Users/chancecordelia/Documents/Projects/farmers-ai-agent/flora/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.11_@types+node@22.8.4_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import wasm from "file:///Users/chancecordelia/Documents/Projects/farmers-ai-agent/flora/node_modules/.pnpm/vite-plugin-wasm@3.3.0_vite@5.4.11_@types+node@22.8.4_/node_modules/vite-plugin-wasm/exports/import.mjs";
import { config } from "file:///Users/chancecordelia/Documents/Projects/farmers-ai-agent/flora/node_modules/.pnpm/dotenv@16.4.7/node_modules/dotenv/lib/main.js";
var __vite_injected_original_dirname = "/Users/chancecordelia/Documents/Projects/farmers-ai-agent/flora/client";
config({ path: path.resolve(__vite_injected_original_dirname, "../.env") });
var vite_config_default = defineConfig({
  plugins: [wasm(), topLevelAwait(), react()],
  optimizeDeps: {
    exclude: ["onnxruntime-node", "@anush008/tokenizers"]
  },
  build: {
    commonjsOptions: {
      exclude: ["onnxruntime-node", "@anush008/tokenizers"]
    },
    rollupOptions: {
      external: ["onnxruntime-node", "@anush008/tokenizers"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${process.env.SERVER_PORT || 3e3}`,
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hhbmNlY29yZGVsaWEvRG9jdW1lbnRzL1Byb2plY3RzL2Zhcm1lcnMtYWktYWdlbnQvZmxvcmEvY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hhbmNlY29yZGVsaWEvRG9jdW1lbnRzL1Byb2plY3RzL2Zhcm1lcnMtYWktYWdlbnQvZmxvcmEvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaGFuY2Vjb3JkZWxpYS9Eb2N1bWVudHMvUHJvamVjdHMvZmFybWVycy1haS1hZ2VudC9mbG9yYS9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gXCJ2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXRcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB3YXNtIGZyb20gXCJ2aXRlLXBsdWdpbi13YXNtXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbmZpZyh7IHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLmVudlwiKSB9KTtcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFt3YXNtKCksIHRvcExldmVsQXdhaXQoKSwgcmVhY3QoKV0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgIGV4Y2x1ZGU6IFtcIm9ubnhydW50aW1lLW5vZGVcIiwgXCJAYW51c2gwMDgvdG9rZW5pemVyc1wiXSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgICAgICAgZXhjbHVkZTogW1wib25ueHJ1bnRpbWUtbm9kZVwiLCBcIkBhbnVzaDAwOC90b2tlbml6ZXJzXCJdLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogW1wib25ueHJ1bnRpbWUtbm9kZVwiLCBcIkBhbnVzaDAwOC90b2tlbml6ZXJzXCJdLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgIFwiL2FwaVwiOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlNFUlZFUl9QT1JUIHx8IDMwMDB9YCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ZLE9BQU8sVUFBVTtBQUNyWixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsY0FBYztBQUx2QixJQUFNLG1DQUFtQztBQU96QyxPQUFPLEVBQUUsTUFBTSxLQUFLLFFBQVEsa0NBQVcsU0FBUyxFQUFFLENBQUM7QUFHbkQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLEtBQUssR0FBRyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDMUMsY0FBYztBQUFBLElBQ1YsU0FBUyxDQUFDLG9CQUFvQixzQkFBc0I7QUFBQSxFQUN4RDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsaUJBQWlCO0FBQUEsTUFDYixTQUFTLENBQUMsb0JBQW9CLHNCQUFzQjtBQUFBLElBQ3hEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsb0JBQW9CLHNCQUFzQjtBQUFBLElBQ3pEO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3hDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLFFBQ0osUUFBUSxvQkFBb0IsUUFBUSxJQUFJLGVBQWUsR0FBSTtBQUFBLFFBQzNELGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQ2hEO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=

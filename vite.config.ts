import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. 强制使用相对路径，这对子目录部署 (/zt/) 至关重要
  base: './', 
  build: {
    // 2. 确保打包输出到 dist 目录
    outDir: 'dist',
    // 3. 确保清空旧文件
    emptyOutDir: true,
  },
  // 4. 定义环境变量，防止浏览器报错 "process is not defined"
  define: {
    'process.env': {}
  }
})
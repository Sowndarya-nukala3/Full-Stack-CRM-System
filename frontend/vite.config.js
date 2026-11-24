import {defineConfig,loadEnv} from 'vite';
export default defineConfig(({mode})=>{const env=loadEnv(mode,process.cwd(),'');const target=env.CRM_BACKEND_URL||'http://localhost:8081';return {server:{proxy:{'/api':{target,changeOrigin:true},'/login':{target,changeOrigin:true}}}}});

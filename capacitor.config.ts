import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'appcemex',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: "com.cemex.app",
    androidScheme: "https"
  }
};

export default config;

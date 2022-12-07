import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cemex.logistic.load.am.dev',
  appName: 'appcemex',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: "com.cemex.app",
    androidScheme: "https"
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;

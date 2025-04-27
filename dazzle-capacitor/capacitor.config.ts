import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const config: CapacitorConfig = {
  appId: 'com.merhmerh.dazzlegpt',
  appName: 'Dazzle GPT',
  webDir: 'public',
  server: {
    url: "https://dazzlegpt.mullion.io",
    // url: "http://192.168.1.50:5173",
    cleartext: true
  },
  appendUserAgent: "capacitor",
  plugins: {
    StatusBar: {
      overlayWebView: true,
    },
    Media: {
      androidGalleryMode: true
    }
  },
};

export default config;

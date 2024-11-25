declare namespace NodeJS {
  interface ProcessEnv {
      API_KEY: string;
      DB_USER: string;
      DB_PASSWORD: string;
      JWT_SECRET: string;
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
  }
}

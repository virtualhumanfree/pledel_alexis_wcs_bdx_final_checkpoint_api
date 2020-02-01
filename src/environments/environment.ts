export const environnment = {
  JWT_SECRET: process.env.SECRET,
  API_DB_USER: process.env.USER,
  API_DB_HOST: process.env.HOST,
  API_DB_PASSWORD: process.env.PASSWORD,
  // API_DB_PORT: process.env.PORT,
  DB_DATABASE: process.env.HACKATHON_API_DB_DATABASE,
  mailHost: 'smtp.ethereal.email',
  mailPort: 587,
  EMAIL: '"Kanopée Koncept" <kanopee@contact.com>',
  tokenHTML: 'http://localhost:3000/auth/confirmation/${token}',
};

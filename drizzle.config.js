/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:cZP3YSl6Lyof@ep-polished-resonance-a5kgs9f9.us-east-2.aws.neon.tech/hireprep-ai?sslmode=require',
    }
  };
import { Client } from "pg";

const ConnectDB = async () => {
        const connectionString = process.env.DB_URL;
        const pgClient = new Client({ connectionString });

        pgClient.connect()
            .then(() => console.log("Connected to the database"))
            .catch((err) => console.error("Database connection error:", err));
}

export default ConnectDB
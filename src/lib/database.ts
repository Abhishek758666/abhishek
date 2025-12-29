import { DataSource } from "typeorm";
import { Notes } from "@/entities/notes";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined");
}

export const AppDataSource = new DataSource({
	type: "postgres",
	url: DATABASE_URL,
	synchronize: true,
	logging: false,
	ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
	entities: [Notes],
	migrations: [],
	subscribers: [],
});

export const connectDatabase = async (): Promise<void> => {
	try {
		if (!AppDataSource.isInitialized) {
			await AppDataSource.initialize();
			console.log("Database connected");
		} else {
			console.log("Database already connected");
		}
	} catch (error) {
		console.error("Error connecting to database", error);
	}
};

import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const flights = pgTable("flights", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  flightNumber: text("flight_number").notNull(),
  airline: text("airline").notNull(),
  aircraft: text("aircraft").notNull(),
  status: text("status").notNull(),
  departureAirportCode: text("departure_airport_code").notNull(),
  departureAirportName: text("departure_airport_name").notNull(),
  arrivalAirportCode: text("arrival_airport_code").notNull(),
  arrivalAirportName: text("arrival_airport_name").notNull(),
  departureTime: text("departure_time").notNull(),
  arrivalTime: text("arrival_time").notNull(),
  departureTerminal: text("departure_terminal"),
  departureGate: text("departure_gate"),
  arrivalTerminal: text("arrival_terminal"),
  arrivalGate: text("arrival_gate"),
  duration: text("duration").notNull(),
  distance: text("distance"),
  altitude: text("altitude"),
  speed: text("speed"),
  date: text("date").notNull(),
  boardingTime: text("boarding_time"),
  baggageCarousel: text("baggage_carousel"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertFlightSchema = createInsertSchema(flights).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertFlight = z.infer<typeof insertFlightSchema>;
export type Flight = typeof flights.$inferSelect;

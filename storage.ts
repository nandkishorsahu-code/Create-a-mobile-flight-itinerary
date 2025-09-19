import { type User, type InsertUser, type Flight, type InsertFlight } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getFlight(id: string): Promise<Flight | undefined>;
  getAllFlights(): Promise<Flight[]>;
  createFlight(flight: InsertFlight): Promise<Flight>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private flights: Map<string, Flight>;

  constructor() {
    this.users = new Map();
    this.flights = new Map();
    
    // Initialize with sample flight data
    this.initializeFlights();
  }

  private async initializeFlights() {
    const sampleFlight: InsertFlight = {
      flightNumber: "BA 2156",
      airline: "British Airways",
      aircraft: "Boeing 737-800",
      status: "On Time",
      departureAirportCode: "LHR",
      departureAirportName: "London Heathrow",
      arrivalAirportCode: "CDG",
      arrivalAirportName: "Paris Charles de Gaulle",
      departureTime: "14:25",
      arrivalTime: "17:10",
      departureTerminal: "Terminal 3",
      departureGate: "Gate B12",
      arrivalTerminal: "Terminal 2E",
      arrivalGate: "Gate K15",
      duration: "2h 45m",
      distance: "341 mi",
      altitude: "39,000 ft",
      speed: "485 mph",
      date: "Today",
      boardingTime: "13:45",
      baggageCarousel: "Carousel 7",
    };
    
    await this.createFlight(sampleFlight);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getFlight(id: string): Promise<Flight | undefined> {
    return this.flights.get(id);
  }

  async getAllFlights(): Promise<Flight[]> {
    return Array.from(this.flights.values());
  }

  async createFlight(insertFlight: InsertFlight): Promise<Flight> {
    const id = randomUUID();
    const flight: Flight = { 
      ...insertFlight, 
      id,
      // Ensure optional fields are properly typed
      departureTerminal: insertFlight.departureTerminal || null,
      departureGate: insertFlight.departureGate || null,
      arrivalTerminal: insertFlight.arrivalTerminal || null,
      arrivalGate: insertFlight.arrivalGate || null,
      distance: insertFlight.distance || null,
      altitude: insertFlight.altitude || null,
      speed: insertFlight.speed || null,
      boardingTime: insertFlight.boardingTime || null,
      baggageCarousel: insertFlight.baggageCarousel || null,
    };
    this.flights.set(id, flight);
    return flight;
  }
}

export const storage = new MemStorage();

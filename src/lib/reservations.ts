export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  status: "confirmed" | "pending" | "cancelled";
  createdAt: string;
}

// In-memory store (replace with a real database in production)
const reservations: Reservation[] = [];

export function getReservations(): Reservation[] {
  return [...reservations].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getReservationsByDate(date: string): Reservation[] {
  return reservations.filter((r) => r.date === date && r.status !== "cancelled");
}

export function getUpcomingReservations(): Reservation[] {
  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];
  return reservations
    .filter((r) => r.date >= todayStr && r.status !== "cancelled")
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
}

export function addReservation(
  data: Omit<Reservation, "id" | "status" | "createdAt">
): Reservation {
  const reservation: Reservation = {
    ...data,
    id: crypto.randomUUID(),
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };
  reservations.push(reservation);
  return reservation;
}

export function getReservationById(id: string): Reservation | undefined {
  return reservations.find((r) => r.id === id);
}

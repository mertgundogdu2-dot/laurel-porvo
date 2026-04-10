import { addReservation, getUpcomingReservations } from "@/lib/reservations";

export async function GET() {
  const reservations = getUpcomingReservations();
  return Response.json({ reservations });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, date, time, guests, notes } = body;

  if (!name || !email || !phone || !date || !time || !guests) {
    return Response.json(
      { error: "Tüm zorunlu alanları doldurunuz." },
      { status: 400 }
    );
  }

  const reservation = addReservation({
    name,
    email,
    phone,
    date,
    time,
    guests: Number(guests),
    notes,
  });

  return Response.json({ reservation }, { status: 201 });
}

import Anthropic from "@anthropic-ai/sdk";
import { businessInfo } from "@/lib/business-info";
import { getUpcomingReservations } from "@/lib/reservations";

const anthropic = new Anthropic();

const SYSTEM_PROMPT = `Sen Laurel İstanbul'un yapay zeka asistanısın. Misafirlere yardımcı, sıcak ve profesyonel bir şekilde yanıt veriyorsun. Türkçe konuşuyorsun ama İngilizce soru gelirse İngilizce yanıt verebilirsin.

İşte işletme hakkındaki bilgiler:
${businessInfo}

GÜNCEL REZERVASYONLAR:
{{RESERVATIONS}}

Görevlerin:
1. İşletme hakkında soruları yanıtla (menü, çalışma saatleri, konum, özellikler vb.)
2. Menü önerileri yap
3. Rezervasyon bilgilerini paylaş (müşteri adı verilirse ilgili rezervasyonu bul)
4. Misafirleri sıcak karşıla ve Laurel İstanbul deneyimini tanıt

Kurallar:
- Kısa ve öz yanıtlar ver, gereksiz uzatma
- Fiyat bilgisi verirken ₺ sembolü kullan
- Bilmediğin bir şey sorulursa dürüst ol ve telefon numarasını yönlendir
- Emoji kullanımını minimal tut
- Her zaman nazik ve davetkar ol`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  if (!messages || !Array.isArray(messages)) {
    return Response.json({ error: "Mesaj gerekli." }, { status: 400 });
  }

  const reservations = getUpcomingReservations();
  const reservationText =
    reservations.length > 0
      ? reservations
          .map(
            (r) =>
              `- ${r.name} | ${r.date} ${r.time} | ${r.guests} kişi | ${r.phone} | Durum: ${r.status}`
          )
          .join("\n")
      : "Henüz rezervasyon bulunmuyor.";

  const systemPrompt = SYSTEM_PROMPT.replace(
    "{{RESERVATIONS}}",
    reservationText
  );

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  return Response.json({ message: text });
}

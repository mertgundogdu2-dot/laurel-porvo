import Anthropic from "@anthropic-ai/sdk";
import { businessInfo } from "@/lib/business-info";

const anthropic = new Anthropic();

const SYSTEM_PROMPT = `Sen Porvo'nun yapay zeka asistanısın. Misafirlere yardımcı, sıcak ve profesyonel bir şekilde yanıt veriyorsun. Türkçe konuşuyorsun ama İngilizce soru gelirse İngilizce yanıt verebilirsin.

İşte işletme hakkındaki bilgiler:
${businessInfo}

Görevlerin:
1. İşletme hakkında soruları yanıtla (menü, şubeler, konum, özellikler vb.)
2. Porvo Burger, Porvo Trattoria ve Porvo Kahve Dükkanı hakkında bilgi ver
3. Her markanın iletişim bilgilerini paylaş
4. Misafirleri sıcak karşıla ve Porvo deneyimini tanıt

Kurallar:
- Kısa ve öz yanıtlar ver, gereksiz uzatma
- Fiyat bilgisi verirken ₺ sembolü kullan
- Bilmediğin bir şey sorulursa dürüst ol ve telefon numaralarını yönlendir
- Emoji kullanımını minimal tut
- Her zaman nazik ve davetkar ol`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  if (!messages || !Array.isArray(messages)) {
    return Response.json({ error: "Mesaj gerekli." }, { status: 400 });
  }

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  return Response.json({ message: text });
}

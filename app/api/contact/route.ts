import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(2).max(160),
  projectType: z.enum(["arquitectura", "auditoria", "cto", "modernizacion"]),
  message: z.string().trim().min(20).max(5000),
});

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "El cuerpo de la solicitud no contiene JSON válido." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Revisa los datos del formulario e inténtalo de nuevo.",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form is unavailable: email service environment is incomplete.");
    return NextResponse.json(
      { ok: false, error: "El formulario no está disponible temporalmente. Escríbeme más tarde." },
      { status: 503 },
    );
  }

  const { name, email, company, projectType, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `ARNOLDCODE <${sender}>`,
      to: [recipient],
      replyTo: email,
      subject: "Nueva consulta desde ARNOLDCODE",
      html: `
        <h1>Nueva consulta desde ARNOLDCODE</h1>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
        <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Contact email provider rejected the message:", error);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar tu mensaje. Inténtalo de nuevo más tarde." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { ok: true, message: "Mensaje enviado correctamente." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar tu mensaje. Inténtalo de nuevo más tarde." },
      { status: 502 },
    );
  }
}

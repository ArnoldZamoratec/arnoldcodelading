"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Necesito tu nombre.").max(120),
  email: z.string().trim().email("Ingresa un email válido.").max(254),
  company: z.string().trim().min(2, "Cuéntame la empresa.").max(160),
  projectType: z.string().min(2, "Selecciona un tipo de proyecto."),
  message: z.string().trim().min(20, "Escribe un poco más sobre tu situación.").max(5000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Revisa los datos del formulario.");
        return;
      }

      reset();
      setStatus("success");
      setFeedback(data.message ?? "Gracias, te responderé en breve.");
    } catch {
      setStatus("error");
      setFeedback("Hubo un problema al enviar el formulario. Inténtalo de nuevo.");
    }
  }

  return (
    <div id="contact" className="scroll-mt-24 rounded-[2rem] border border-[#e5e1d7] bg-[#fffdf8] p-6 shadow-sm shadow-[#766f5e]/5 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Contacto</p>
        <h3 className="mt-3 text-2xl font-semibold text-[#202720]">Cuéntame el contexto técnico</h3>
      </div>

      <form
        aria-label="Formulario de contacto"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-[#3f4941]">
            Nombre
            <input
              {...register("name")}
              id="contact-name"
              autoComplete="name"
              maxLength={120}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className="w-full rounded-xl border border-[#d7d3c9] bg-white px-3 py-2.5 text-[#202720] outline-none placeholder:text-[#858b82] focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              placeholder="Tu nombre"
            />
            {errors.name ? <span id="contact-name-error" className="block text-xs text-red-700">{errors.name.message}</span> : null}
          </label>

          <label className="space-y-2 text-sm text-[#3f4941]">
            Email
            <input
              {...register("email")}
              id="contact-email"
              type="email"
              autoComplete="email"
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className="w-full rounded-xl border border-[#d7d3c9] bg-white px-3 py-2.5 text-[#202720] outline-none placeholder:text-[#858b82] focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              placeholder="tu@empresa.com"
            />
            {errors.email ? <span id="contact-email-error" className="block text-xs text-red-700">{errors.email.message}</span> : null}
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-[#3f4941]">
            Empresa
            <input
              {...register("company")}
              id="contact-company"
              autoComplete="organization"
              maxLength={160}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "contact-company-error" : undefined}
              className="w-full rounded-xl border border-[#d7d3c9] bg-white px-3 py-2.5 text-[#202720] outline-none placeholder:text-[#858b82] focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              placeholder="Nombre de la empresa"
            />
            {errors.company ? <span id="contact-company-error" className="block text-xs text-red-700">{errors.company.message}</span> : null}
          </label>

          <label className="space-y-2 text-sm text-[#3f4941]">
            Tipo de necesidad
            <select
              {...register("projectType")}
              id="contact-project-type"
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={errors.projectType ? "contact-project-type-error" : undefined}
              className="w-full rounded-xl border border-[#d7d3c9] bg-white px-3 py-2.5 text-[#202720] outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona
              </option>
              <option value="arquitectura">Arquitectura y diseño técnico</option>
              <option value="auditoria">Auditoría técnica</option>
              <option value="cto">CTO fractional</option>
              <option value="modernizacion">Modernización legacy</option>
            </select>
            {errors.projectType ? <span id="contact-project-type-error" className="block text-xs text-red-700">{errors.projectType.message}</span> : null}
          </label>
        </div>

        <label className="space-y-2 text-sm text-[#3f4941]">
          ¿Qué cambio, entrega o incidencia está atascada?
          <textarea
            {...register("message")}
            id="contact-message"
            rows={5}
            maxLength={5000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="w-full rounded-xl border border-[#d7d3c9] bg-white px-3 py-2.5 text-[#202720] outline-none placeholder:text-[#858b82] focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
            placeholder="Qué se intentaba entregar, qué parte del sistema intervino, qué ocurrió y qué impacto tiene. No incluyas datos confidenciales."
          />
          {errors.message ? <span id="contact-message-error" className="block text-xs text-red-700">{errors.message.message}</span> : null}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando..." : "Enviar consulta técnica"}
          {!isSubmitting ? <ArrowRight className="h-4 w-4" /> : null}
        </button>

        {status !== "idle" ? (
          <div
            role="status"
            aria-live="polite"
            className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
              status === "success" ? "border-emerald-700/20 bg-emerald-50 text-emerald-950" : "border-red-700/20 bg-red-50 text-red-900"
            }`}
          >
            {status === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4" /> : null}
            <span>{feedback}</span>
          </div>
        ) : null}
      </form>
    </div>
  );
}

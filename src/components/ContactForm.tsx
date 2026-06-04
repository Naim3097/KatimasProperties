"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { IconArrowRight, IconCheck } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink placeholder:text-muted/60 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-line bg-sand px-8 py-16 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="display mt-6 text-2xl text-ink">Thank you for reaching out</h3>
        <p className="mt-3 max-w-sm text-pretty text-muted">
          We have received your message and a member of our team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-9"
      noValidate
    >
      {/* Honeypot — hidden from users, catches bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Name <span className="text-clay">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={fieldBase} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
            Contact Number
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 012-345 6789" className={fieldBase} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email <span className="text-clay">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldBase} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
            Message <span className="text-clay">*</span>
          </label>
          <textarea id="message" name="message" required rows={5} placeholder="How can we help?" className={cn(fieldBase, "resize-y")} />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-clay/10 px-4 py-3 text-sm text-clay" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
      <p className="mt-4 text-xs text-muted">
        Fields marked <span className="text-clay">*</span> are required.
      </p>
    </form>
  );
}

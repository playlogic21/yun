"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    // TODO: API 연동 시 여기서 fetch / Server Action 호출
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="mx-auto mt-10 max-w-md space-y-3">
      <form
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        onSubmit={handleSubmit}
      >
        <label htmlFor="join-email" className="sr-only">
          이메일
        </label>
        <input
          id="join-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "success") setStatus("idle");
          }}
          placeholder="name@email.com"
          autoComplete="email"
          className="h-11 flex-1 rounded-lg border border-input bg-background px-4 text-sm shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
        />
        <Button type="submit" className="h-11 shrink-0 px-6 sm:w-auto">
          알림 받기
        </Button>
      </form>
      {status === "success" ? (
        <p
          className="text-center text-sm text-emerald-600 dark:text-emerald-400"
          role="status"
        >
          등록되었습니다. 메일함을 확인해 주세요.
        </p>
      ) : null}
    </div>
  );
}

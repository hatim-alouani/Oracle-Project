"use client";

export default function Toast({ msg, type }: { msg: string; type: "ok" | "err" }) {
  return (
    <div
      className={[
        "rounded px-4 py-3 text-sm font-semibold",
        type === "ok" ? "bg-green-600 text-white" : "bg-red-600 text-white",
      ].join(" ")}
    >
      {msg}
    </div>
  );
}

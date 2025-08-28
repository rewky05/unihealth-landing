import type { IncomingMessage, ServerResponse } from "http";
import { z } from "zod";
import { insertWaitlistSchema } from "../shared/schema";
import { storage } from "../server/storage";

export default async function handler(req: IncomingMessage & { method?: string; body?: any }, res: ServerResponse & { status?: (code: number) => any; setHeader: (name: string, value: string) => void; end: (data?: any) => void }) {
  // Minimal helpers to keep Node http signature portable on Vercel
  const sendJson = (code: number, payload: unknown) => {
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(payload));
  };

  try {
    if (req.method === "GET") {
      const entries = await storage.getWaitlistEntries();
      return sendJson(200, entries);
    }

    if (req.method === "POST") {
      // Body may already be parsed on Vercel; if not, accumulate
      const body: any = await new Promise((resolve, reject) => {
        if ((req as any).body) return resolve((req as any).body);
        let data = "";
        req.on("data", (chunk) => (data += chunk));
        req.on("end", () => {
          try {
            resolve(data ? JSON.parse(data) : {});
          } catch (e) {
            reject(e);
          }
        });
        req.on("error", reject);
      });

      try {
        const validated = insertWaitlistSchema.parse(body);
        const entry = await storage.addToWaitlist(validated);
        return sendJson(200, { success: true, id: entry.id });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return sendJson(400, { success: false, message: "Invalid data", errors: error.errors });
        }
        return sendJson(500, { success: false, message: "Failed to join waitlist" });
      }
    }

    // Method not allowed
    res.statusCode = 405;
    res.setHeader("Allow", "GET, POST");
    return res.end();
  } catch (err) {
    return sendJson(500, { success: false, message: "Server error" });
  }
}



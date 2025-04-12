import { Weight } from "@/types/pet";

export async function GET() {
    const graphData = [
        { date: '2025-04-01', Loki: 3.3, Luci: 3.5, Jiji: 3.3 },
        { date: '2025-04-02', Loki: 3.7, Luci: 3.7, Jiji: 3.4 },
        { date: '2025-04-03', Loki: 3.6, Luci: 3.6, Jiji: 3.3 },
        { date: '2025-04-04', Loki: null, Luci: 3.7, Jiji: 3.3 },
        { date: '2025-04-05', Loki: null, Luci: 3.8, Jiji: null },
      ];

      return new Response(JSON.stringify(graphData), {
        headers: { 'Content-Type': 'application/json' },
      });
  }
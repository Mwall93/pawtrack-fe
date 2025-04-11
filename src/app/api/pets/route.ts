import { Pet } from "@/types/pet";

export async function GET() {
    const pets: Pet[] = [
      { id: '1', name: 'Loki', breed: 'Cow', age: 3 },
      { id: '2', name: 'Luci', breed: 'Little Eyes', age: 3 },
      { id: '5', name: 'Jiji', breed: 'Rat Tail', age: 5 },
    ];
  
    return new Response(JSON.stringify(pets), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
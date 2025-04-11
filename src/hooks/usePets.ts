import { Pet } from "@/types/pet";
import { useEffect, useState } from "react";

export const usePets = () => {
  // Placeholder for the usePets hook
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

  const fetchPets = async () => {
    try {
        const response = await fetch("/api/pets");
        if (!response.ok) {
            throw new Error("Failed to fetch pets");
        }
        const data: Pet[] = await response.json();
        setPets(data);
    } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
        setLoading(false);
    }
  };
    fetchPets();
  }
  , []);

  return {pets, loading, error};
}
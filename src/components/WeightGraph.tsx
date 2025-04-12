'use client'
import { usePets, useAllPetWeights } from "@/hooks/usePets";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockDataLoki = [
    { date: '2025-04-01', weight: 3.3 },
    { date: '2025-04-02', weight: 3.7 },
    { date: '2025-04-03', weight: 3.6 },
  ];

  const mockDataLuci = [
    { date: '2025-04-01', weight: 3.5 },
    { date: '2025-04-02', weight: 3.7 },
    { date: '2025-04-03', weight: 3.6 },
    { date: '2025-04-05', weight: 3.8 },
  ];

  const mockDataJiji = [
    { date: '2025-04-01', weight: 3.3 },
    { date: '2025-04-02', weight: 3.4 },
    { date: '2025-04-03', weight: 3.3 },
    { date: '2025-04-04', weight: 3.3 },

  ];

  const allDates = Array.from(
    new Set([
      ...mockDataLoki.map((item) => item.date),
      ...mockDataLuci.map((item) => item.date),
      ...mockDataJiji.map((item) => item.date),
    ])
  ).sort();
  
  const combinedMockData = allDates.map((date) => ({
    date,
    Loki: mockDataLoki.find((entry) => entry.date === date)?.weight || null,
    Luci: mockDataLuci.find((entry) => entry.date === date)?.weight || null,
    Jiji: mockDataJiji.find((entry) => entry.date === date)?.weight || null,
  }));

export const WeightGraph = () => {
    // Placeholder for the weight graph component
    const pets = usePets();
    const {weights, loading, error} = useAllPetWeights();
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Pet Weights</h3>
        <>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weights}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis type="number" 
                allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="Loki" stroke="#40e0d0" connectNulls={true}/>
                <Line type="monotone" dataKey="Luci" stroke="#FFA500" connectNulls={true}/>
                <Line type="monotone" dataKey="Jiji" stroke="#c30010" connectNulls={true}/>
            </LineChart>
        </ResponsiveContainer>
        </>
      </div>
    );
  }
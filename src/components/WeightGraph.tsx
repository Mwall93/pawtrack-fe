'use client'
import { usePets, useAllPetWeights } from "@/hooks/usePets";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const WeightGraph = () => {
    // Placeholder for the weight graph component
    const pets = usePets();
    const {weights, loading, error} = useAllPetWeights();
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Pet Weights</h3>
        <>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={Object.entries(weights).map(([key, value]) => ({ date: key, ...value }))}>
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
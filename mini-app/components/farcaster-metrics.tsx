"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function FarcasterMetrics() {
  const [metrics, setMetrics] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Placeholder: fetch metrics from an API or use mock data
    const mock = {
      "Total Casts": 1234,
      "Active Users": 567,
      "Top Hashtags": 89,
    };
    setMetrics(mock);
  }, []);

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Farcaster User Metrics</CardTitle>
        <CardDescription>Insights similar to Dune, but for Farcaster.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {Object.entries(metrics).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span>{key}</span>
              <span className="font-medium">{value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end">
          <Button variant="outline">Refresh</Button>
        </div>
      </CardContent>
    </Card>
  );
}

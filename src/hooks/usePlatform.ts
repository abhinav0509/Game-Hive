import { useState, useEffect } from "react";
import { CanceledError } from "axios";

import apiClient from "../services/api-client";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/platforms/lists/parents", { signal: controller.signal })
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    console.log(platforms);
  }, []);
  return { platforms, error };
};

export default usePlatforms;

const TMDB_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export const fetchTMDB = async (endpoint: string) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMDB_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.status_message || 'Failed to fetch');
    }
    
    const data = await res.json();
    
    return data;

  } catch (err: unknown) {
    if (err instanceof Error) throw err;
    throw new Error('Network error');
  }
};
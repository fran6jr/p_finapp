import { useState, useEffect } from "react";


function useFetchGit(login) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((release) => release.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  return {data, loading, error};
}

export default useFetchGit;
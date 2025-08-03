
import fetchUserData from '../services/githubService'; // ✅ default import

const Search = () => {
  // ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const data = await fetchUserData({ username, location, minRepos }); // ✅ corrected call
      setUsers(data.items || []);
      if (!data.items.length) {
        setError('Looks like we cant find the user');
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };
  // ...
};

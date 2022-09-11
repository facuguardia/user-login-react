import { useAuth } from "../context/AuthContext";

export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
      <div className="flex items-center justify-end">
        <button
          onClick={handleLogout}
          className="bg-slate-200 hover:bg-slate-300 rounded py-1 px-1 text-black my-2 text-sm"
        >
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>
        <div className="flex items-center justify-center p-6">
        <h1 className="text-xl mb-4">
          Welcome {user.displayName || user.email}
        </h1>
        </div>
      </div>
    </div>
  );
}

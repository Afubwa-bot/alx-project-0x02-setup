import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {User} from "@/interfaces";

  const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Head>
        <title>Users Page</title>
        <meta name="description" content="Displaying a list of users" />
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center bg-gray-50 p-4 pt-20">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">Our Users</h1>
        {loading && <p className="text-lg text-gray-600">Loading users...</p>}
        {error && <p className="text-lg text-red-500">Error: {error}</p>}
        {!loading && !error && users.length === 0 && (
          <p className="text-lg text-gray-600">No users found.</p>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </>
  );
};

export default UsersPage;

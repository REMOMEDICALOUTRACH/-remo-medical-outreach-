import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-3xl text-red-700 font-bold mb-4">Thank You for Registering!</h1>
      <p className="text-lg mb-6">
        Your seat has been reserved for the 1st Remo Public Health & Industrial Accountability Colloquium.
      </p>
      <a
        href="/downloads/SPECIAL_INVITE.png"
        download
        className="bg-red-700 text-white px-6 py-3 rounded-lg mb-4"
      >
        Download Invite Flyer
      </a>
      <Link href="/" className="text-red-600 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}

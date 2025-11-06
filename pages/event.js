import Link from 'next/link';

export default function Event() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-red-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          1st Remo Public Health & Industrial Accountability Colloquium
        </h1>
        <p className="max-w-2xl mx-auto">
          Safeguarding Community Health: Strengthening Corporate and Government Accountability on Industrial Effluent Discharge.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <img
          src="/downloads/SPECIAL_INVITE.png"
          alt="Event Flyer"
          className="rounded-lg shadow-lg mx-auto mb-8 w-full max-w-md"
        />
        <p className="text-lg mb-6">
          Join us for this landmark public health and accountability colloquium bringing together CEOs, policy makers, and leaders.
        </p>
        <Link
          href="/event-register"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Register Now
        </Link>
      </section>
    </main>
  );
}

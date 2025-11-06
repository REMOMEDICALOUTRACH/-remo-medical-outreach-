export default function EventRegister() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-red-700 mb-8">Event Registration</h1>
      <form
        action="https://formspree.io/f/mvgpylvp"
        method="POST"
        className="bg-gray-50 shadow-md p-8 rounded-lg w-full max-w-md"
      >
        <input type="hidden" name="_next" value="https://remomedicaloutreach.org/thank-you" />
        <label className="block mb-4">
          <span className="block mb-1">Full Name</span>
          <input type="text" name="name" required className="w-full border rounded p-2" />
        </label>
        <label className="block mb-4">
          <span className="block mb-1">Email Address</span>
          <input type="email" name="email" required className="w-full border rounded p-2" />
        </label>
        <label className="block mb-4">
          <span className="block mb-1">Phone Number</span>
          <input type="text" name="phone" className="w-full border rounded p-2" />
        </label>
        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-3 rounded-lg w-full"
        >
          Submit Registration
        </button>
      </form>
    </main>
  );
}

"use client";

export default function ParticipatePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Participate Page</h1>

      <p className="mt-2">Yaha student participate karega 👇</p>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 w-full"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 w-full"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
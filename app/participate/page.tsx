"use client";

import { Trophy, Users, Clock, ShieldCheck } from "lucide-react";

export default function ParticipatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">

      {/* 🔷 HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <span className="px-4 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
          National Level Competition
        </span>

        <h1 className="text-4xl font-bold mt-4 text-gray-800">
          Participate in Disaster Awareness Program
        </h1>

        <p className="text-gray-600 mt-2">
          Showcase your knowledge, improve safety awareness, and win exciting rewards.
        </p>
      </div>

      {/* 🔶 CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* 🧠 Competition Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="flex items-center gap-4">
            <Trophy className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Prize Pool</p>
              <p className="font-semibold">₹10,000 + Certificates</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Users className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Participants</p>
              <p className="font-semibold">1200+ Students</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Deadline</p>
              <p className="font-semibold">15 Days Left</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Level</p>
              <p className="font-semibold">National Level</p>
            </div>
          </div>

        </div>

        {/* 📝 FORM */}
        <form className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <input
            type="text"
            placeholder="School / College Name"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <select className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option>Select Competition Type</option>
            <option>Quiz Competition</option>
            <option>Video Challenge</option>
            <option>Safety Audit</option>
          </select>

          <textarea
            placeholder="Why do you want to participate?"
            rows={4}
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* 🚀 BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Submit Participation 🚀
          </button>

        </form>
      </div>

    </div>
  );
}
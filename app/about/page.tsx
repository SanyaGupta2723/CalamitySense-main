export default function About(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      
      <h1 className="text-4xl font-bold text-green-400 mb-6">
        About CalamitySense
      </h1>

      <p className="mb-4 text-lg">
        CalamitySense is a platform designed to build disaster-resilient
        communities by spreading awareness and providing essential resources.
      </p>

      {/* Mission */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-300 mb-2">
          Our Mission
        </h2>
        <p>
          To educate students, teachers, and communities about disaster
          preparedness and safety using modern technology.
        </p>
      </section>

      {/* Features */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-300 mb-2">
          Features
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Disaster awareness content</li>
          <li>Educational resources</li>
          <li>Community engagement tools</li>
          <li>Early safety guidance</li>
        </ul>
      </section>

      {/* Creator */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-300 mb-2">
          Created By
        </h2>
        <p>Sanya 💻</p>
      </section>

    </div>
  );
}
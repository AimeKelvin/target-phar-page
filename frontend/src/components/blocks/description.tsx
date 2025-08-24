import { FC } from "react";

const Description: FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a1a2f] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Our Story */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold tracking-wide mb-4 relative">
            OUR STORY
            <span className="block w-14 h-[3px] bg-emerald-400 mt-2"></span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Target complex started 2012 in Musanze city, Rwanda. It started with a
            retail pharmacy (Iraguha pharmacy) with 3 employees, which is a retail
            store selling prescription and non-prescription drugs to the general public.
            <br /><br />
            With excellent service to the public and hardworking, Iraguha pharmacy
            became the most known pharmacy in the whole city, and this led to the
            opening of a para-pharmaceutical company (health target) in 2018,
            which is a retail store selling all non-medicinal products sold in pharmacies.
            <br /><br />
            Through the popularity of Iraguha pharmacy and excellent service it
            also became popular in the whole city. The success of both the
            parapharmacy and retail pharmacy led to the opening of a wholesale
            company (target para and pharmaceutical wholesale ltd), in the capital
            city of Rwanda Kigali.
            <br /><br />
            The wholesale company supplies para and pharmaceutical products to the
            whole country. With the success of the three we are intending to open
            a clinic and a manufacturing company in the coming days.
          </p>
        </div>

        {/* Right Column - Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-800/80 shadow-lg rounded-xl p-6 border border-emerald-600">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">MISSION</h3>
            <p className="text-gray-300 text-sm">
              To become worldwide’s leading private health company by providing
              healthy and quality life for patients/clients.
            </p>
          </div>

          <div className="bg-gray-800/80 shadow-lg rounded-xl p-6 border border-emerald-600">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">OUR GOALS</h3>
            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
              <li>Improve access to quality, safety, and efficacy health commodities.</li>
              <li>Life saving and life enhancing through best quality products.</li>
              <li>Develop enduring partnerships with different entities or suppliers.</li>
              <li>Deliver consistently great customer-centered service everywhere for all.</li>
            </ul>
          </div>

          <div className="bg-gray-800/80 shadow-lg rounded-xl p-6 border border-emerald-600">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">OUR MISSION</h3>
            <p className="text-gray-300 text-sm">
              In our work we use only the most modern, convenient, and
              innovative solutions.
            </p>
          </div>

          <div className="bg-gray-800/80 shadow-lg rounded-xl p-6 border border-emerald-600">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">OUR VALUES</h3>
            <p className="text-gray-300 text-sm">
              Patient-centered care, Competency, Community-minded, Leadership,
              Collaboration, Excellence, Professionalism, Continuous improvement.
            </p>
          </div>

          <div className="bg-gray-800/80 shadow-lg rounded-xl p-6 border border-emerald-600 sm:col-span-2">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">OUR SLOGAN</h3>
            <p className="text-gray-300 text-sm">
              Access to quality health commodities — life and wealth always,
              everywhere, for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

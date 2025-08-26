import React from "react";

export default function SectionFour() {
  return (
    <section className="section-four w-full h-screen font-mono flex flex-col items-center justify-center relative px-4 z-10">
      <div className="w-full max-w-10xl h-[1800px] mx-auto px-10">
        <div className="backdrop-blur-sm p-12">
          <h1 className="text-center font-bold text-6xl sm:text-7xl leading-tight mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            INF AI Application Suite
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Card 1 - ProWriter */}
            <div className="group bg-gradient-to-b from-blue-400 to-blue-600 h-[370px] text-white rounded-xl p-6 flex flex-col items-start w-full lg:w-1/4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                INF ProWriter
              </h3>
              <p className="text-sm mb-4 font-light leading-relaxed">
                Transform your ideas into polished, professional documents with
                our AI-powered writing assistant. Custom templates ensure
                consistency across all your business communications.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135670.png"
                alt="ProWriter"
                className="w-40 h-50 mx-auto transition-transform duration-300 group-hover:scale-110 mt-[1cm]"
              />
            </div>

            {/* Card 2 - Knowledge+ */}
            <div className="group bg-gradient-to-b from-indigo-400 to-indigo-600 h-[420px] text-white rounded-xl p-6 flex flex-col items-start w-full lg:w-1/4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                INF Knowledge+
              </h3>
              <p className="text-sm mb-4 font-light leading-relaxed">
                Intelligent knowledge retrieval system that connects insights
                across your documents and verified web sources. Never lose
                critical information again.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
                alt="Knowledge"
                className="w-40 h-40 mx-auto transition-transform duration-300 group-hover:scale-110 mt-[1.5cm]"
              />
            </div>

            {/* Card 3 - ChatBI */}
            <div className="group bg-gradient-to-b from-purple-400 to-purple-600 h-[470px] text-white rounded-xl p-6 flex flex-col items-start w-full lg:w-1/4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                INF ChatBI
              </h3>
              <p className="text-sm mb-4 font-light leading-relaxed">
                Your conversational data analyst. Ask natural questions about
                your business metrics and receive actionable insights with
                visualizations.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712108.png"
                alt="ChatBI"
                className="w-40 h-40 mx-auto transition-transform duration-300 group-hover:scale-110 mt-[2cm]"
              />
            </div>

            {/* Card 4 - DocReviewer */}
            <div className="group bg-gradient-to-b from-blue-400 to-blue-500 h-[370px] text-white rounded-xl p-6 flex flex-col items-start w-full lg:w-1/4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                INF DocReviewer
              </h3>
              <p className="text-sm mb-4 font-light leading-relaxed">
                Automated compliance checking and quality assurance for your
                documents. Ensures adherence to standards and identifies
                improvement areas.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135714.png"
                alt="DocReviewer"
                className="w-40 h-40 mx-auto transition-transform duration-300 group-hover:scale-110 mt-[1cm]"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4"></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-md">👋 About Us</h1>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Welcome to{" "}
          <span className="text-blue-400 font-semibold">Our News Platform</span>{" "}
          Welcome to your trusted destination for real-time headlines, top
          stories, and trending topics from across the globe. Designed for
          readers who seek accurate, unbiased, and up-to-the-minute information,
          our platform delivers a seamless digital news experience. From
          technology and politics to sports and international affairs, stay
          informed with the latest updates — powered by modern web technologies
          like Next.js and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              🚀 Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We bring you real-time updates from trusted sources across the
              globe, ensuring you are always informed. Whether it’s breaking
              headlines, tech breakthroughs, business trends, or entertainment
              scoops — everything is just one search away.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              💡 Our Vision
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our goal is simple: deliver accurate, fast-loading, and relevant
              news tailored to what matters to you. Built with cutting-edge
              technologies, our platform combines speed and simplicity, giving
              you the power to explore trending topics with ease.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl text-blue-400 font-semibold mb-2">
            🔗 Connect With Us
          </h3>
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:bantykr0205@gmail.com"
              className="text-blue-500 underline"
            >
              bantykr0205@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

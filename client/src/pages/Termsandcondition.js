import React from 'react';
import Layout from '../components/layout/Layout';

const TermsAndConditions = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Terms and Conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to our ecommerce website. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of the Website</h2>
          <p className="leading-relaxed">
            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content included on this site, such as text, graphics, logos, images, and software, is the property of our company or its content suppliers and protected by copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="leading-relaxed">
            We shall not be liable for any damages arising from the use or inability to use the materials on this site, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms and Conditions</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting to the site. Your continued use of the site following any such change constitutes your agreement to be bound by the modified terms and conditions.
          </p>
        </section>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Accept Terms
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;

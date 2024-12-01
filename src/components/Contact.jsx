import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci de m'avoir contacté ! Je vous répondrai bientôt.");
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-teal-400 mb-6 underline decoration-teal-500 decoration-4">
        Contactez-moi
      </h2>
      <form
        className="flex flex-col gap-6 w-full max-w-lg mx-auto shadow-lg p-6 bg-gray-800 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nom"
          className="p-4 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-teal-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-4 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-teal-400"
          required
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="p-4 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-teal-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-teal-400 text-black font-bold py-3 rounded-lg hover:bg-teal-500 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;

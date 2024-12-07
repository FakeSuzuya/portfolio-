//.------..------..------..------..------..------..------..------..------.     .------..------..------..------.
//|J.--. ||U.--. ||S.--. ||T.--. ||J.--. ||O.--. ||H.--. ||A.--. ||N.--. |.-.  |C.--. ||O.--. ||D.--. ||E.--. |
//| :(): || (\/) || :/\: || :/\: || :(): || :/\: || :/\: || (\/) || :(): ((5)) | :/\: || :/\: || :/\: || (\/) |
//| ()() || :\/: || :\/: || (__) || ()() || :\/: || (__) || :\/: || ()() |'-.-.| :\/: || :\/: || (__) || :\/: |
//| '--'J|| '--'U|| '--'S|| '--'T|| '--'J|| '--'O|| '--'H|| '--'A|| '--'N| ((1)) '--'C|| '--'O|| '--'D|| '--'E|
//`------'`------'`------'`------'`------'`------'`------'`------'`------'  '-'`------'`------'`------'`------'




import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", captcha: "" });
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [timer, setTimer] = useState(0);
  const [captchaQuestion, setCaptchaQuestion] = useState({ a: 0, b: 0 });

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptchaQuestion({ a, b });
    setFormData((prev) => ({ ...prev, captcha: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (formStep < 2) {
      setFormStep((prev) => prev + 1);
    } else {
      if (parseInt(formData.captcha) !== captchaQuestion.a + captchaQuestion.b) {
        alert("CAPTCHA incorrect. Veuillez réessayer.");
        generateCaptcha();
        return;
      }
      setSubmitted(true);
      setCooldown(true);
      setTimer(30); // Cooldown de 30 secondes
      setFormStep(0);
      setFormData({ name: "", email: "", message: "", captcha: "" });
    }
  };

  useEffect(() => {
    generateCaptcha();

    const globalStyles = document.createElement("style");
    globalStyles.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in { animation: fade-in 0.5s ease forwards; opacity: 0; }
      @keyframes success-message {
        0% { opacity: 0; transform: scale(0.9); }
        50% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
      .success { animation: success-message 1s ease forwards; }
    `;
    document.head.appendChild(globalStyles);
  }, []);

  useEffect(() => {
    if (cooldown && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0) setCooldown(false);
  }, [cooldown, timer]);

  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    animation: "fade-in 0.5s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "1rem",
    background: "#2d2d2d",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "1rem",
    backgroundColor: cooldown ? "#555" : "#00cec9",
    color: "black",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRadius: "50px",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    cursor: cooldown ? "not-allowed" : "pointer",
  };

  return (
    <section style={{ padding: "5rem 2rem", backgroundColor: "#1e1e1e", textAlign: "center" }} id="contact">
      <h2 style={{ fontSize: "2.5rem", color: "#ffffff", textShadow: "0 0 10px rgba(255, 255, 255, 0.3)", marginBottom: "2rem" }}>
        Contactez-moi
      </h2>

      {!submitted && (
        <>
          {formStep === 0 && (
            <form style={formStyle} onSubmit={handleNextStep}>
              <input
                type="text"
                name="name"
                placeholder="Votre Nom"
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <button type="submit" style={buttonStyle} disabled={cooldown}>
                Suivant
              </button>
            </form>
          )}

          {formStep === 1 && (
            <form style={formStyle} onSubmit={handleNextStep}>
              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit" style={buttonStyle} disabled={cooldown}>
                Suivant
              </button>
            </form>
          )}

          {formStep === 2 && (
            <form style={formStyle} onSubmit={handleNextStep}>
              <textarea
                name="message"
                placeholder="Votre Message"
                rows="4"
                style={inputStyle}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <p style={{ color: "#ffffff" }}>Combien font {captchaQuestion.a} + {captchaQuestion.b} ?</p>
                <input
                  type="number"
                  name="captcha"
                  style={inputStyle}
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" style={buttonStyle} disabled={cooldown}>
                Envoyer
              </button>
            </form>
          )}
        </>
      )}

      {submitted && (
        <p style={{ color: "#4fd1c5", marginTop: "1rem" }} className="success">
          Merci {formData.name}, j'ai bien reçu votre message ! Je vous répondrai sous peu.
        </p>
      )}

      {/* Cooldown Timer */}
      {cooldown && <p style={{ color: "#ff6b6b", marginTop: "1rem" }}>Veuillez patienter {timer} secondes avant de soumettre un nouveau message.</p>}
    </section>
  );
};

export default Contact;




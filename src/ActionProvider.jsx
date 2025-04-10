class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleServices = () => {
    const message = this.createChatBotMessage(
      "We offer physiotherapy treatments including musculoskeletal rehab, post-surgical recovery, pain management, mobility therapy, and home physiotherapy sessions."
    );
    this.updateChatbotState(message);
  };

  handleAppointment = () => {
    const message = this.createChatBotMessage(
      "You can book an appointment by visiting our Contact page or calling us directly at +91-XXXXXXXXXX."
    );
    this.updateChatbotState(message);
  };

  handleHours = () => {
    const message = this.createChatBotMessage(
      "Our clinic operates from Monday to Saturday, 9:00 AM to 7:00 PM. We're closed on Sundays."
    );
    this.updateChatbotState(message);
  };

  handleLocation = () => {
    const message = this.createChatBotMessage(
      "We are located at  Road, Dumar Dagga, Krishna Pura, Ohdar Village, Buti, Jharkhand."
    );
    this.updateChatbotState(message);
  };

  handleHomeService = () => {
    const message = this.createChatBotMessage(
      "Yes, we do offer home physiotherapy services. Please contact us for availability and pricing."
    );
    this.updateChatbotState(message);
  };

  handlePreparation = () => {
    const message = this.createChatBotMessage(
      "No special preparations needed! Just wear comfortable clothing and bring any medical documents if available."
    );
    this.updateChatbotState(message);
  };

  handleInsurance = () => {
    const message = this.createChatBotMessage(
      "Insurance coverage may vary. Please consult your insurance provider to check if physiotherapy is covered under your plan."
    );
    this.updateChatbotState(message);
  };

  handleSessionDuration = () => {
    const message = this.createChatBotMessage(
      "A typical physiotherapy session lasts around 45 minutes to 1 hour."
    );
    this.updateChatbotState(message);
  };

  handleBackPain = () => {
    const message = this.createChatBotMessage(
      "Yes, physiotherapy can be very effective in treating chronic back pain through exercises, posture correction, and manual therapy."
    );
    this.updateChatbotState(message);
  };

  handleFirstVisit = () => {
    const message = this.createChatBotMessage(
      "On your first visit, bring any previous medical reports or prescriptions. Wear clothes that allow easy movement."
    );
    this.updateChatbotState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage(
      "You can contact us through our website's contact form or call us at +91 98351 31321."
    );
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm not sure I understand. Could you try rephrasing that?"
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

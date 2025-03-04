class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleServices = () => {
      const message = this.createChatBotMessage(
        "We offer website development, SEO, digital marketing, and branding services."
      );
      this.updateChatbotState(message);
    };
  
    handleProjects = () => {
      const message = this.createChatBotMessage(
        "Here are some of our projects: \n1. My Plumber UK\n2. Leak Proof Roofing\n3. Arch Outdoor\n4. MEZ Construction"
      );
      this.updateChatbotState(message);
    };
  
    handleScheduleMeeting = () => {
      const message = this.createChatBotMessage(
        "You can schedule a meeting by visiting: https://www.shrote.com/contact"
      );
      this.updateChatbotState(message);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "I'm not sure I understand. Can you ask in a different way?"
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
  
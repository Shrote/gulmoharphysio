class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("services")) {
      this.actionProvider.handleServices();
    } else if (
      lowerCaseMessage.includes("book") ||
      lowerCaseMessage.includes("appointment") ||
      lowerCaseMessage.includes("schedule")
    ) {
      this.actionProvider.handleAppointment();
    } else if (
      lowerCaseMessage.includes("time") ||
      lowerCaseMessage.includes("hours") ||
      lowerCaseMessage.includes("open") ||
      lowerCaseMessage.includes("timing")
    ) {
      this.actionProvider.handleHours();
    } else if (
      lowerCaseMessage.includes("location") ||
      lowerCaseMessage.includes("address") ||
      lowerCaseMessage.includes("where")
    ) {
      this.actionProvider.handleLocation();
    } else if (
      lowerCaseMessage.includes("home visit") ||
      lowerCaseMessage.includes("home service")
    ) {
      this.actionProvider.handleHomeService();
    } else if (
      lowerCaseMessage.includes("prepare") ||
      lowerCaseMessage.includes("preparation")
    ) {
      this.actionProvider.handlePreparation();
    } else if (lowerCaseMessage.includes("insurance")) {
      this.actionProvider.handleInsurance();
    } else if (
      lowerCaseMessage.includes("session") ||
      lowerCaseMessage.includes("duration") ||
      lowerCaseMessage.includes("how long")
    ) {
      this.actionProvider.handleSessionDuration();
    } else if (
      lowerCaseMessage.includes("back pain") ||
      lowerCaseMessage.includes("chronic pain")
    ) {
      this.actionProvider.handleBackPain();
    } else if (
      lowerCaseMessage.includes("first visit") ||
      lowerCaseMessage.includes("bring")
    ) {
      this.actionProvider.handleFirstVisit();
    } else if (lowerCaseMessage.includes("contact")) {
      this.actionProvider.handleContact();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;

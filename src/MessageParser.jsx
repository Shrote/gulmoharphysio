class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("services")) {
        this.actionProvider.handleServices();
      } else if (lowerCaseMessage.includes("projects")) {
        this.actionProvider.handleProjects();
      } else if (lowerCaseMessage.includes("meeting")) {
        this.actionProvider.handleScheduleMeeting();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  
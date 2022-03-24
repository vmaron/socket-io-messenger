export interface SocketEmail {
  eventId: string;
  eventTime: Date;
  correlationId: string;
  data: {
    messageId: string,
    sender: string;
    recipient: string;
    subject: string;
    attachments: Array<string>
  };
}

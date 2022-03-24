export interface SocketAlarm {
  eventId: string;
  eventTime: Date;
  correlationId?: string;
  data: {
    resourceId: string;
  };
}

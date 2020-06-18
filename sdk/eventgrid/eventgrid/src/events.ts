import { StorageBlobCreatedEventData } from "./generated/models";

export interface EventGridEvent<T> {
  /**
   * An unique identifier for the event.
   */
  id: string;
  /**
   * The resource path of the event source.
   */
  topic?: string;
  /**
   * A resource path relative to the topic path.
   */
  subject: string;
  /**
   * Event data specific to the event type.
   */
  data: T;
  /**
   * The type of the event that occurred.
   */
  eventType: string;
  /**
   * The time (in UTC) the event was generated.
   */
  eventTime: Date;
  /**
   * The schema version of the event metadata.
   */
  readonly metadataVersion?: string;
  /**
   * The schema version of the data object.
   */
  dataVersion: string;    
}

export function makeIsEventGridEvent<T>(eventType: string): (o: any) => o is EventGridEvent<T> {
    return function(o: any): o is EventGridEvent<T> {
        return o.eventType && o.eventType === eventType;
    }
}

export const isStorageBlobCreatedEvent = makeIsEventGridEvent<StorageBlobCreatedEventData>("Microsoft.Storage.BlobCreated");
import { installHandlers } from "./request-handler/request-event-handler/npm-command/install";
import { publishHandlers } from "./request-handler/request-event-handler/npm-command/publish";
import { viewHandlers } from "./request-handler/request-event-handler/npm-command/view";

export { createRequestHandler } from "./request-handler";
export { createRequestEventHandler } from "./request-handler/request-event-handler";
export { RequestEventHandler } from "./request-handler/request-event-handler/types";
export const requestEventHandlers = {
  install: installHandlers,
  view: viewHandlers,
  publish: publishHandlers,
};

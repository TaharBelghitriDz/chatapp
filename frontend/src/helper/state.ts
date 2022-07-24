import EventEmitter from "eventemitter3";

type eventsName = "start" | "end" | "getUserDetails";

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event: eventsName, fn: (args: any) => any) => eventEmitter.on(event, fn),

  off: (event: eventsName, fn: (args: any) => any) =>
    eventEmitter.off(event, fn),

  once: (event: eventsName, fn: (args: any) => any) =>
    eventEmitter.once(event, fn),

  emit: <T>(event: eventsName, payload?: T) =>
    eventEmitter.emit(event, payload),
};

Object.freeze(Emitter);

export default Emitter;

class EventBus {
  private events: { [key: string]: Function[] } = {};

  emit(event: string, data: any) {
    this.events[event]?.forEach((fn) => fn(data));
  }

  on(event: string, fn: Function) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(fn);
  }
}

export const eventBus = new EventBus();
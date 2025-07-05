type EventCallback = (data: any) => void;

class EventBus {
    private listeners: Map<string, Set<EventCallback>> = new Map();

    subscribeOne(chanel: string, callback: EventCallback): () => void {
        this.listeners.set(chanel, new Set());
        this.listeners.get(chanel)!.add(callback);

        return () => this.unsubscribe(chanel, callback);
    }

    subscribe(chanel: string, callback: EventCallback): () => void {
        if (!this.listeners.has(chanel)) {
            this.listeners.set(chanel, new Set());
        }
        this.listeners.get(chanel)!.add(callback);

        return () => this.unsubscribe(chanel, callback);
    }

    unsubscribe(chanel: string, callback: EventCallback): void {
        this.listeners.get(chanel)?.delete(callback);
        if (this.listeners.get(chanel)?.size === 0) {
            this.listeners.delete(chanel);
        }
    }

    emit<T extends unknown>(chanel: string, data?: T): void {
        this.listeners.get(chanel)?.forEach(callback => callback(data));
    }
}

export const eventBus = new EventBus();
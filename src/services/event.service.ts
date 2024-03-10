import Event, { EventInput, EventDocument } from '../models/event.models';

class EventService {
    public async createEvent(eventData: EventInput): Promise<EventDocument> {
        try {
            const event = await Event.create(eventData);
            return event;
        } catch (error) {
            throw error;
        }
    }

    public async getAllEvents(): Promise<EventDocument[]> {
        try {
            const events = await Event.find();
            return events;
        } catch (error) {
            throw error;
        }
    }

    public async updateEvent(userId: string, eventId: string, eventData: EventInput): Promise<EventDocument | null> {
        try {
            const event = await Event.findById(eventId);
            if (!event) {
                return null;
            }

            // Verificar si el usuario tiene permiso para editar el evento
            // Aquí puedes implementar lógica específica según tus requisitos de autorización

            const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, { new: true });
            return updatedEvent;
        } catch (error) {
            throw error;
        }
    }

    public async deleteEvent(userId: string, eventId: string): Promise<EventDocument | null> {
        try {
            const event = await Event.findById(eventId);
            if (!event) {
                return null;
            }

            // Verificar si el usuario tiene permiso para eliminar el evento
            // Aquí puedes implementar lógica específica según tus requisitos de autorización

            const deletedEvent = await Event.findByIdAndDelete(eventId);
            return deletedEvent;
        } catch (error) {
            throw error;
        }
    }
}

export default new EventService();

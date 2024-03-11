import Event, { EventInput, EventDocument } from '../models/event.models';
import User, { UserDocument } from '../models/user.models';

class EventService {

    public async getEventById(eventId: string): Promise<EventDocument | null> {
        try {
            const event = await Event.findById(eventId);
            return event;
        } catch (error) {
            throw error;
        }
    }
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

    public async getAttendees(eventId: string): Promise<String[]> {
        try {
            const event = await Event.findById(eventId);
            if (!event) {
                return [];
            }

            const attendeesIds = event.participants;

            const attendees = await User.find({ _id: { $in: attendeesIds } });

            return attendees.map((attendee) => attendee.email);
        

        } catch (error) {
            throw error;
        }
    }
}

export default new EventService();

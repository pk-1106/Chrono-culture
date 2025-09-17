import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  type: string;
  availability: 'available' | 'limited' | 'unavailable';
  attendees?: number;
  maxAttendees?: number;
}

interface UpcomingEventsProps {
  stateName: string;
  events: Event[];
}

const UpcomingEvents = ({ stateName, events }: UpcomingEventsProps) => {
  const [timeUntilEvents, setTimeUntilEvents] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date();
      const newCountdowns: Record<string, string> = {};

      events.forEach(event => {
        const eventDate = new Date(event.date);
        const timeDiff = eventDate.getTime() - now.getTime();

        if (timeDiff > 0) {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

          if (days > 0) {
            newCountdowns[event.id] = `${days} days, ${hours} hours`;
          } else if (hours > 0) {
            newCountdowns[event.id] = `${hours} hours, ${minutes} minutes`;
          } else {
            newCountdowns[event.id] = `${minutes} minutes`;
          }
        } else {
          newCountdowns[event.id] = 'Event started';
        }
      });

      setTimeUntilEvents(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [events]);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-heritage-emerald text-white';
      case 'limited':
        return 'bg-heritage-gold text-black';
      case 'unavailable':
        return 'bg-destructive text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'Available';
      case 'limited':
        return 'Limited Spots';
      case 'unavailable':
        return 'Fully Booked';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="w-full" aria-labelledby="upcoming-events-title">
      <h2 id="upcoming-events-title" className="text-2xl font-bold text-foreground mb-6">
        Upcoming Cultural Events in {stateName}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card 
            key={event.id}
            className="group hover:shadow-elegant transition-heritage bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-heritage-gold/30"
            role="article"
            aria-labelledby={`event-title-${event.id}`}
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge 
                  variant="secondary"
                  className="text-xs font-medium"
                  aria-label={`Event type: ${event.type}`}
                >
                  {event.type}
                </Badge>
                <Badge 
                  className={`text-xs ${getAvailabilityColor(event.availability)}`}
                  aria-label={`Availability: ${getAvailabilityText(event.availability)}`}
                >
                  {getAvailabilityText(event.availability)}
                </Badge>
              </div>
              
              <CardTitle 
                id={`event-title-${event.id}`}
                className="text-lg text-foreground group-hover:text-heritage-saffron transition-colors"
              >
                {event.name}
              </CardTitle>
              
              <CardDescription className="text-muted-foreground text-sm">
                {event.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0 space-y-3">
              {/* Countdown Timer */}
              <div className="bg-gradient-heritage rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock size={16} className="text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold text-sm">
                    Time Until Event
                  </span>
                </div>
                <div 
                  className="text-primary-foreground font-bold text-lg"
                  aria-live="polite"
                  aria-label={`Time remaining: ${timeUntilEvents[event.id] || 'Loading...'}`}
                >
                  {timeUntilEvents[event.id] || 'Loading...'}
                </div>
              </div>
              
              {/* Event Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} aria-hidden="true" />
                  <time dateTime={event.date}>
                    {new Date(event.date).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} aria-hidden="true" />
                  <span>{event.location}</span>
                </div>
                
                {event.attendees !== undefined && event.maxAttendees !== undefined && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} aria-hidden="true" />
                    <span>
                      {event.attendees} / {event.maxAttendees} attendees
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2 ml-2">
                      <div 
                        className="bg-heritage-saffron h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${Math.min((event.attendees / event.maxAttendees) * 100, 100)}%` 
                        }}
                        aria-label={`${Math.round((event.attendees / event.maxAttendees) * 100)}% capacity`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {events.length === 0 && (
        <Card className="bg-muted/50 border-dashed">
          <CardContent className="py-12 text-center">
            <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              No upcoming events scheduled for {stateName} at the moment.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Check back soon for new cultural events and festivals!
            </p>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default UpcomingEvents;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Globe, MapPin, Clock, ExternalLink } from "lucide-react";

interface ContactInfo {
  department: string;
  phone: string;
  email: string;
  website?: string;
  address: string;
  hours: string;
  services: string[];
}

interface ContactInfoProps {
  stateName: string;
  contacts: ContactInfo[];
}

const ContactInfo = ({ stateName, contacts }: ContactInfoProps) => {
  return (
    <section className="w-full" aria-labelledby="contact-info-title">
      <h2 id="contact-info-title" className="text-2xl font-bold text-foreground mb-6">
        Contact Information for {stateName}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <Card 
            key={index}
            className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-heritage-gold/30 transition-heritage"
            role="region"
            aria-labelledby={`contact-title-${index}`}
          >
            <CardHeader className="pb-4">
              <CardTitle 
                id={`contact-title-${index}`}
                className="text-lg text-foreground flex items-center gap-2"
              >
                <MapPin size={20} className="text-heritage-saffron" aria-hidden="true" />
                {contact.department}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Government services and cultural information
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-heritage-indigo flex-shrink-0" aria-hidden="true" />
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-foreground hover:text-heritage-saffron transition-colors"
                    aria-label={`Call ${contact.department} at ${contact.phone}`}
                  >
                    {contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-heritage-indigo flex-shrink-0" aria-hidden="true" />
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-foreground hover:text-heritage-saffron transition-colors break-all"
                    aria-label={`Email ${contact.department} at ${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </div>
                
                {contact.website && (
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-heritage-indigo flex-shrink-0" aria-hidden="true" />
                    <a 
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-heritage-saffron transition-colors flex items-center gap-1"
                      aria-label={`Visit ${contact.department} website (opens in new tab)`}
                    >
                      Official Website
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                )}
                
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-heritage-indigo flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <address className="text-foreground not-italic">
                    {contact.address}
                  </address>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-heritage-indigo flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground">{contact.hours}</span>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Services Available:</h3>
                <div className="flex flex-wrap gap-2">
                  {contact.services.map((service, serviceIndex) => (
                    <Badge 
                      key={serviceIndex}
                      variant="secondary"
                      className="text-xs bg-heritage-gold/20 text-heritage-indigo hover:bg-heritage-gold/30 transition-colors"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-heritage-saffron text-heritage-saffron hover:bg-heritage-saffron hover:text-white"
                  onClick={() => window.open(`tel:${contact.phone}`)}
                  aria-label={`Call ${contact.department}`}
                >
                  <Phone size={14} className="mr-2" aria-hidden="true" />
                  Call
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-heritage-indigo text-heritage-indigo hover:bg-heritage-indigo hover:text-white"
                  onClick={() => window.open(`mailto:${contact.email}`)}
                  aria-label={`Email ${contact.department}`}
                >
                  <Mail size={14} className="mr-2" aria-hidden="true" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Palette, 
  Utensils, 
  Music, 
  Camera, 
  Calendar,
  Users,
  Star,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import MediaGallery from "./MediaGallery";
import UpcomingEvents from "./UpcomingEvents";

// Import new images
import classicalDance from "@/assets/classical-dance-performance.jpg";
import streetFood from "@/assets/street-food-market.jpg";
import handicrafts from "@/assets/handicrafts-workshop.jpg";
import archaeological from "@/assets/archaeological-site.jpg";
import traditionalWedding from "@/assets/traditional-wedding.jpg";
import classicalMusic from "@/assets/classical-music-concert.jpg";
import festivalCelebration from "@/assets/festival-celebration.jpg";

interface SubtopicData {
  title: string;
  description: string;
  content: string[];
  media: Array<{
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption: string;
    title: string;
  }>;
  events: Array<{
    id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    type: string;
    availability: 'available' | 'limited' | 'unavailable';
    attendees?: number;
    maxAttendees?: number;
  }>;
}

interface DetailedStateContentProps {
  stateName: string;
  subtopic: string;
  icon: React.ReactNode;
}

const DetailedStateContent = ({ stateName, subtopic, icon }: DetailedStateContentProps) => {
  const [activeContentPage, setActiveContentPage] = useState(0);

  // Generate comprehensive subtopic data
  const getSubtopicData = (stateName: string, subtopic: string): SubtopicData => {
    const baseData = {
      traditions: {
        title: "Cultural Traditions",
        description: `Discover the rich traditional practices that have been passed down through generations in ${stateName}`,
        content: [
          `The traditional arts and customs of ${stateName} represent centuries of cultural evolution and community wisdom. These practices form the backbone of local identity and continue to thrive in modern times.`,
          
          `Folk traditions include storytelling sessions held under starlit skies, where elders pass down moral values and historical accounts through captivating narratives. The oral tradition encompasses epic tales, folklore, and ancestral stories.`,
          
          `Ceremonial practices mark important life events from birth to death, creating a continuous cycle of community participation. These rituals strengthen social bonds and preserve ancient knowledge systems.`,
          
          `Traditional crafts involve intricate skills passed from master to apprentice across generations. Each craft tells a story of innovation, necessity, and artistic expression unique to the regional culture.`,
          
          `Seasonal celebrations align with agricultural cycles and natural phenomena, demonstrating the deep connection between people and their environment. These festivals reinforce community unity and cultural continuity.`
        ],
        media: [
          {
            id: "1",
            type: "image" as const,
            src: classicalDance,
            alt: `Traditional classical dance performance in ${stateName}`,
            caption: "Graceful movements tell stories of gods, heroes, and moral lessons",
            title: "Classical Dance Heritage"
          },
          {
            id: "2",
            type: "image" as const,
            src: traditionalWedding,
            alt: `Traditional wedding ceremony in ${stateName}`,
            caption: "Sacred rituals unite families and communities in celebration",
            title: "Wedding Traditions"
          },
          {
            id: "3",
            type: "image" as const,
            src: handicrafts,
            alt: `Traditional handicraft workshop in ${stateName}`,
            caption: "Master craftsmen preserve ancient techniques and artistic traditions",
            title: "Artisan Heritage"
          },
          {
            id: "4",
            type: "image" as const,
            src: archaeological,
            alt: `Ancient archaeological site in ${stateName}`,
            caption: "Archaeological remains reveal the depth of cultural history",
            title: "Historical Foundations"
          },
          {
            id: "5",
            type: "image" as const,
            src: festivalCelebration,
            alt: `Traditional festival celebration in ${stateName}`,
            caption: "Colorful festivals bring communities together in joyous celebration",
            title: "Festival Traditions"
          },
          {
            id: "6",
            type: "image" as const,
            src: classicalMusic,
            alt: `Classical music performance in ${stateName}`,
            caption: "Ancient musical forms continue to enchant modern audiences",
            title: "Musical Heritage"
          }
        ],
        events: [
          {
            id: "traditions-1",
            name: "Traditional Arts Workshop",
            description: "Learn ancient crafting techniques from master artisans",
            date: "2024-10-15",
            location: `Cultural Center, ${stateName}`,
            type: "Workshop",
            availability: "available" as const,
            attendees: 25,
            maxAttendees: 40
          },
          {
            id: "traditions-2",
            name: "Folklore Storytelling Evening",
            description: "Experience ancient stories told in the traditional way",
            date: "2024-10-20",
            location: `Heritage Village, ${stateName}`,
            type: "Cultural Event",
            availability: "limited" as const,
            attendees: 80,
            maxAttendees: 100
          }
        ]
      },

      heritage: {
        title: "Historical Heritage",
        description: `Explore the architectural wonders and historical treasures that define ${stateName}'s cultural landscape`,
        content: [
          `The architectural heritage of ${stateName} showcases the evolution of building techniques, artistic styles, and cultural influences over millennia. From ancient temples to colonial structures, each monument tells a unique story.`,
          
          `Archaeological sites reveal settlements dating back thousands of years, providing insights into early civilization, trade routes, and cultural exchanges. These discoveries continue to reshape our understanding of regional history.`,
          
          `Religious architecture represents the spiritual aspirations of different communities, featuring intricate carvings, symbolic designs, and engineering marvels that continue to inspire contemporary architects and artists.`,
          
          `Defensive structures like forts and palaces demonstrate military strategies and royal lifestyles of bygone eras. These monuments showcase the political dynamics and territorial conflicts that shaped regional boundaries.`,
          
          `Colonial-era buildings reflect the complex period of foreign rule and cultural synthesis, creating unique architectural styles that blend indigenous and international elements in fascinating ways.`
        ],
        media: [
          {
            id: "1",
            type: "image" as const,
            src: archaeological,
            alt: `Archaeological heritage site in ${stateName}`,
            caption: "Ancient stone carvings reveal sophisticated artistic traditions",
            title: "Archaeological Wonders"
          },
          {
            id: "2",
            type: "image" as const,
            src: handicrafts,
            alt: `Historical monument in ${stateName}`,
            caption: "Architectural masterpieces stand as testaments to ancient builders",
            title: "Monumental Heritage"
          },
          {
            id: "3",
            type: "image" as const,
            src: classicalDance,
            alt: `Heritage temple complex in ${stateName}`,
            caption: "Sacred spaces continue to serve their spiritual purpose",
            title: "Religious Architecture"
          },
          {
            id: "4",
            type: "image" as const,
            src: traditionalWedding,
            alt: `Historic palace in ${stateName}`,
            caption: "Royal residences showcase the grandeur of past rulers",
            title: "Palace Heritage"
          },
          {
            id: "5",
            type: "image" as const,
            src: classicalMusic,
            alt: `Heritage museum in ${stateName}`,
            caption: "Museums preserve and present cultural artifacts for future generations",
            title: "Cultural Preservation"
          },
          {
            id: "6",
            type: "image" as const,
            src: festivalCelebration,
            alt: `Heritage conservation work in ${stateName}`,
            caption: "Ongoing restoration efforts ensure heritage preservation",
            title: "Conservation Efforts"
          }
        ],
        events: [
          {
            id: "heritage-1",
            name: "Heritage Walking Tour",
            description: "Guided exploration of historical monuments and their stories",
            date: "2024-10-12",
            location: `Historic District, ${stateName}`,
            type: "Heritage Tour",
            availability: "available" as const,
            attendees: 45,
            maxAttendees: 60
          },
          {
            id: "heritage-2",
            name: "Archaeological Dig Experience",
            description: "Participate in ongoing archaeological research projects",
            date: "2024-10-25",
            location: `Archaeological Site, ${stateName}`,
            type: "Educational Program",
            availability: "limited" as const,
            attendees: 15,
            maxAttendees: 20
          }
        ]
      },

      culture: {
        title: "Living Culture",
        description: `Experience the vibrant contemporary culture that grows from ${stateName}'s rich traditional roots`,
        content: [
          `Contemporary culture in ${stateName} represents a dynamic blend of traditional values and modern innovations, creating unique expressions in art, literature, theater, and social practices that resonate with both locals and visitors.`,
          
          `Literary traditions encompass both classical works and contemporary writings, with poets and authors exploring themes of identity, social change, and cultural continuity through various forms of creative expression.`,
          
          `Performing arts have evolved to incorporate modern techniques while maintaining traditional elements, resulting in innovative dance forms, theatrical productions, and musical compositions that speak to contemporary audiences.`,
          
          `Social customs continue to evolve as communities adapt traditional practices to modern lifestyles, creating new traditions that reflect current values while honoring ancestral wisdom and community bonds.`,
          
          `Educational and cultural institutions serve as bridges between past and present, fostering cultural awareness, artistic development, and community engagement through diverse programs and initiatives.`
        ],
        media: [
          {
            id: "1",
            type: "image" as const,
            src: classicalMusic,
            alt: `Contemporary cultural performance in ${stateName}`,
            caption: "Modern interpretations of classical arts reach new audiences",
            title: "Contemporary Arts"
          },
          {
            id: "2",
            type: "image" as const,
            src: festivalCelebration,
            alt: `Cultural festival in ${stateName}`,
            caption: "Modern festivals celebrate both tradition and innovation",
            title: "Festival Culture"
          },
          {
            id: "3",
            type: "image" as const,
            src: classicalDance,
            alt: `Youth cultural programs in ${stateName}`,
            caption: "Young artists carry forward cultural traditions with fresh perspectives",
            title: "Youth Engagement"
          },
          {
            id: "4",
            type: "image" as const,
            src: handicrafts,
            alt: `Cultural education center in ${stateName}`,
            caption: "Educational programs foster cultural understanding and appreciation",
            title: "Cultural Education"
          },
          {
            id: "5",
            type: "image" as const,
            src: traditionalWedding,
            alt: `Community cultural gathering in ${stateName}`,
            caption: "Community events strengthen social bonds and cultural identity",
            title: "Community Culture"
          },
          {
            id: "6",
            type: "image" as const,
            src: archaeological,
            alt: `Cultural research center in ${stateName}`,
            caption: "Research institutions document and preserve cultural knowledge",
            title: "Cultural Research"
          }
        ],
        events: [
          {
            id: "culture-1",
            name: "Contemporary Arts Festival",
            description: "Showcase of modern interpretations of traditional art forms",
            date: "2024-10-18",
            location: `Arts Center, ${stateName}`,
            type: "Cultural Festival",
            availability: "available" as const,
            attendees: 200,
            maxAttendees: 300
          },
          {
            id: "culture-2",
            name: "Cultural Exchange Program",
            description: "Interactive sessions with local artists and cultural practitioners",
            date: "2024-10-22",
            location: `Community Center, ${stateName}`,
            type: "Exchange Program",
            availability: "available" as const,
            attendees: 50,
            maxAttendees: 75
          }
        ]
      },

      cuisine: {
        title: "Culinary Heritage",
        description: `Savor the authentic flavors and cooking traditions that make ${stateName}'s cuisine unique and beloved`,
        content: [
          `The culinary landscape of ${stateName} reflects geographical diversity, seasonal availability, and cultural influences that have shaped distinctive flavors, cooking techniques, and food traditions over centuries.`,
          
          `Traditional cooking methods include clay oven techniques, fermentation processes, and spice blending skills that create complex flavors and preserve nutritional value while extending shelf life of foods.`,
          
          `Regional specialties showcase local ingredients and family recipes passed down through generations, with each dish carrying cultural significance and often associated with specific festivals or life events.`,
          
          `Street food culture represents the democratic nature of cuisine, where affordable, flavorful dishes serve as daily sustenance and social gathering points, creating vibrant food communities.`,
          
          `Contemporary culinary evolution sees traditional recipes adapted for modern lifestyles while maintaining authentic flavors, with innovative chefs exploring fusion possibilities and health-conscious preparations.`
        ],
        media: [
          {
            id: "1",
            type: "image" as const,
            src: streetFood,
            alt: `Traditional street food market in ${stateName}`,
            caption: "Bustling food markets offer authentic local flavors and social experiences",
            title: "Street Food Culture"
          },
          {
            id: "2",
            type: "image" as const,
            src: traditionalWedding,
            alt: `Traditional cooking methods in ${stateName}`,
            caption: "Ancient cooking techniques preserve flavors and nutritional benefits",
            title: "Traditional Cooking"
          },
          {
            id: "3",
            type: "image" as const,
            src: festivalCelebration,
            alt: `Festival feast preparation in ${stateName}`,
            caption: "Festival foods bring communities together in celebration and sharing",
            title: "Festive Cuisine"
          },
          {
            id: "4",
            type: "image" as const,
            src: handicrafts,
            alt: `Spice market in ${stateName}`,
            caption: "Aromatic spice markets showcase the foundation of regional cuisine",
            title: "Spice Heritage"
          },
          {
            id: "5",
            type: "image" as const,
            src: classicalMusic,
            alt: `Traditional restaurant in ${stateName}`,
            caption: "Heritage restaurants preserve authentic recipes and dining traditions",
            title: "Culinary Traditions"
          },
          {
            id: "6",
            type: "image" as const,
            src: archaeological,
            alt: `Cooking workshop in ${stateName}`,
            caption: "Culinary workshops pass on traditional knowledge to new generations",
            title: "Culinary Education"
          }
        ],
        events: [
          {
            id: "cuisine-1",
            name: "Traditional Cooking Workshop",
            description: "Learn authentic recipes and techniques from local experts",
            date: "2024-10-14",
            location: `Culinary Institute, ${stateName}`,
            type: "Workshop",
            availability: "available" as const,
            attendees: 30,
            maxAttendees: 40
          },
          {
            id: "cuisine-2",
            name: "Food Festival",
            description: "Taste diverse regional specialties and street food favorites",
            date: "2024-10-28",
            location: `Food Park, ${stateName}`,
            type: "Food Festival",
            availability: "available" as const,
            attendees: 500,
            maxAttendees: 800
          }
        ]
      }
    };

    return baseData[subtopic as keyof typeof baseData] || baseData.traditions;
  };

  const data = getSubtopicData(stateName, subtopic);

  return (
    <div className="space-y-8" role="main" aria-labelledby="detailed-content-title">
      {/* Header */}
      <Card className="bg-gradient-cultural border-2 border-heritage-gold/20">
        <CardHeader>
          <CardTitle 
            id="detailed-content-title"
            className="text-2xl font-bold text-heritage-indigo flex items-center gap-3"
          >
            <span className="text-heritage-saffron" aria-hidden="true">{icon}</span>
            {data.title} of {stateName}
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            {data.description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Content Navigation */}
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen size={20} className="text-heritage-saffron" aria-hidden="true" />
            Detailed Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6 flex-wrap" role="tablist" aria-label="Content sections">
            {data.content.map((_, index) => (
              <Button
                key={index}
                role="tab"
                tabIndex={activeContentPage === index ? 0 : -1}
                aria-selected={activeContentPage === index}
                aria-controls={`content-panel-${index}`}
                variant={activeContentPage === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveContentPage(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveContentPage(index);
                  }
                }}
                className={`transition-heritage ${
                  activeContentPage === index 
                    ? 'bg-heritage-saffron text-white' 
                    : 'border-heritage-saffron text-heritage-saffron hover:bg-heritage-saffron hover:text-white'
                }`}
              >
                Section {index + 1}
              </Button>
            ))}
          </div>

          <div 
            id={`content-panel-${activeContentPage}`}
            role="tabpanel"
            aria-labelledby={`content-tab-${activeContentPage}`}
            className="prose prose-lg max-w-none text-foreground"
          >
            <p className="leading-relaxed text-muted-foreground whitespace-pre-line">
              {data.content[activeContentPage]}
            </p>
          </div>

          {/* Content Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => setActiveContentPage(Math.max(0, activeContentPage - 1))}
              disabled={activeContentPage === 0}
              className="flex items-center gap-2"
              aria-label="Previous section"
            >
              <ChevronUp size={16} aria-hidden="true" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground flex items-center">
              Page {activeContentPage + 1} of {data.content.length}
            </span>
            <Button
              variant="outline"
              onClick={() => setActiveContentPage(Math.min(data.content.length - 1, activeContentPage + 1))}
              disabled={activeContentPage === data.content.length - 1}
              className="flex items-center gap-2"
              aria-label="Next section"
            >
              Next
              <ChevronDown size={16} aria-hidden="true" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Media Gallery */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Camera size={20} className="text-heritage-saffron" aria-hidden="true" />
          Visual Journey
        </h3>
        <MediaGallery media={data.media} stateName={stateName} />
      </div>

      {/* Upcoming Events */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Calendar size={20} className="text-heritage-saffron" aria-hidden="true" />
          Related Events
        </h3>
        <UpcomingEvents stateName={stateName} events={data.events} />
      </div>

      {/* Additional Insights */}
      <Card className="bg-heritage-gold/10 border-2 border-heritage-gold/20">
        <CardHeader>
          <CardTitle className="text-lg text-heritage-indigo flex items-center gap-2">
            <Star size={20} aria-hidden="true" />
            Cultural Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Best Time to Experience</h4>
              <p className="text-sm text-muted-foreground">
                Visit during festival seasons (October-March) for the most authentic cultural experiences
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Local Etiquette</h4>
              <p className="text-sm text-muted-foreground">
                Show respect for traditions and participate mindfully in cultural activities
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Photography Guidelines</h4>
              <p className="text-sm text-muted-foreground">
                Always ask permission before photographing people or religious ceremonies
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Authentic Experiences</h4>
              <p className="text-sm text-muted-foreground">
                Engage with local community members for the most genuine cultural insights
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedStateContent;
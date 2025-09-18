import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, Utensils, Book, Phone, Globe, Heart, Star } from "lucide-react";
import MediaGallery from "@/components/MediaGallery";
import UpcomingEvents from "@/components/UpcomingEvents";
import ExpandableSection from "@/components/ExpandableSection";
import ContactInfo from "@/components/ContactInfo";
import UserContributionSection from "@/components/UserContributionSection";
import DetailedStateContent from "@/components/DetailedStateContent";

// Import images
import templeDravidian from "@/assets/temple-dravidian.jpg";
import rajasthaniPalace from "@/assets/rajasthani-palace.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
import himalayanMonastery from "@/assets/himalayan-monastery.jpg";
import durgaPujaPandal from "@/assets/durga-puja-pandal.jpg";
import goldenTemple from "@/assets/golden-temple.jpg";
import teaGardens from "@/assets/tea-gardens.jpg";
import navratriGarba from "@/assets/navratri-garba.jpg";
import konarkSunTemple from "@/assets/konark-sun-temple.jpg";
import northeastLandscape from "@/assets/northeast-landscape.jpg";
import mysorePalace from "@/assets/mysore-palace.jpg";
import goaBeachChurch from "@/assets/goa-beach-church.jpg";
import rajasthanDesert from "@/assets/rajasthan-desert.jpg";
import kashmirDalLake from "@/assets/kashmir-dal-lake.jpg";
import charminariTelangana from "@/assets/charminar-telangana.jpg";
import chandigarhCity from "@/assets/chandigarh-city.jpg";
import andamanIslands from "@/assets/andaman-islands.jpg";
import lakshadweepLagoon from "@/assets/lakshadweep-lagoon.jpg";
import damanFort from "@/assets/daman-fort.jpg";

const stateData = {
  "maharashtra": {
    name: "Maharashtra",
    capital: "Mumbai",
    description: "Maharashtra, the land of Marathas, is known for its rich cultural heritage, Bollywood film industry, and vibrant festivals. The state has been a cradle of Indian civilization with ancient caves, majestic forts, and modern metropolises.",
    traditions: [
      "Ganesh Chaturthi - Grand festival celebrating Lord Ganesha with elaborate processions",
      "Lavani - Traditional folk dance form with energetic performances and colorful costumes",
      "Warli Art - Ancient tribal art form using geometric patterns depicting daily life",
      "Dhol-Tasha - Traditional drumming ensemble during festivals and celebrations",
      "Gudi Padwa - Marathi New Year celebrated with decorated gudis and festive meals"
    ],
    heritage: [
      "Ajanta and Ellora Caves - UNESCO World Heritage Sites with ancient Buddhist art",
      "Chhatrapati Shivaji Maharaj Terminus - Victorian Gothic architecture masterpiece",
      "Shaniwar Wada - Historic fortified palace of the Peshwas in Pune",
      "Gateway of India - Iconic monument symbolizing Mumbai's colonial heritage",
      "Elephanta Caves - Ancient rock-cut temples dedicated to Lord Shiva"
    ],
    culture: "Marathi culture emphasizes respect for elders, family values, and educational excellence. The state celebrates numerous festivals with great enthusiasm and has contributed significantly to Indian literature, theater, and cinema. The concept of 'Vasudhaiva Kutumbakam' (the world is one family) is deeply ingrained in Marathi culture.",
    cuisine: "Maharashtrian cuisine includes iconic dishes like Vada Pav (Mumbai's burger), Puran Poli (sweet flatbread), Misal Pav (spicy curry with bread), and Bhel Puri (street snack). The coastal regions offer fresh seafood preparations while inland areas specialize in spicy vegetarian dishes. Each region has distinct flavors - from Konkani fish curry to Nagpuri saoji cuisine.",
    color: "from-orange-500 to-red-600",
    festivals: ["Ganesh Chaturthi", "Gudi Padwa", "Navratri", "Diwali"],
    languages: ["Marathi", "Hindi", "English"],
    famousFor: ["Bollywood", "Ajanta Ellora Caves", "Vada Pav", "Warli Art"],
    media: [
      {
        id: "1",
        type: "image" as const,
        src: rajasthaniPalace,
        alt: "Historic Chhatrapati Shivaji Maharaj Terminus showcasing Victorian Gothic architecture",
        caption: "The UNESCO World Heritage Site serves as Mumbai's main railway station",
        title: "Chhatrapati Shivaji Maharaj Terminus"
      },
      {
        id: "2", 
        type: "image" as const,
        src: templeDravidian,
        alt: "Ajanta Caves Buddhist paintings and sculptures",
        caption: "Ancient Buddhist art masterpieces dating back to 2nd century BCE",
        title: "Ajanta Caves Heritage Site"
      }
    ],
    events: [
      {
        id: "1",
        name: "Ganesh Chaturthi Festival",
        description: "Grand celebration with elaborate pandals and processions",
        date: "2024-09-07",
        location: "Mumbai, Maharashtra",
        type: "Religious Festival",
        availability: "available" as const,
        attendees: 150000,
        maxAttendees: 200000
      }
    ],
    contacts: [
      {
        department: "Maharashtra Tourism Development Corporation",
        phone: "+91-22-2284-5678",
        email: "info@maharashtratourism.gov.in",
        website: "https://www.maharashtratourism.gov.in",
        address: "CDO Hutments, Opposite Mantralaya, Mumbai - 400032",
        hours: "Monday to Friday: 9:30 AM - 5:30 PM",
        services: ["Tourist Information", "Booking Services", "Cultural Programs", "Heritage Tours"]
      }
    ]
  },
  "karnataka": {
    name: "Karnataka",
    capital: "Bengaluru",
    description: "Karnataka is renowned for its classical music traditions, ancient architecture, and technological advancement. The state beautifully balances its historical heritage with modern innovation, earning Bengaluru the title 'Silicon Valley of India'.",
    traditions: [
      "Mysore Dasara - Royal festival with grand processions and cultural programs",
      "Yakshagana - Classical dance-drama from coastal regions with elaborate costumes",
      "Channapatna Toys - Traditional wooden toy making with natural colors",
      "Carnatic Music - Classical South Indian music tradition with legendary musicians",
      "Kambala - Traditional buffalo race in coastal Karnataka"
    ],
    heritage: [
      "Mysore Palace - Magnificent royal residence with Indo-Saracenic architecture",
      "Hampi - UNESCO World Heritage Site with Vijayanagara empire ruins",
      "Hoysala Temples - Intricate stone architecture at Belur and Halebidu",
      "Badami Caves - Ancient rock-cut temples showcasing early Chalukyan art",
      "Gol Gumbaz - Architectural marvel with perfect acoustics in Bijapur"
    ],
    culture: "Kannada culture values education, arts, and spiritual practices. The state has produced great saints like Basavanna, poets like Kuvempu, and musicians who have enriched Indian culture. The philosophy of 'Sarva Dharma Sama Bhava' (all religions are equal) is prevalent.",
    cuisine: "Karnataka cuisine features regional specialties like Bisi Bele Bath (spiced rice dish), Mysore Pak (sweet delicacy), various dosa preparations, and authentic Udupi cuisine. Each region offers unique flavors - from coastal seafood to North Karnataka's spicy curries and South Karnataka's coffee culture.",
    color: "from-yellow-500 to-orange-600",
    festivals: ["Mysore Dasara", "Ugadi", "Karaga", "Teej"],
    languages: ["Kannada", "Hindi", "English"],
    famousFor: ["Mysore Palace", "IT Hub", "Coffee", "Silk"],
    media: [
      {
        id: "1",
        type: "image" as const,
        src: mysorePalace,
        alt: "Illuminated Mysore Palace during Dasara festival with Indo-Saracenic architecture",
        caption: "The royal residence lights up with thousands of bulbs during celebrations",
        title: "Mysore Palace Illumination"
      }
    ],
    events: [
      {
        id: "1",
        name: "Mysore Dasara",
        description: "Royal festival with grand processions and cultural programs",
        date: "2024-10-15",
        location: "Mysore, Karnataka",
        type: "Cultural Festival",
        availability: "available" as const,
        attendees: 80000,
        maxAttendees: 100000
      }
    ],
    contacts: [
      {
        department: "Karnataka State Tourism Development Corporation",
        phone: "+91-80-2235-2828",
        email: "info@kstdc.co.in",
        website: "https://www.kstdc.co.in",
        address: "No.10/4, Kasturba Road Cross, Bengaluru - 560001",
        hours: "Monday to Saturday: 10:00 AM - 5:00 PM",
        services: ["Tourism Information", "Palace Tours", "Cultural Events", "Accommodation Booking"]
      }
    ]
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    capital: "Chennai",
    description: "Tamil Nadu is the heartland of Dravidian culture, known for its magnificent temples, classical arts, and rich literary traditions spanning over two millennia. The state preserves ancient Tamil heritage while embracing modern development.",
    traditions: [
      "Bharatanatyam - Classical dance form with spiritual themes and precise movements",
      "Thaipusam - Festival with elaborate kavadi processions and devotional fervor",
      "Kolu - Traditional doll display during Navaratri celebrating creativity",
      "Jallikattu - Traditional bull-taming sport showcasing courage and skill",
      "Pongal - Harvest festival celebrating nature and agriculture"
    ],
    heritage: [
      "Meenakshi Temple - Architectural marvel in Madurai with stunning gopurams",
      "Brihadeeswarar Temple - UNESCO World Heritage Site in Thanjavur",
      "Mahabalipuram Monuments - Ancient rock-cut sculptures by the sea",
      "Thanjavur Palace - Maratha architectural heritage with art collections",
      "Rameshwaram Temple - Sacred pilgrimage site with architectural grandeur"
    ],
    culture: "Tamil culture emphasizes classical arts, literature, and temple traditions. The state has preserved the ancient Tamil language and customs while embracing modernity. Family values, respect for education, and devotion to arts are central to Tamil culture.",
    cuisine: "Tamil cuisine includes traditional dishes like Sambar (lentil curry), Rasam (tangy soup), Chettinad specialties known for spices, and various rice preparations. Temple food culture with offerings like pongal and payasam is integral to culinary traditions. Each region offers distinct flavors from Madurai's street food to Chettinad's fiery curries.",
    color: "from-red-500 to-pink-600",
    festivals: ["Pongal", "Thaipusam", "Karthigai Deepam", "Navaratri"],
    languages: ["Tamil", "English", "Telugu"],
    famousFor: ["Bharatanatyam", "Temples", "Carnatic Music", "Silk Sarees"],
    media: [
      {
        id: "1",
        type: "image" as const,
        src: templeDravidian,
        alt: "Meenakshi Temple gopurams with intricate Dravidian architecture and colorful sculptures",
        caption: "The magnificent temple complex showcases centuries of Tamil architectural excellence",
        title: "Meenakshi Temple Madurai"
      }
    ],
    events: [
      {
        id: "1",
        name: "Pongal Festival",
        description: "Tamil harvest festival celebrating nature and agriculture",
        date: "2024-01-15",
        location: "Chennai, Tamil Nadu",
        type: "Harvest Festival",
        availability: "available" as const,
        attendees: 200000,
        maxAttendees: 250000
      }
    ],
    contacts: [
      {
        department: "Tamil Nadu Tourism Development Corporation",
        phone: "+91-44-2538-3333",
        email: "info@tamilnadutourism.org",
        website: "https://www.tamilnadutourism.org",
        address: "Tourism Complex, No.2, Wallajah Road, Chennai - 600002",
        hours: "Monday to Friday: 9:00 AM - 6:00 PM",
        services: ["Temple Tours", "Cultural Programs", "Classical Dance", "Heritage Walks"]
      }
    ]
  },
  "kerala": {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    description: "Kerala, known as 'God's Own Country,' is famous for its backwaters, spice plantations, Ayurvedic traditions, and high literacy rate. The state offers a perfect blend of natural beauty and cultural richness.",
    traditions: [
      "Kathakali - Classical dance-drama with elaborate costumes and makeup",
      "Theyyam - Ritualistic art form of North Kerala with divine performances",
      "Onam - Harvest festival with Pulikali (tiger dance) and boat races",
      "Kalaripayattu - Ancient martial art form showcasing physical prowess",
      "Thiruvathira - Traditional dance performed by women during festivals"
    ],
    heritage: [
      "Padmanabhaswamy Temple - Ancient Dravidian architecture with golden treasures",
      "Fort Cochin - Colonial heritage area with Chinese fishing nets",
      "Mattancherry Palace - Portuguese palace featuring traditional Kerala murals",
      "Backwaters - Unique ecosystem with traditional houseboats and village life",
      "Munnar Tea Gardens - Colonial-era plantations in misty mountains"
    ],
    culture: "Kerala culture blends Hindu, Christian, and Muslim traditions harmoniously. The state values education (100% literacy), arts, and environmental conservation. The matrilineal system in some communities and the peaceful coexistence of different religions define Kerala's progressive culture.",
    cuisine: "Kerala cuisine features coconut-based curries, fresh seafood, traditional Sadhya (feast served on banana leaf), and aromatic spices. Popular dishes include Appam with stew, Puttu with kadala curry, Fish Curry with rice, and various preparations using coconut milk and curry leaves.",
    color: "from-green-500 to-teal-600",
    festivals: ["Onam", "Vishu", "Thrissur Pooram", "Christmas"],
    languages: ["Malayalam", "English", "Tamil"],
    famousFor: ["Backwaters", "Ayurveda", "Spices", "Kathakali"],
    media: [
      {
        id: "1",
        type: "image" as const,
        src: keralaBackwaters,
        alt: "Serene Kerala backwaters with traditional houseboats and coconut palms",
        caption: "The tranquil waterways offer a glimpse into village life and natural beauty",
        title: "Kerala Backwater Paradise"
      }
    ],
    events: [
      {
        id: "1",
        name: "Onam Festival",
        description: "Kerala's harvest festival with traditional boat races and cultural programs",
        date: "2024-09-15",
        location: "Kochi, Kerala",
        type: "Harvest Festival",
        availability: "available" as const,
        attendees: 300000,
        maxAttendees: 400000
      }
    ],
    contacts: [
      {
        department: "Kerala Tourism Development Corporation",
        phone: "+91-471-2321-132",
        email: "info@keralatourism.org",
        website: "https://www.keralatourism.org",
        address: "Park View, Thiruvananthapuram - 695033",
        hours: "Monday to Friday: 9:00 AM - 5:30 PM",
        services: ["Backwater Tours", "Ayurveda Centers", "Spice Gardens", "Cultural Shows"]
      }
    ]
  },
  "telangana": {
    name: "Telangana",
    capital: "Hyderabad",
    description: "Telangana, the land of Nizams, is known for its rich history, architectural marvels, and delectable Hyderabadi cuisine. The state has emerged as a major IT hub while preserving its cultural heritage.",
    traditions: [
      "Bonalu - Festival honoring Goddess Mahakali with colorful processions",
      "Bathukamma - Floral festival celebrating the goddess of womanhood",
      "Sammakka Saralamma Jatara - Tribal festival with millions of devotees",
      "Deccan Painting - Miniature art form from the royal courts",
      "Qawwali - Sufi musical tradition popular in the region"
    ],
    heritage: [
      "Charminar - Iconic monument and symbol of Hyderabad",
      "Golconda Fort - Medieval fortress known for acoustic marvels",
      "Qutb Shahi Tombs - Architectural heritage of the Qutb Shahi dynasty",
      "Chowmahalla Palace - Seat of the Asaf Jahi dynasty",
      "Thousand Pillar Temple - Ancient Kakatiya architecture in Warangal"
    ],
    culture: "Telangana culture is a blend of Telugu traditions and Islamic influences. The state is known for its hospitality, poetry, and classical music. The concept of 'Ganga-Jamuni Tehzeeb' (composite culture) is evident in daily life.",
    cuisine: "Hyderabadi cuisine features the world-famous Biryani, Haleem, Nihari, and traditional sweets like Double Ka Meetha. The cuisine represents a perfect fusion of Mughlai and Telugu flavors, making it one of India's most celebrated regional cuisines.",
    color: "from-purple-600 to-indigo-700",
    festivals: ["Bonalu", "Bathukamma", "Eid", "Diwali"],
    languages: ["Telugu", "Urdu", "Hindi", "English"],
    famousFor: ["Hyderabadi Biryani", "IT Industry", "Charminar", "Pearls"],
    media: [
      {
        id: "1",
        type: "image" as const,
        src: charminariTelangana,
        alt: "Historic Charminar monument in Hyderabad with Islamic architecture and bustling market",
        caption: "The iconic 16th-century monument stands as a symbol of Hyderabadi heritage",
        title: "Charminar Hyderabad"
      }
    ],
    events: [
      {
        id: "1",
        name: "Bonalu Festival",
        description: "Traditional festival honoring Goddess Mahakali",
        date: "2024-07-28",
        location: "Hyderabad, Telangana",
        type: "Religious Festival",
        availability: "available" as const,
        attendees: 100000,
        maxAttendees: 150000
      }
    ],
    contacts: [
      {
        department: "Telangana State Tourism Development Corporation",
        phone: "+91-40-2345-6789",
        email: "info@telangana.gov.in",
        website: "https://www.telangana.gov.in",
        address: "Tourism Bhavan, Himayatnagar, Hyderabad - 500029",
        hours: "Monday to Saturday: 10:00 AM - 5:30 PM",
        services: ["Heritage Tours", "Cultural Events", "Cuisine Tours", "Palace Visits"]
      }
    ]
  },
  // Add remaining states with similar structure...
  "chandigarh": {
    name: "Chandigarh",
    capital: "Chandigarh",
    description: "Chandigarh, the planned city designed by Le Corbusier, represents modern urban planning excellence. It serves as the capital of both Punjab and Haryana, showcasing architectural innovation and urban design.",
    traditions: [
      "Rose Festival - Annual celebration at Zakir Hussain Rose Garden",
      "Teej Festival - Monsoon celebration with traditional songs and dances",
      "Baisakhi - Harvest festival celebrated with Punjabi enthusiasm",
      "Modern Architecture Tours - Showcasing Le Corbusier's urban planning",
      "Cultural Programs - Regular events at various cultural centers"
    ],
    heritage: [
      "Capitol Complex - UNESCO World Heritage Site by Le Corbusier",
      "Rock Garden - Unique sculpture garden made from industrial waste",
      "Sukhna Lake - Artificial lake designed for recreation and beauty",
      "Open Hand Monument - Symbol of peace and reconciliation",
      "Government Museum and Art Gallery - Showcasing regional art and culture"
    ],
    culture: "Chandigarh culture represents modern India's aspiration for planned development while maintaining cultural roots. The city embodies the spirit of post-independence India with its focus on education, arts, and progressive values.",
    cuisine: "Chandigarh cuisine reflects North Indian flavors with Punjabi influences. Popular dishes include Chole Bhature, Rajma Chawal, Butter Chicken, and various street foods. The city's restaurant culture offers diverse culinary experiences.",
    color: "from-emerald-800 to-green-900",
    festivals: ["Rose Festival", "Baisakhi", "Teej", "Diwali"],
    languages: ["Hindi", "Punjabi", "English"],
    famousFor: ["Urban Planning", "Rock Garden", "Modern Architecture", "Clean City"],
    media: [
      {
        id: "1",
        type: "image" as const,
        src: chandigarhCity,
        alt: "Modern Chandigarh cityscape with Le Corbusier architecture and planned urban design",
        caption: "The first planned city of India showcasing modernist architecture",
        title: "Chandigarh City Planning"
      }
    ],
    events: [
      {
        id: "1",
        name: "Rose Festival",
        description: "Annual celebration at Zakir Hussain Rose Garden",
        date: "2024-02-20",
        location: "Chandigarh",
        type: "Floral Festival",
        availability: "available" as const,
        attendees: 50000,
        maxAttendees: 75000
      }
    ],
    contacts: [
      {
        department: "Chandigarh Tourism",
        phone: "+91-172-270-3839",
        email: "info@chandigarhtourism.gov.in",
        website: "https://www.chandigarhtourism.gov.in",
        address: "Inter State Bus Terminal, Sector 17, Chandigarh - 160017",
        hours: "Monday to Friday: 9:30 AM - 5:30 PM",
        services: ["City Tours", "Architecture Tours", "Garden Visits", "Cultural Programs"]
      }
    ]
  }
};

interface StatePageProps {}

const StatePage = ({}: StatePageProps) => {
  const { stateName } = useParams<{ stateName: string }>();
  const navigate = useNavigate();

  if (!stateName) {
    navigate("/");
    return null;
  }

  const stateKey = stateName.toLowerCase().replace(/\s+/g, '-');
  const state = stateData[stateKey as keyof typeof stateData];

  if (!state) {
    navigate("/404");
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-cultural">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-heritage-saffron text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-card/90 backdrop-blur-sm border-b-2 border-heritage-gold/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-heritage-indigo hover:text-heritage-saffron transition-colors"
              aria-label="Go back to homepage"
            >
              <ArrowLeft size={20} className="mr-2" aria-hidden="true" />
              Back to States
            </Button>
            
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {state.name}
              </h1>
              <p className="text-muted-foreground">
                <MapPin size={16} className="inline mr-1" aria-hidden="true" />
                Capital: {state.capital}
              </p>
            </div>
            
            <div className="flex gap-2">
              {state.famousFor.slice(0, 2).map((item, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="text-xs bg-heritage-gold/20 text-heritage-indigo"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div id="main-content" className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* State Overview */}
        <section aria-labelledby="overview-title">
          <Card className="bg-card/90 backdrop-blur-sm border-2 border-heritage-gold/30">
            <CardHeader>
              <CardTitle id="overview-title" className="text-2xl text-foreground flex items-center gap-2">
                <Heart size={24} className="text-heritage-saffron" aria-hidden="true" />
                About {state.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed text-lg">
                {state.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-heritage-gold/10 rounded-lg">
                  <Users size={24} className="mx-auto text-heritage-saffron mb-2" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground">Languages</h3>
                  <p className="text-muted-foreground text-sm">
                    {state.languages.join(", ")}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-heritage-indigo/10 rounded-lg">
                  <Calendar size={24} className="mx-auto text-heritage-indigo mb-2" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground">Major Festivals</h3>
                  <p className="text-muted-foreground text-sm">
                    {state.festivals.slice(0, 2).join(", ")}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-heritage-emerald/10 rounded-lg">
                  <Star size={24} className="mx-auto text-heritage-emerald mb-2" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground">Famous For</h3>
                  <p className="text-muted-foreground text-sm">
                    {state.famousFor.slice(0, 2).join(", ")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Media Gallery */}
        {state.media && state.media.length > 0 && (
          <section aria-labelledby="media-gallery-title">
            <h2 id="media-gallery-title" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Camera size={24} className="text-heritage-saffron" aria-hidden="true" />
              Visual Journey Through {state.name}
            </h2>
            <MediaGallery media={state.media} stateName={state.name} />
          </section>
        )}

        {/* Upcoming Events */}
        {state.events && state.events.length > 0 && (
          <UpcomingEvents stateName={state.name} events={state.events} />
        )}

        {/* Expandable Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Traditions */}
          <ExpandableSection 
            title="Rich Traditions"
            description={`Discover the vibrant traditions of ${state.name}`}
            icon={<Music size={20} />}
            defaultExpanded={true}
          >
            <ul className="space-y-3" role="list">
              {state.traditions.map((tradition, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-heritage-saffron rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-foreground">{tradition}</p>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          {/* Heritage Sites */}
          <ExpandableSection 
            title="Heritage Sites"
            description={`Explore the architectural marvels of ${state.name}`}
            icon={<MapPin size={20} />}
            defaultExpanded={true}
          >
            <ul className="space-y-3" role="list">
              {state.heritage.map((site, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-heritage-indigo rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-foreground">{site}</p>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          {/* Culture */}
          <ExpandableSection 
            title="Cultural Heritage"
            description={`Understanding the cultural essence of ${state.name}`}
            icon={<Book size={20} />}
          >
            <p className="text-foreground leading-relaxed">{state.culture}</p>
          </ExpandableSection>

          {/* Cuisine */}
          <ExpandableSection 
            title="Culinary Delights"
            description={`Savor the authentic flavors of ${state.name}`}
            icon={<Utensils size={20} />}
          >
            <p className="text-foreground leading-relaxed">{state.cuisine}</p>
          </ExpandableSection>

        </div>

        {/* Contact Information */}
        {state.contacts && state.contacts.length > 0 && (
          <ContactInfo stateName={state.name} contacts={state.contacts} />
        )}

        {/* Quick Facts */}
        <section aria-labelledby="quick-facts-title">
          <Card className="bg-gradient-heritage text-primary-foreground">
            <CardHeader>
              <CardTitle id="quick-facts-title" className="text-xl flex items-center gap-2">
                <Globe size={20} aria-hidden="true" />
                Quick Facts About {state.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-1">Capital</h3>
                  <p className="text-sm opacity-90">{state.capital}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">Languages</h3>
                  <p className="text-sm opacity-90">{state.languages.length}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">Major Festivals</h3>
                  <p className="text-sm opacity-90">{state.festivals.length}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">Heritage Sites</h3>
                  <p className="text-sm opacity-90">{state.heritage.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-card/90 backdrop-blur-sm border-2 border-heritage-gold/30">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Plan Your Visit to {state.name}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience the rich cultural heritage, traditions, and hospitality that make {state.name} truly special.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-heritage-saffron hover:bg-heritage-saffron/90 text-white"
                  onClick={() => window.open('https://www.incredibleindia.org', '_blank', 'noopener,noreferrer')}
                  aria-label="Visit Incredible India website to plan your trip"
                >
                  <Globe size={16} className="mr-2" aria-hidden="true" />
                  Plan Your Trip
                </Button>
                <Button 
                  variant="outline"
                  className="border-heritage-indigo text-heritage-indigo hover:bg-heritage-indigo hover:text-white"
                  onClick={() => navigate("/")}
                  aria-label="Explore more Indian states"
                >
                  <MapPin size={16} className="mr-2" aria-hidden="true" />
                  Explore More States
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  );
};

export default StatePage;
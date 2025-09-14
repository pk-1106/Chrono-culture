import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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

const indianStatesAndTerritories = [
  // Major States
  {
    name: "Maharashtra",
    capital: "Mumbai",
    description: "Known for Bollywood, Ajanta Caves, and vibrant festivals like Ganesh Chaturthi",
    heritage: "Marathi culture, classical dance forms, and architectural marvels",
    color: "from-orange-500 to-red-600",
    image: rajasthaniPalace,
    type: "state"
  },
  {
    name: "Karnataka",
    capital: "Bengaluru",
    description: "Home to Mysore Palace, classical Carnatic music, and ancient Hoysala architecture",
    heritage: "Kannada literature, traditional crafts, and temple architecture",
    color: "from-yellow-500 to-orange-600",
    image: mysorePalace,
    type: "state"
  },
  {
    name: "Tamil Nadu",
    capital: "Chennai",
    description: "Famous for Dravidian temples, Bharatanatyam dance, and Tamil literature",
    heritage: "Ancient temple complexes, classical arts, and rich culinary traditions",
    color: "from-red-500 to-pink-600",
    image: templeDravidian,
    type: "state"
  },
  {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    description: "Known as God's Own Country, famous for backwaters and Kathakali",
    heritage: "Ayurveda, spice trade history, and traditional performing arts",
    color: "from-green-500 to-teal-600",
    image: keralaBackwaters,
    type: "state"
  },
  {
    name: "Rajasthan",
    capital: "Jaipur",
    description: "Land of maharajas, featuring palaces, forts, and desert culture",
    heritage: "Royal architecture, folk music, and traditional handicrafts",
    color: "from-pink-500 to-purple-600",
    image: rajasthanDesert,
    type: "state"
  },
  {
    name: "West Bengal",
    capital: "Kolkata",
    description: "Cultural capital of India, known for literature, arts, and Durga Puja",
    heritage: "Bengali renaissance, intellectual traditions, and cultural festivals",
    color: "from-blue-500 to-indigo-600",
    image: durgaPujaPandal,
    type: "state"
  },
  {
    name: "Gujarat",
    capital: "Gandhinagar",
    description: "Birthplace of Mahatma Gandhi, known for business acumen and festivals",
    heritage: "Gujarati entrepreneurship, textile traditions, and Jain architecture",
    color: "from-amber-500 to-orange-500",
    image: navratriGarba,
    type: "state"
  },
  {
    name: "Punjab",
    capital: "Chandigarh",
    description: "Land of five rivers, known for Sikhism, agriculture, and vibrant culture",
    heritage: "Sikh traditions, Punjabi music, and agricultural practices",
    color: "from-emerald-500 to-green-600",
    image: goldenTemple,
    type: "state"
  },
  {
    name: "Odisha",
    capital: "Bhubaneswar",
    description: "Temple state of India, famous for Jagannath Temple and classical dance",
    heritage: "Kalinga architecture, Odissi dance, and maritime history",
    color: "from-cyan-500 to-blue-600",
    image: konarkSunTemple,
    type: "state"
  },
  {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    description: "Home to Taj Mahal, Varanasi, and rich Mughal heritage",
    heritage: "Mughal architecture, Hindustani music, and spiritual traditions",
    color: "from-purple-500 to-indigo-600",
    image: rajasthaniPalace,
    type: "state"
  },
  {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    description: "Heart of India, known for Khajuraho temples and tribal culture",
    heritage: "Ancient temples, tribal art, and wildlife sanctuaries",
    color: "from-teal-500 to-cyan-600",
    image: templeDravidian,
    type: "state"
  },
  {
    name: "Assam",
    capital: "Dispur",
    description: "Gateway to Northeast, famous for tea gardens and Bihu festival",
    heritage: "Assamese culture, tea heritage, and Vaishnavite traditions",
    color: "from-green-600 to-emerald-700",
    image: teaGardens,
    type: "state"
  },
  {
    name: "Bihar",
    capital: "Patna",
    description: "Birthplace of Buddhism and Jainism, rich in ancient history",
    heritage: "Buddhist and Jain heritage, Magadhi culture, and folk traditions",
    color: "from-yellow-600 to-amber-600",
    image: templeDravidian,
    type: "state"
  },
  {
    name: "Himachal Pradesh",
    capital: "Shimla",
    description: "Land of gods, known for hill stations and Buddhist monasteries",
    heritage: "Himalayan culture, Buddhist traditions, and colonial architecture",
    color: "from-blue-600 to-indigo-700",
    image: himalayanMonastery,
    type: "state"
  },
  {
    name: "Haryana",
    capital: "Chandigarh",
    description: "Agricultural heartland, known for folk music and wrestling tradition",
    heritage: "Punjabi culture, agricultural practices, and folk arts",
    color: "from-orange-600 to-red-700",
    image: goldenTemple,
    type: "state"
  },
  {
    name: "Jharkhand",
    capital: "Ranchi",
    description: "Rich in minerals and tribal culture, known for waterfalls and forests",
    heritage: "Tribal traditions, folk arts, and natural heritage",
    color: "from-green-700 to-teal-700",
    image: northeastLandscape,
    type: "state"
  },
  {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    description: "Known for Tirupati temple, classical dance, and spicy cuisine",
    heritage: "Telugu culture, ancient temples, and maritime traditions",
    color: "from-red-600 to-pink-700",
    image: templeDravidian,
    type: "state"
  },
  {
    name: "Telangana",
    capital: "Hyderabad",
    description: "Land of Nizams, known for Golconda Fort and Hyderabadi cuisine",
    heritage: "Deccani culture, Qutb Shahi architecture, and rich culinary traditions",
    color: "from-purple-600 to-indigo-700",
    image: rajasthaniPalace,
    type: "state"
  },
  {
    name: "Chhattisgarh",
    capital: "Raipur",
    description: "Rich in tribal culture and ancient temples, known for handicrafts",
    heritage: "Tribal arts, ancient temples, and traditional crafts",
    color: "from-emerald-600 to-green-700",
    image: northeastLandscape,
    type: "state"
  },
  {
    name: "Goa",
    capital: "Panaji",
    description: "Tropical paradise with Portuguese heritage and beautiful beaches",
    heritage: "Portuguese colonial architecture, Konkani culture, and coastal traditions",
    color: "from-cyan-600 to-blue-700",
    image: goaBeachChurch,
    type: "state"
  },
  {
    name: "Uttarakhand",
    capital: "Dehradun",
    description: "Land of gods, known for Char Dham pilgrimage and Himalayan beauty",
    heritage: "Hindu pilgrimage sites, Garhwali culture, and mountain traditions",
    color: "from-indigo-600 to-purple-700",
    image: himalayanMonastery,
    type: "state"
  },
  {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    description: "Land of rising sun, known for Buddhist monasteries and tribal diversity",
    heritage: "Tribal cultures, Buddhist traditions, and pristine natural beauty",
    color: "from-teal-600 to-cyan-700",
    image: himalayanMonastery,
    type: "state"
  },
  {
    name: "Manipur",
    capital: "Imphal",
    description: "Jewel of India, known for Manipuri dance and polo sport",
    heritage: "Manipuri classical dance, martial arts, and unique cultural traditions",
    color: "from-pink-600 to-red-700",
    image: northeastLandscape,
    type: "state"
  },
  {
    name: "Meghalaya",
    capital: "Shillong",
    description: "Abode of clouds, known for living root bridges and matrilineal society",
    heritage: "Khasi culture, living root bridges, and unique social traditions",
    color: "from-green-800 to-emerald-800",
    image: northeastLandscape,
    type: "state"
  },
  {
    name: "Mizoram",
    capital: "Aizawl",
    description: "Land of blue mountains, known for bamboo crafts and festivals",
    heritage: "Mizo culture, bamboo crafts, and vibrant festivals",
    color: "from-blue-700 to-indigo-800",
    image: northeastLandscape,
    type: "state"
  },
  {
    name: "Nagaland",
    capital: "Kohima",
    description: "Land of festivals, known for Hornbill festival and tribal traditions",
    heritage: "Naga tribal culture, traditional crafts, and warrior traditions",
    color: "from-red-700 to-pink-800",
    image: northeastLandscape,
    type: "state"
  },
  {
    name: "Sikkim",
    capital: "Gangtok",
    description: "Himalayan kingdom, known for Buddhist monasteries and organic farming",
    heritage: "Buddhist culture, Himalayan traditions, and eco-friendly practices",
    color: "from-indigo-700 to-purple-800",
    image: himalayanMonastery,
    type: "state"
  },
  {
    name: "Tripura",
    capital: "Agartala",
    description: "Land of tribal heritage, known for bamboo handicrafts and palaces",
    heritage: "Tripuri culture, royal palaces, and bamboo craftsmanship",
    color: "from-amber-700 to-yellow-800",
    image: northeastLandscape,
    type: "state"
  },
  
  // Union Territories
  {
    name: "Delhi",
    capital: "New Delhi",
    description: "National capital, blend of ancient heritage and modern governance",
    heritage: "Mughal monuments, British colonial architecture, and diverse cultures",
    color: "from-red-800 to-pink-900",
    image: rajasthaniPalace,
    type: "union-territory"
  },
  {
    name: "Jammu and Kashmir",
    capital: "Srinagar (Summer), Jammu (Winter)",
    description: "Paradise on earth, known for Dal Lake and Himalayan beauty",
    heritage: "Kashmiri culture, Sufi traditions, and Himalayan heritage",
    color: "from-blue-800 to-indigo-900",
    image: kashmirDalLake,
    type: "union-territory"
  },
  {
    name: "Ladakh",
    capital: "Leh",
    description: "Land of high passes, known for Buddhist monasteries and stark beauty",
    heritage: "Tibetan Buddhist culture, ancient monasteries, and high-altitude traditions",
    color: "from-purple-800 to-indigo-900",
    image: himalayanMonastery,
    type: "union-territory"
  },
  {
    name: "Puducherry",
    capital: "Puducherry",
    description: "French colonial heritage with spiritual ashrams and beaches",
    heritage: "French colonial culture, Tamil traditions, and spiritual heritage",
    color: "from-cyan-800 to-blue-900",
    image: goaBeachChurch,
    type: "union-territory"
  },
  {
    name: "Chandigarh",
    capital: "Chandigarh",
    description: "Planned city designed by Le Corbusier, modern urban planning",
    heritage: "Modern architecture, urban planning, and cosmopolitan culture",
    color: "from-emerald-800 to-green-900",
    image: goldenTemple,
    type: "union-territory"
  },
  {
    name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    description: "Tropical islands with pristine beaches and tribal heritage",
    heritage: "Indigenous tribal cultures, colonial history, and marine biodiversity",
    color: "from-teal-800 to-cyan-900",
    image: goaBeachChurch,
    type: "union-territory"
  },
  {
    name: "Lakshadweep",
    capital: "Kavaratti",
    description: "Coral islands with pristine lagoons and marine life",
    heritage: "Islamic culture, maritime traditions, and coral reef heritage",
    color: "from-blue-900 to-indigo-950",
    image: goaBeachChurch,
    type: "union-territory"
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    capital: "Daman",
    description: "Former Portuguese territories with beaches and forts",
    heritage: "Portuguese colonial heritage, tribal culture, and coastal traditions",
    color: "from-amber-800 to-orange-900",
    image: goaBeachChurch,
    type: "union-territory"
  }
];

interface StatesGridProps {
  onStateClick?: (stateName: string) => void;
}

const StatesGrid = ({ onStateClick }: StatesGridProps) => {
  const navigate = useNavigate();

  const handleStateClick = (stateName: string) => {
    navigate(`/state/${stateName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section className="py-20 px-6 bg-gradient-cultural">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Indian States
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through the diverse cultural landscape of India, where each state 
            tells its own unique story of heritage, traditions, and artistic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {indianStatesAndTerritories.map((region, index) => (
            <Card 
              key={region.name}
              className="group hover:shadow-elegant transition-heritage cursor-pointer transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-heritage-gold/30"
              onClick={() => handleStateClick(region.name)}
            >
              <CardHeader className="pb-4">
                <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={`${region.name} heritage`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                    <p className="text-sm opacity-90">Capital: {region.capital}</p>
                    <span className="text-xs bg-heritage-gold/80 text-black px-2 py-1 rounded-full mt-2 inline-block">
                      {region.type === 'state' ? 'State' : 'Union Territory'}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-heritage-gold/60"></div>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-heritage-saffron transition-colors">
                  {region.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {region.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  <strong className="text-heritage-indigo">Heritage:</strong> {region.heritage}
                </p>
                <Button 
                  variant="cultural" 
                  size="sm"
                  className="w-full group-hover:scale-105 transition-heritage"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStateClick(region.name);
                  }}
                >
                  Discover Culture
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesGrid;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const indianStates = [
  {
    name: "Maharashtra",
    capital: "Mumbai",
    description: "Known for Bollywood, Ajanta Caves, and vibrant festivals like Ganesh Chaturthi",
    heritage: "Marathi culture, classical dance forms, and architectural marvels",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Karnataka",
    capital: "Bengaluru",
    description: "Home to Mysore Palace, classical Carnatic music, and ancient Hoysala architecture",
    heritage: "Kannada literature, traditional crafts, and temple architecture",
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "Tamil Nadu",
    capital: "Chennai",
    description: "Famous for Dravidian temples, Bharatanatyam dance, and Tamil literature",
    heritage: "Ancient temple complexes, classical arts, and rich culinary traditions",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    description: "Known as God's Own Country, famous for backwaters and Kathakali",
    heritage: "Ayurveda, spice trade history, and traditional performing arts",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Rajasthan",
    capital: "Jaipur",
    description: "Land of maharajas, featuring palaces, forts, and desert culture",
    heritage: "Royal architecture, folk music, and traditional handicrafts",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "West Bengal",
    capital: "Kolkata",
    description: "Cultural capital of India, known for literature, arts, and Durga Puja",
    heritage: "Bengali renaissance, intellectual traditions, and cultural festivals",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Gujarat",
    capital: "Gandhinagar",
    description: "Birthplace of Mahatma Gandhi, known for business acumen and festivals",
    heritage: "Gujarati entrepreneurship, textile traditions, and Jain architecture",
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "Punjab",
    capital: "Chandigarh",
    description: "Land of five rivers, known for Sikhism, agriculture, and vibrant culture",
    heritage: "Sikh traditions, Punjabi music, and agricultural practices",
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Odisha",
    capital: "Bhubaneswar",
    description: "Temple state of India, famous for Jagannath Temple and classical dance",
    heritage: "Kalinga architecture, Odissi dance, and maritime history",
    color: "from-cyan-500 to-blue-600"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indianStates.map((state, index) => (
            <Card 
              key={state.name}
              className="group hover:shadow-elegant transition-heritage cursor-pointer transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-heritage-gold/30"
              onClick={() => handleStateClick(state.name)}
            >
              <CardHeader className="pb-4">
                <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${state.color} mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{state.name}</h3>
                    <p className="text-sm opacity-90">Capital: {state.capital}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-heritage-gold/60"></div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-heritage-saffron transition-colors">
                  {state.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {state.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  <strong className="text-heritage-indigo">Heritage:</strong> {state.heritage}
                </p>
                <Button 
                  variant="cultural" 
                  className="w-full group-hover:scale-105 transition-heritage"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStateClick(state.name);
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
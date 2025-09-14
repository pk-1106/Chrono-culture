import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Calendar, Palette } from "lucide-react";

const stateData = {
  "maharashtra": {
    name: "Maharashtra",
    capital: "Mumbai",
    description: "Maharashtra, the land of Marathas, is known for its rich cultural heritage, Bollywood film industry, and vibrant festivals. The state has been a cradle of Indian civilization with ancient caves, majestic forts, and modern metropolises.",
    traditions: [
      "Ganesh Chaturthi - Grand festival celebrating Lord Ganesha",
      "Lavani - Traditional folk dance form with energetic performances",
      "Warli Art - Ancient tribal art form using geometric patterns",
      "Dhol-Tasha - Traditional drumming during festivals"
    ],
    heritage: [
      "Ajanta and Ellora Caves - UNESCO World Heritage Sites",
      "Chhatrapati Shivaji Maharaj Terminus - Victorian Gothic architecture",
      "Shaniwar Wada - Historic fortified palace in Pune",
      "Gateway of India - Iconic monument in Mumbai"
    ],
    culture: "Marathi culture emphasizes respect for elders, family values, and educational excellence. The state celebrates numerous festivals with great enthusiasm and has contributed significantly to Indian literature, theater, and cinema.",
    cuisine: "Maharashtrian cuisine includes Vada Pav, Puran Poli, Misal Pav, and Bhel Puri. The food culture varies from coastal seafood dishes to spicy inland preparations.",
    color: "from-orange-500 to-red-600"
  },
  "karnataka": {
    name: "Karnataka",
    capital: "Bengaluru",
    description: "Karnataka is renowned for its classical music traditions, ancient architecture, and technological advancement. The state beautifully balances its historical heritage with modern innovation.",
    traditions: [
      "Mysore Dasara - Royal festival with grand processions",
      "Yakshagana - Classical dance-drama from coastal regions",
      "Channapatna Toys - Traditional wooden toy making",
      "Carnatic Music - Classical South Indian music tradition"
    ],
    heritage: [
      "Mysore Palace - Magnificent royal residence",
      "Hampi - UNESCO World Heritage Site with Vijayanagara ruins",
      "Hoysala Temples - Intricate stone architecture",
      "Badami Caves - Ancient rock-cut temples"
    ],
    culture: "Kannada culture values education, arts, and spiritual practices. The state has produced great saints, poets, and musicians who have enriched Indian culture.",
    cuisine: "Karnataka cuisine features Bisi Bele Bath, Mysore Pak, Dosa varieties, and Udupi cuisine. Each region has its distinct culinary specialties.",
    color: "from-yellow-500 to-orange-600"
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    capital: "Chennai",
    description: "Tamil Nadu is the heartland of Dravidian culture, known for its magnificent temples, classical arts, and rich literary traditions spanning over two millennia.",
    traditions: [
      "Bharatanatyam - Classical dance form with spiritual themes",
      "Thaipusam - Festival with elaborate kavadi processions",
      "Kolu - Traditional doll display during Navaratri",
      "Jallikattu - Traditional bull-taming sport"
    ],
    heritage: [
      "Meenakshi Temple - Architectural marvel in Madurai",
      "Brihadeeswarar Temple - UNESCO World Heritage Site",
      "Mahabalipuram Monuments - Ancient rock-cut sculptures",
      "Thanjavur Palace - Maratha architectural heritage"
    ],
    culture: "Tamil culture emphasizes classical arts, literature, and temple traditions. The state has preserved ancient Tamil language and customs while embracing modernity.",
    cuisine: "Tamil cuisine includes Sambar, Rasam, Chettinad dishes, and various rice preparations. Temple food culture is integral to the culinary tradition.",
    color: "from-red-500 to-pink-600"
  },
  "kerala": {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    description: "Kerala, known as 'God's Own Country,' is famous for its backwaters, spice plantations, Ayurvedic traditions, and high literacy rate.",
    traditions: [
      "Kathakali - Classical dance-drama with elaborate costumes",
      "Theyyam - Ritualistic art form of North Kerala",
      "Onam - Harvest festival with Pulikali and boat races",
      "Kalaripayattu - Ancient martial art form"
    ],
    heritage: [
      "Padmanabhaswamy Temple - Ancient Dravidian architecture",
      "Fort Cochin - Colonial heritage and Chinese fishing nets",
      "Mattancherry Palace - Portuguese palace with Kerala murals",
      "Backwaters - Unique ecosystem with traditional houseboats"
    ],
    culture: "Kerala culture blends Hindu, Christian, and Muslim traditions. The state values education, arts, and environmental conservation.",
    cuisine: "Kerala cuisine features coconut-based curries, seafood, Sadhya (feast), and spices. Appam, Puttu, and Fish Curry are popular dishes.",
    color: "from-green-500 to-teal-600"
  },
  "rajasthan": {
    name: "Rajasthan",
    capital: "Jaipur",
    description: "Rajasthan, the Land of Kings, is known for its royal palaces, desert landscapes, colorful festivals, and rich warrior heritage.",
    traditions: [
      "Ghoomar - Traditional folk dance of Rajasthani women",
      "Desert Festival - Cultural celebration in Jaisalmer",
      "Puppet Shows - Traditional Kathputli performances",
      "Camel Fair - Annual gathering in Pushkar"
    ],
    heritage: [
      "Amber Fort - Magnificent hilltop palace in Jaipur",
      "Mehrangarh Fort - Imposing fortress in Jodhpur",
      "Lake Palace - Floating palace in Udaipur",
      "Jaisalmer Fort - Living fort in the Thar Desert"
    ],
    culture: "Rajasthani culture celebrates bravery, hospitality, and artistic excellence. The state has preserved royal traditions and folk arts.",
    cuisine: "Rajasthani cuisine includes Dal-Bati-Churma, Laal Maas, Ghevar, and various desert-adapted dishes with long shelf life.",
    color: "from-pink-500 to-purple-600"
  },
  "west-bengal": {
    name: "West Bengal",
    capital: "Kolkata",
    description: "West Bengal is the cultural capital of India, known for its intellectual traditions, artistic heritage, and significant contribution to Indian renaissance.",
    traditions: [
      "Durga Puja - Grand festival celebrating Goddess Durga",
      "Kali Puja - Festival of lights honoring Goddess Kali",
      "Poila Boishakh - Bengali New Year celebrations",
      "Baul Music - Mystical folk music tradition"
    ],
    heritage: [
      "Victoria Memorial - Colonial architectural masterpiece",
      "Howrah Bridge - Iconic cantilever bridge",
      "Dakshineswar Temple - Sacred temple complex",
      "Sundarbans - UNESCO World Heritage mangrove forests"
    ],
    culture: "Bengali culture emphasizes literature, music, intellectual discourse, and family bonds. The state has produced Nobel laureates and cultural icons.",
    cuisine: "Bengali cuisine features fish, rice, sweets like Rasgulla and Sandesh, and various preparations with mustard oil and panch phoron spices.",
    color: "from-blue-500 to-indigo-600"
  },
  "gujarat": {
    name: "Gujarat",
    capital: "Gandhinagar",
    description: "Gujarat is known for its entrepreneurial spirit, colorful festivals, ancient Indus Valley heritage, and being the birthplace of Mahatma Gandhi.",
    traditions: [
      "Navratri - Nine-day festival with Garba and Dandiya",
      "Rann Utsav - Cultural festival in the white desert",
      "International Kite Festival - Celebrating Makar Sankranti",
      "Janmashtami - Grand celebrations of Krishna's birth"
    ],
    heritage: [
      "Somnath Temple - Sacred Jyotirlinga temple",
      "Dwarkadhish Temple - Krishna's legendary kingdom",
      "Rani ki Vav - UNESCO World Heritage stepwell",
      "Champaner-Pavagadh - Archaeological park with Islamic architecture"
    ],
    culture: "Gujarati culture values business acumen, vegetarianism, and community harmony. The state has strong traditions of trade and philanthropy.",
    cuisine: "Gujarati cuisine is predominantly vegetarian, featuring Dhokla, Thepla, Undhiyu, and elaborate thali meals with sweet and savory dishes.",
    color: "from-amber-500 to-orange-500"
  },
  "punjab": {
    name: "Punjab",
    capital: "Chandigarh",
    description: "Punjab, the land of five rivers, is known for its rich agricultural heritage, Sikh traditions, vibrant festivals, and warm hospitality.",
    traditions: [
      "Bhangra - Energetic folk dance celebrating harvest",
      "Giddha - Traditional women's folk dance",
      "Baisakhi - Harvest festival and Sikh New Year",
      "Lohri - Winter festival with bonfire celebrations"
    ],
    heritage: [
      "Golden Temple - Sacred Sikh pilgrimage site",
      "Jallianwala Bagh - Historic memorial of independence struggle",
      "Anandpur Sahib - Birthplace of Khalsa Panth",
      "Patiala Palace - Royal architectural heritage"
    ],
    culture: "Punjabi culture emphasizes courage, community service, and celebration of life. Sikhism's values of equality and service are central to the culture.",
    cuisine: "Punjabi cuisine includes Butter Chicken, Sarson da Saag with Makki di Roti, Chole Bhature, and rich dairy-based dishes.",
    color: "from-emerald-500 to-green-600"
  },
  "odisha": {
    name: "Odisha",
    capital: "Bhubaneswar",
    description: "Odisha is renowned for its ancient temples, classical dance forms, traditional crafts, and the famous Jagannath Temple in Puri.",
    traditions: [
      "Jagannath Rath Yatra - Grand chariot festival in Puri",
      "Odissi Dance - Classical dance form with spiritual themes",
      "Pattachitra - Traditional cloth painting art",
      "Konark Dance Festival - Celebration of classical arts"
    ],
    heritage: [
      "Konark Sun Temple - UNESCO World Heritage Site",
      "Jagannath Temple - Sacred pilgrimage destination",
      "Udayagiri and Khandagiri Caves - Ancient Jain rock-cut caves",
      "Lingaraj Temple - Magnificent Kalinga architecture"
    ],
    culture: "Odia culture blends Hindu traditions with tribal heritage. The state values classical arts, spiritual practices, and environmental harmony.",
    cuisine: "Odia cuisine features Pakhala (fermented rice), Dalma, Chhena Poda, and various seafood preparations from the coastal regions.",
    color: "from-cyan-500 to-blue-600"
  }
};

const StatePage = () => {
  const { stateName } = useParams<{ stateName: string }>();
  const navigate = useNavigate();
  
  const state = stateName ? stateData[stateName as keyof typeof stateData] : null;

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-cultural">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">State Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested state information is not available.</p>
          <Button onClick={() => navigate("/")} variant="heritage">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-cultural">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-heritage-saffron/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-foreground">{state.name}</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${state.color} mb-8 flex items-center justify-center relative overflow-hidden shadow-elegant`}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{state.name}</h1>
              <div className="flex items-center justify-center gap-2 text-xl">
                <MapPin className="h-5 w-5" />
                <span>Capital: {state.capital}</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {state.description}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Traditions */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heritage-saffron">
                  <Calendar className="h-5 w-5" />
                  Traditions & Festivals
                </CardTitle>
                <CardDescription>
                  Celebrate the vibrant festivals and age-old traditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {state.traditions.map((tradition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-heritage-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{tradition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Heritage Sites */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heritage-indigo">
                  <Palette className="h-5 w-5" />
                  Heritage Sites
                </CardTitle>
                <CardDescription>
                  Architectural marvels and historical monuments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {state.heritage.map((site, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-heritage-emerald rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{site}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Culture */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heritage-emerald">
                  <Users className="h-5 w-5" />
                  Cultural Heritage
                </CardTitle>
                <CardDescription>
                  Values, beliefs, and way of life
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {state.culture}
                </p>
              </CardContent>
            </Card>

            {/* Cuisine */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heritage-gold">
                  <Palette className="h-5 w-5" />
                  Culinary Traditions
                </CardTitle>
                <CardDescription>
                  Flavors and dishes that define the region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {state.cuisine}
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default StatePage;
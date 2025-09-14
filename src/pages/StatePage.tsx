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
    famousFor: ["Bollywood", "Ajanta Ellora Caves", "Vada Pav", "Warli Art"]
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
    famousFor: ["Mysore Palace", "IT Hub", "Coffee", "Silk"]
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
    famousFor: ["Bharatanatyam", "Temples", "Carnatic Music", "Silk Sarees"]
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
    famousFor: ["Backwaters", "Ayurveda", "Spices", "Kathakali"]
  },
  "rajasthan": {
    name: "Rajasthan",
    capital: "Jaipur",
    description: "Rajasthan, the Land of Kings, is known for its royal palaces, desert landscapes, colorful festivals, and rich warrior heritage. The state embodies the grandeur of medieval India with magnificent forts and vibrant culture.",
    traditions: [
      "Ghoomar - Traditional folk dance of Rajasthani women with graceful spins",
      "Desert Festival - Cultural celebration in Jaisalmer showcasing folk traditions",
      "Kathputli - Traditional puppet shows narrating heroic tales",
      "Pushkar Camel Fair - Annual gathering celebrating rural traditions",
      "Teej - Monsoon festival celebrated with songs and traditional attire"
    ],
    heritage: [
      "Amber Fort - Magnificent hilltop palace in Jaipur with mirror work",
      "Mehrangarh Fort - Imposing fortress in Jodhpur overlooking the blue city",
      "Lake Palace - Floating palace in Udaipur, now a luxury hotel",
      "Jaisalmer Fort - Living fort in the Thar Desert with golden architecture",
      "Hawa Mahal - Palace of Winds with unique facade in Jaipur"
    ],
    culture: "Rajasthani culture celebrates bravery, hospitality, and artistic excellence. The state has preserved royal traditions, folk arts, and warrior ethics. The concept of 'Mehmaan Nawazi' (guest hospitality) is deeply rooted in Rajasthani culture.",
    cuisine: "Rajasthani cuisine includes desert-adapted dishes like Dal-Bati-Churma (lentils with wheat balls), Laal Maas (spicy meat curry), Ghevar (sweet delicacy), and various preparations designed for long shelf life. The thali tradition offers multiple flavors in one meal.",
    color: "from-pink-500 to-purple-600",
    festivals: ["Teej", "Gangaur", "Desert Festival", "Diwali"],
    languages: ["Hindi", "Rajasthani", "English"],
    famousFor: ["Palaces", "Desert", "Folk Music", "Handicrafts"]
  },
  "west-bengal": {
    name: "West Bengal",
    capital: "Kolkata",
    description: "West Bengal is the cultural capital of India, known for its intellectual traditions, artistic heritage, and significant contribution to the Indian renaissance. The state has produced Nobel laureates, renowned artists, and literary giants.",
    traditions: [
      "Durga Puja - Grand festival celebrating Goddess Durga with artistic pandals",
      "Kali Puja - Festival of lights honoring Goddess Kali with devotional fervor",
      "Poila Boishakh - Bengali New Year celebrated with traditional rituals",
      "Baul Music - Mystical folk music tradition by wandering minstrels",
      "Kali Puja - Diwali celebration unique to Bengal with clay lamps"
    ],
    heritage: [
      "Victoria Memorial - Colonial architectural masterpiece in white marble",
      "Howrah Bridge - Iconic cantilever bridge over river Hooghly",
      "Dakshineswar Temple - Sacred temple complex associated with Ramakrishna",
      "Sundarbans - UNESCO World Heritage mangrove forests with Royal Bengal Tigers",
      "Santiniketan - Visva-Bharati University founded by Rabindranath Tagore"
    ],
    culture: "Bengali culture emphasizes literature, music, intellectual discourse, and family bonds. The state values artistic expression, social reform, and educational excellence. The philosophy of 'Humanism' and appreciation for arts define Bengali culture.",
    cuisine: "Bengali cuisine features fish and rice as staples, famous sweets like Rasgulla and Sandesh, and various preparations with mustard oil and panch phoron spices. From hilsa fish curry to mishti doi (sweet yogurt), Bengali food celebrates subtle flavors and traditional cooking methods.",
    color: "from-blue-500 to-indigo-600",
    festivals: ["Durga Puja", "Kali Puja", "Poila Boishakh", "Diwali"],
    languages: ["Bengali", "Hindi", "English"],
    famousFor: ["Literature", "Sweets", "Durga Puja", "Art"]
  },
  "gujarat": {
    name: "Gujarat",
    capital: "Gandhinagar",
    description: "Gujarat is known for its entrepreneurial spirit, colorful festivals, ancient Indus Valley heritage, and being the birthplace of Mahatma Gandhi. The state combines business acumen with rich cultural traditions.",
    traditions: [
      "Navratri - Nine-day festival with Garba and Dandiya Raas dancing",
      "Rann Utsav - Cultural festival in the white desert of Kutch",
      "International Kite Festival - Celebrating Makar Sankranti with colorful kites",
      "Janmashtami - Grand celebrations of Lord Krishna's birth with human pyramids",
      "Sharad Purnima - Full moon festival celebrated with traditional dances"
    ],
    heritage: [
      "Somnath Temple - Sacred Jyotirlinga temple rebuilt multiple times",
      "Dwarkadhish Temple - Legendary kingdom of Lord Krishna",
      "Rani ki Vav - UNESCO World Heritage stepwell with intricate carvings",
      "Champaner-Pavagadh - Archaeological park with Islamic architecture",
      "Sabarmati Ashram - Gandhi's residence and center of independence movement"
    ],
    culture: "Gujarati culture values business ethics, vegetarianism, and community harmony. The state has strong traditions of trade, philanthropy, and peaceful coexistence. The Gujarati philosophy of 'Sarve Bhavantu Sukhinah' (may all be happy) guides social interactions.",
    cuisine: "Gujarati cuisine is predominantly vegetarian, featuring dishes like Dhokla (steamed cake), Thepla (spiced flatbread), Undhiyu (mixed vegetable curry), and elaborate thali meals with perfect balance of sweet, salty, and savory flavors. Each meal ends with traditional sweets.",
    color: "from-amber-500 to-orange-500",
    festivals: ["Navratri", "Diwali", "Kite Festival", "Janmashtami"],
    languages: ["Gujarati", "Hindi", "English"],
    famousFor: ["Business", "Textiles", "Garba Dance", "Vegetarian Food"]
  },
  "punjab": {
    name: "Punjab",
    capital: "Chandigarh",
    description: "Punjab, the land of five rivers, is known for its rich agricultural heritage, Sikh traditions, vibrant festivals, and warm hospitality. The state is India's granary and birthplace of Sikhism.",
    traditions: [
      "Bhangra - Energetic folk dance celebrating harvest and joy",
      "Giddha - Traditional women's folk dance with rhythmic clapping",
      "Baisakhi - Harvest festival and Sikh New Year celebration",
      "Lohri - Winter festival with bonfire celebrations and folk songs",
      "Karva Chauth - Festival where married women fast for their husbands"
    ],
    heritage: [
      "Golden Temple - Sacred Sikh pilgrimage site with golden architecture",
      "Jallianwala Bagh - Historic memorial of the independence struggle",
      "Anandpur Sahib - Birthplace of Khalsa Panth and Sikh military tradition",
      "Patiala Palace - Royal architectural heritage of erstwhile princely state",
      "Wagah Border - Daily flag ceremony showcasing patriotic fervor"
    ],
    culture: "Punjabi culture emphasizes courage, community service (seva), and celebration of life. Sikhism's values of equality, service, and brotherhood are central to the culture. The concept of 'Sarbat da Bhala' (welfare of all) guides Punjabi society.",
    cuisine: "Punjabi cuisine includes rich dishes like Butter Chicken, Sarson da Saag with Makki di Roti, Chole Bhature, and Amritsari Kulcha. The food is characterized by generous use of dairy products, wheat, and robust flavors. Lassi (yogurt drink) is a traditional accompaniment.",
    color: "from-emerald-500 to-green-600",
    festivals: ["Baisakhi", "Lohri", "Diwali", "Holi"],
    languages: ["Punjabi", "Hindi", "English"],
    famousFor: ["Golden Temple", "Agriculture", "Bhangra", "Food"]
  },
  "odisha": {
    name: "Odisha",
    capital: "Bhubaneswar",
    description: "Odisha is renowned for its ancient temples, classical dance forms, traditional crafts, and the famous Jagannath Temple in Puri. The state preserves ancient Kalinga heritage while embracing modern development.",
    traditions: [
      "Jagannath Rath Yatra - Grand chariot festival in Puri drawing millions",
      "Odissi Dance - Classical dance form with spiritual themes and graceful movements",
      "Pattachitra - Traditional cloth painting art depicting mythological stories",
      "Konark Dance Festival - Annual celebration of classical arts",
      "Chhau Dance - Folk dance with masks depicting mythological characters"
    ],
    heritage: [
      "Konark Sun Temple - UNESCO World Heritage Site designed as sun god's chariot",
      "Jagannath Temple - Sacred pilgrimage destination in Puri",
      "Udayagiri and Khandagiri Caves - Ancient Jain rock-cut caves",
      "Lingaraj Temple - Magnificent example of Kalinga architecture",
      "Chilika Lake - Largest brackish water lagoon in India"
    ],
    culture: "Odia culture blends Hindu traditions with tribal heritage. The state values classical arts, spiritual practices, environmental harmony, and community cooperation. The philosophy of 'Jagannath consciousness' unites diverse communities.",
    cuisine: "Odia cuisine features unique dishes like Pakhala (fermented rice), Dalma (lentils with vegetables), Chhena Poda (cheese dessert), and various seafood preparations from coastal regions. Temple food traditions include mahaprasad offerings.",
    color: "from-cyan-500 to-blue-600",
    festivals: ["Jagannath Rath Yatra", "Durga Puja", "Kali Puja", "Diwali"],
    languages: ["Odia", "Hindi", "English"],
    famousFor: ["Jagannath Temple", "Konark Sun Temple", "Odissi Dance", "Handicrafts"]
  },
  "uttar-pradesh": {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    description: "Uttar Pradesh, India's most populous state, is home to the iconic Taj Mahal, ancient city of Varanasi, and rich Mughal heritage. The state has been the heartland of Indian civilization and spirituality.",
    traditions: [
      "Ganga Aarti - Evening prayer ceremony on the ghats of Varanasi",
      "Holi - Festival of colors celebrated with great enthusiasm",
      "Ram Leela - Dramatic performances depicting Ramayana stories",
      "Kumbh Mela - World's largest religious gathering held every 12 years",
      "Lucknowi Tehzeeb - Refined cultural etiquette of Lucknow"
    ],
    heritage: [
      "Taj Mahal - UNESCO World Heritage Site and wonder of the world",
      "Fatehpur Sikri - Abandoned Mughal city with magnificent architecture",
      "Varanasi Ghats - Ancient spiritual center on river Ganges",
      "Agra Fort - Magnificent Mughal fortress",
      "Sarnath - Buddhist pilgrimage site where Buddha gave first sermon"
    ],
    culture: "UP culture represents diverse traditions from Hindu spirituality to Islamic heritage. The state values religious tolerance, classical arts, and academic excellence. Ancient gurukul traditions coexist with modern educational institutions.",
    cuisine: "UP cuisine includes Awadhi delicacies like Biryani, Kebabs, Korma, and sweets like Petha from Agra. Each region offers specialties - from Banarasi paan to Lucknowi cuisine known for refined flavors and cooking techniques.",
    color: "from-purple-500 to-indigo-600",
    festivals: ["Holi", "Diwali", "Ram Navami", "Eid"],
    languages: ["Hindi", "Urdu", "English"],
    famousFor: ["Taj Mahal", "Varanasi", "Awadhi Cuisine", "Classical Music"]
  },
  "madhya-pradesh": {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    description: "Madhya Pradesh, the heart of India, is known for its ancient temples, tribal culture, wildlife sanctuaries, and architectural marvels. The state preserves prehistoric rock art and medieval monuments.",
    traditions: [
      "Khajuraho Dance Festival - Classical dance performances at temple complex",
      "Gond Art - Tribal art form using dots and lines in vibrant colors",
      "Bhagoria - Tribal festival where young people choose life partners",
      "Malwa Folk Songs - Traditional music celebrating rural life",
      "Bundeli Culture - Regional traditions of Bundelkhand region"
    ],
    heritage: [
      "Khajuraho Temples - UNESCO World Heritage Site with erotic sculptures",
      "Sanchi Stupa - Ancient Buddhist monument with Mauryan architecture",
      "Bhimbetka Caves - UNESCO site with prehistoric rock paintings",
      "Gwalior Fort - Magnificent hilltop fortress with palaces",
      "Mandu - Ruined city with Afghan architecture"
    ],
    culture: "MP culture blends tribal traditions with mainstream Indian culture. The state values nature worship, community festivals, and artistic expression. Tribal communities maintain ancient customs alongside modern development.",
    cuisine: "MP cuisine includes traditional dishes like Poha-Jalebi, Dal Bafla, Bhutte ka Kees, and tribal preparations using forest produce. Each region offers distinct flavors from spicy Indori street food to subtle Malwa cuisine.",
    color: "from-teal-500 to-cyan-600",
    festivals: ["Khajuraho Dance Festival", "Navratri", "Holi", "Diwali"],
    languages: ["Hindi", "Gondi", "English"],
    famousFor: ["Khajuraho Temples", "Tiger Reserves", "Tribal Culture", "Handicrafts"]
  },
  "assam": {
    name: "Assam",
    capital: "Dispur",
    description: "Assam, the gateway to Northeast India, is famous for tea gardens, Bihu festival, one-horned rhinoceros, and rich Assamese culture. The state is known for its natural beauty and cultural diversity.",
    traditions: [
      "Bihu - New Year festival with traditional dances and songs",
      "Sattriya - Classical dance form developed in Vaishnavite monasteries",
      "Japi - Traditional hat made from bamboo and palm leaves",
      "Tea Culture - Traditional tea ceremonies and cultivation practices",
      "Borgeet - Devotional songs composed by Shankardev"
    ],
    heritage: [
      "Kamakhya Temple - Sacred Shakti Peetha on Neelachal Hill",
      "Kaziranga National Park - UNESCO site home to one-horned rhinoceros",
      "Majuli Island - World's largest river island with Vaishnavite culture",
      "Sivasagar - Ancient Ahom capital with temples and palaces",
      "Tea Gardens - Colonial-era plantations in Assam hills"
    ],
    culture: "Assamese culture emphasizes harmony with nature, community cooperation, and religious tolerance. The neo-Vaishnavite movement by Shankardev shaped cultural identity. Respect for elders and environmental conservation are core values.",
    cuisine: "Assamese cuisine features rice as staple with fish, duck, pigeon, and leafy vegetables. Traditional dishes include fish curry, pitika (mashed preparations), and various rice preparations. Tea is an integral part of daily life.",
    color: "from-green-600 to-emerald-700",
    festivals: ["Bihu", "Durga Puja", "Kali Puja", "Poush Parbon"],
    languages: ["Assamese", "Bengali", "Hindi"],
    famousFor: ["Tea", "Silk", "Kaziranga", "Bihu Dance"]
  },
  "bihar": {
    name: "Bihar",
    capital: "Patna",
    description: "Bihar, the birthplace of Buddhism and Jainism, is rich in ancient history and spiritual heritage. The state was the center of powerful empires like Maurya and Gupta and continues to be important for pilgrimage.",
    traditions: [
      "Chhath Puja - Ancient festival worshipping Sun god with river rituals",
      "Madhubani Art - Traditional folk art with intricate patterns",
      "Sama Chakeva - Folk festival celebrating brother-sister relationship",
      "Bhojpuri Folk Songs - Traditional music expressing rural life",
      "Gamghar - Traditional wedding ceremonies with ancient rituals"
    ],
    heritage: [
      "Mahabodhi Temple - UNESCO site where Buddha attained enlightenment",
      "Nalanda University - Ancient center of learning and Buddhist education",
      "Rajgir - Historic city with Buddhist and Jain significance",
      "Patna Museum - Repository of Mauryan and Gupta period artifacts",
      "Vikramshila University - Ancient Buddhist university ruins"
    ],
    culture: "Bihari culture values education, spirituality, and family traditions. The state has contributed significantly to Indian philosophy, literature, and freedom struggle. Respect for teachers and scholarly pursuits define Bihari ethos.",
    cuisine: "Bihari cuisine includes traditional dishes like Litti-Chokha, Sattu preparations, fish curry, and various sweets. The food reflects agricultural abundance with extensive use of grains, pulses, and seasonal vegetables.",
    color: "from-yellow-600 to-amber-600",
    festivals: ["Chhath Puja", "Holi", "Diwali", "Dussehra"],
    languages: ["Hindi", "Bhojpuri", "Maithili"],
    famousFor: ["Buddhism", "Madhubani Art", "Chhath Puja", "Ancient Universities"]
  },
  "himachal-pradesh": {
    name: "Himachal Pradesh",
    capital: "Shimla",
    description: "Himachal Pradesh, the land of gods, is known for its pristine hill stations, Buddhist monasteries, adventure tourism, and apple orchards. The state offers spiritual retreats and natural beauty.",
    traditions: [
      "Kullu Dussehra - Unique celebration with local deities procession",
      "Kinnauri Folk Dance - Traditional dances of tribal communities",
      "Chamba Rumal - Traditional embroidery work on handkerchiefs",
      "Himachali Folk Songs - Mountain ballads celebrating nature",
      "Buddhist Festivals - Monastery celebrations with masked dances"
    ],
    heritage: [
      "Shimla - Colonial hill station and former British summer capital",
      "Dharamshala - Home to Dalai Lama and Tibetan government in exile",
      "Manali - Ancient town with Hadimba temple and mountain culture",
      "Key Monastery - Ancient Buddhist monastery in Spiti Valley",
      "Kangra Fort - Ancient fort overlooking Kangra valley"
    ],
    culture: "Himachali culture blends Hindu traditions with Buddhist influences and tribal customs. The state values environmental conservation, community cooperation, and peaceful coexistence of different communities.",
    cuisine: "Himachali cuisine includes dishes like Dham (festive meal), Chana Madra, Babru, and various preparations using local ingredients like rajma, rice, and seasonal vegetables. Apple-based products are specialty items.",
    color: "from-blue-600 to-indigo-700",
    festivals: ["Kullu Dussehra", "Diwali", "Losar", "Shivratri"],
    languages: ["Hindi", "Pahari", "English"],
    famousFor: ["Hill Stations", "Adventure Sports", "Apples", "Buddhism"]
  },
  "haryana": {
    name: "Haryana",
    capital: "Chandigarh",
    description: "Haryana, surrounding Delhi, is known for its agricultural prosperity, wrestling tradition, folk music, and rapid industrial development. The state has ancient historical significance with sites from Mahabharata.",
    traditions: [
      "Jhumar - Traditional folk dance performed during harvest",
      "Saang - Folk theater tradition narrating historical tales",
      "Wrestling - Ancient tradition producing Olympic medalists",
      "Teej - Monsoon festival celebrated by women",
      "Karva Chauth - Festival where wives fast for husbands' longevity"
    ],
    heritage: [
      "Kurukshetra - Battlefield of Mahabharata and birthplace of Bhagavad Gita",
      "Panipat - Historic battleground that shaped Indian history",
      "Surajkund - Ancient reservoir with beautiful stonework",
      "Pinjore Gardens - Mughal-style garden with architectural beauty",
      "Thanesar - Ancient town with religious and historical significance"
    ],
    culture: "Haryanvi culture emphasizes agricultural values, physical strength, and community solidarity. The state values hard work, joint family system, and traditional gender roles while adapting to modernization.",
    cuisine: "Haryanvi cuisine includes hearty dishes like Bajra Roti with Sarson ka Saag, Kadhi-Chawal, Besan Masala Roti, and fresh dairy products. The food reflects agricultural abundance and nutritious rural diet.",
    color: "from-orange-600 to-red-700",
    festivals: ["Teej", "Karva Chauth", "Holi", "Diwali"],
    languages: ["Hindi", "Haryanvi", "Punjabi"],
    famousFor: ["Wrestling", "Agriculture", "Kurukshetra", "Folk Music"]
  },
  "jharkhand": {
    name: "Jharkhand",
    capital: "Ranchi",
    description: "Jharkhand, rich in mineral resources and tribal culture, is known for its waterfalls, forests, and indigenous traditions. The state was carved out of Bihar to preserve tribal identity and natural heritage.",
    traditions: [
      "Sarhul - Spring festival worshipping nature and trees",
      "Karma - Harvest festival with traditional dances around Karma tree",
      "Tribal Dances - Various folk dances of different tribal communities",
      "Paitkar Art - Traditional scroll painting by tribal artists",
      "Tusu Festival - Folk festival celebrated during winter season"
    ],
    heritage: [
      "Betla National Park - Wildlife sanctuary with diverse flora and fauna",
      "Hundru Falls - Spectacular waterfall formed by river Subarnarekha",
      "Rajrappa Temple - Sacred site at confluence of rivers",
      "Parasnath Hills - Highest peak and Jain pilgrimage site",
      "Tribal Museums - Showcasing indigenous culture and traditions"
    ],
    culture: "Jharkhand culture is predominantly tribal with strong connection to nature and community living. The state values environmental conservation, traditional knowledge systems, and collective decision-making processes.",
    cuisine: "Jharkhand cuisine includes tribal preparations like Handia (rice beer), various preparations using forest produce, bamboo shoot curry, and dishes made from millets and indigenous grains.",
    color: "from-green-700 to-teal-700",
    festivals: ["Sarhul", "Karma", "Sohrai", "Tusu"],
    languages: ["Hindi", "Santali", "Ho", "Mundari"],
    famousFor: ["Tribal Culture", "Minerals", "Waterfalls", "Forests"]
  },
  "andhra-pradesh": {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    description: "Andhra Pradesh is known for its ancient temples, classical dance traditions, spicy cuisine, and rich Telugu culture. The state has significant Buddhist heritage and coastal beauty.",
    traditions: [
      "Kuchipudi - Classical dance form originated in Kuchipudi village",
      "Ugadi - Telugu New Year celebrated with traditional rituals",
      "Bonalu - Festival honoring goddess Mahakali with offerings",
      "Sankranti - Harvest festival with kite flying and rangoli",
      "Bathukamma - Floral festival celebrated by women during Navaratri"
    ],
    heritage: [
      "Tirupati Balaji Temple - One of richest temples and pilgrimage site",
      "Amaravati Stupa - Ancient Buddhist monument with sculptural art",
      "Charminar - Iconic monument symbolizing Hyderabad's heritage",
      "Srisailam Temple - Sacred Jyotirlinga temple in Nallamala hills",
      "Lepakshi Temple - Vijayanagara architecture with hanging pillar"
    ],
    culture: "Andhra culture emphasizes devotion, classical arts, and Telugu literature. The state values family traditions, hospitality, and religious festivals. Telugu film industry contributes significantly to cultural identity.",
    cuisine: "Andhra cuisine is famous for its spicy preparations like Hyderabadi Biryani, Gongura curry, Pesarattu, and various rice dishes. The coastal regions offer seafood specialties while inland areas feature vegetarian delicacies.",
    color: "from-red-600 to-pink-700",
    festivals: ["Ugadi", "Sankranti", "Dussehra", "Diwali"],
    languages: ["Telugu", "Hindi", "English"],
    famousFor: ["Tirupati Temple", "Kuchipudi", "Spicy Food", "Pearls"]
  },
  "telangana": {
    name: "Telangana",
    capital: "Hyderabad",
    description: "Telangana, India's youngest state, is known for its rich Nizami heritage, IT industry, and distinctive Telugu culture. Hyderabad serves as a major technology hub while preserving historical grandeur.",
    traditions: [
      "Bathukamma - Floral festival unique to Telangana celebrating goddess",
      "Bonalu - Traditional festival offering prayers to goddess Mahakali",
      "Sammakka Saralamma Jatara - Tribal festival attracting millions",
      "Dussehra - Grand celebration with cultural programs",
      "Ramzan - Islamic festival celebrated with great fervor in Hyderabad"
    ],
    heritage: [
      "Golconda Fort - Medieval fortress famous for acoustic engineering",
      "Qutb Shahi Tombs - Architectural marvels of Deccan sultanate",
      "Charminar - Iconic monument and symbol of Hyderabad",
      "Ramappa Temple - UNESCO World Heritage Site with Kakatiya architecture",
      "Warangal Fort - Ruins of Kakatiya dynasty capital"
    ],
    culture: "Telangana culture blends Telugu traditions with Islamic influences from Nizami rule. The state values hospitality, pluralism, and cultural synthesis. Modern technology coexists with traditional crafts.",
    cuisine: "Telangana cuisine includes distinctive dishes like Hyderabadi Biryani, Haleem, Qubani ka Meetha, and traditional preparations like Jonna Rotte (sorghum bread) and Gongura curry reflecting both royal and rural traditions.",
    color: "from-purple-600 to-indigo-700",
    festivals: ["Bathukamma", "Bonalu", "Dussehra", "Eid"],
    languages: ["Telugu", "Urdu", "Hindi"],
    famousFor: ["IT Industry", "Biryani", "Charminar", "Pearls"]
  },
  "chhattisgarh": {
    name: "Chhattisgarh",
    capital: "Raipur",
    description: "Chhattisgarh, rich in mineral resources and tribal culture, is known for its ancient temples, traditional crafts, and natural beauty. The state preserves indigenous traditions while developing modern industries.",
    traditions: [
      "Bastar Dussehra - Unique 75-day festival celebrating tribal traditions",
      "Panthi Dance - Traditional dance form performed during festivals",
      "Dhokra Art - Ancient metal casting technique by tribal artisans",
      "Folk Music - Various tribal musical traditions with bamboo instruments",
      "Hareli - Agricultural festival marking beginning of monsoon"
    ],
    heritage: [
      "Chitrakote Falls - India's widest waterfall known as 'Niagara of India'",
      "Bhoramdeo Temple - Ancient temple complex called 'Khajuraho of Chhattisgarh'",
      "Sirpur - Archaeological site with Buddhist and Hindu monuments",
      "Bastar Palace - Royal residence showcasing tribal architecture",
      "Tribal Museums - Preserving indigenous art and culture"
    ],
    culture: "Chhattisgarh culture is predominantly tribal with rich oral traditions, nature worship, and community festivals. The state values environmental harmony, traditional crafts, and collective living.",
    cuisine: "Chhattisgarh cuisine includes traditional dishes like Chila, Farra, Petha curry, and various preparations using rice, which is the staple food. Tribal communities have unique cooking methods using bamboo and forest produce.",
    color: "from-emerald-600 to-green-700",
    festivals: ["Bastar Dussehra", "Hareli", "Pola", "Teej"],
    languages: ["Hindi", "Chhattisgarhi", "Gondi"],
    famousFor: ["Tribal Culture", "Waterfalls", "Handicrafts", "Steel"]
  },
  "goa": {
    name: "Goa",
    capital: "Panaji",
    description: "Goa, India's smallest state, is a tropical paradise known for its pristine beaches, Portuguese colonial heritage, vibrant nightlife, and unique Indo-Portuguese culture that blends Indian and European influences.",
    traditions: [
      "Carnival - Colorful festival with parades, music, and dancing",
      "Shigmo - Spring festival celebrated with folk dances and floats",
      "Feast of St. Francis Xavier - Christian pilgrimage and celebration",
      "Sao Joao - Monsoon festival with jumping into wells tradition",
      "Ganesh Chaturthi - Elaborate celebrations with creative pandals"
    ],
    heritage: [
      "Basilica of Bom Jesus - UNESCO World Heritage Site housing St. Francis Xavier",
      "Old Goa Churches - Colonial Portuguese religious architecture",
      "Fort Aguada - Portuguese fortress overlooking Arabian Sea",
      "Fontainhas - Latin Quarter with colorful Portuguese houses",
      "Spice Plantations - Colonial-era spice cultivation sites"
    ],
    culture: "Goan culture is a unique blend of Indian traditions and Portuguese influences. The state values religious harmony, artistic expression, and laid-back lifestyle. Music, dance, and festivities are integral to Goan identity.",
    cuisine: "Goan cuisine features seafood specialties like Fish Curry Rice, Vindaloo, Xacuti, and Portuguese-influenced dishes like Bebinca and Sorpotel. Feni (cashew liquor) and coconut-based preparations are signature elements.",
    color: "from-cyan-600 to-blue-700",
    festivals: ["Carnival", "Shigmo", "Christmas", "Ganesh Chaturthi"],
    languages: ["Konkani", "Portuguese", "English", "Hindi"],
    famousFor: ["Beaches", "Portuguese Heritage", "Seafood", "Nightlife"]
  },
  "uttarakhand": {
    name: "Uttarakhand",
    capital: "Dehradun",
    description: "Uttarakhand, the land of gods, is known for its sacred Char Dham pilgrimage, majestic Himalayas, yoga capital Rishikesh, and pristine natural beauty. The state attracts spiritual seekers and adventure enthusiasts.",
    traditions: [
      "Ganga Aarti - Evening prayer ceremony at Har Ki Pauri, Haridwar",
      "Kumaoni Folk Dance - Traditional mountain dances with regional music",
      "Nanda Devi Raj Jat - Ancient pilgrimage trek to Nanda Devi peak",
      "Phool Dei - Spring festival celebrating flowers and nature",
      "International Yoga Day - Global celebration originated from Rishikesh"
    ],
    heritage: [
      "Char Dham - Four sacred pilgrimage sites: Kedarnath, Badrinath, Gangotri, Yamunotri",
      "Haridwar - Sacred city where Ganges enters plains",
      "Rishikesh - World capital of yoga and meditation",
      "Valley of Flowers - UNESCO World Heritage Site with alpine flowers",
      "Jim Corbett National Park - India's oldest national park"
    ],
    culture: "Uttarakhand culture emphasizes spirituality, environmental conservation, and simple mountain life. The state values ancient Vedic traditions, yoga practices, and harmony with nature.",
    cuisine: "Uttarakhand cuisine includes mountain delicacies like Kafuli, Phaanu, Bal Mithai, and various preparations using local grains like mandua and jhangora. The food reflects high-altitude living and nutritional needs.",
    color: "from-indigo-600 to-purple-700",
    festivals: ["Kumbh Mela", "Nanda Devi Fair", "Makar Sankranti", "Diwali"],
    languages: ["Hindi", "Garhwali", "Kumaoni"],
    famousFor: ["Char Dham", "Yoga", "Adventure Sports", "Hill Stations"]
  },
  "arunachal-pradesh": {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    description: "Arunachal Pradesh, the land of rising sun, is known for its pristine natural beauty, diverse tribal cultures, Buddhist monasteries, and being the easternmost state where sun rises first in India.",
    traditions: [
      "Losar - Tibetan New Year celebrated by Buddhist communities",
      "Nyokum - Festival of Nyishi tribe celebrating harvest",
      "Solung - Festival of Adi tribe with traditional dances",
      "Reh - Festival of Idu Mishmi tribe honoring ancestors",
      "Monpa Festivals - Buddhist celebrations in Tawang region"
    ],
    heritage: [
      "Tawang Monastery - Largest monastery in India with Tibetan architecture",
      "Ziro Valley - UNESCO tentative site with Apatani tribal culture",
      "Namdapha National Park - Biodiversity hotspot with rare species",
      "Bomdila Monastery - Buddhist monastery with mountain views",
      "Sela Pass - High-altitude pass connecting Tawang with rest of India"
    ],
    culture: "Arunachal culture is diverse with multiple tribal communities maintaining distinct traditions. The state values environmental conservation, community harmony, and preservation of indigenous customs.",
    cuisine: "Arunachal cuisine varies by tribe but commonly includes rice, meat preparations, bamboo shoot dishes, and fermented foods. Thukpa (noodle soup) and momos reflect Tibetan influences.",
    color: "from-teal-600 to-cyan-700",
    festivals: ["Losar", "Dree", "Boori Boot", "Nyokum"],
    languages: ["English", "Hindi", "Various tribal languages"],
    famousFor: ["Sunrise Point", "Buddhism", "Tribal Culture", "Natural Beauty"]
  },
  "manipur": {
    name: "Manipur",
    capital: "Imphal",
    description: "Manipur, the jewel of India, is known for its classical Manipuri dance, polo sport origin, scenic beauty, and rich cultural traditions. The state is famous for its martial arts and handloom textiles.",
    traditions: [
      "Manipuri Dance - Classical dance form with devotional themes",
      "Polo - Traditional sport originated in Manipur",
      "Lai Haraoba - Ancient festival celebrating local deities",
      "Yaoshang - Holi celebration with traditional sports",
      "Kang - Traditional game similar to field hockey"
    ],
    heritage: [
      "Kangla Fort - Ancient seat of Manipur rulers",
      "Loktak Lake - Largest freshwater lake in Northeast India",
      "Ima Keithel - Women's market run entirely by women",
      "Shree Govindajee Temple - Historic Vaishnavite temple",
      "War Cemetery - Memorial for soldiers of World War II"
    ],
    culture: "Manipuri culture emphasizes classical arts, martial traditions, and Vaishnavite devotion. The state values women's empowerment, artistic excellence, and preservation of traditional sports.",
    cuisine: "Manipuri cuisine includes dishes like Eromba, Singju, Kangshoi, and fish preparations with local herbs. The food reflects both valley and hill cultures with extensive use of fermented ingredients.",
    color: "from-pink-600 to-red-700",
    festivals: ["Lai Haraoba", "Yaoshang", "Kang", "Durga Puja"],
    languages: ["Manipuri", "English", "Hindi"],
    famousFor: ["Classical Dance", "Polo", "Handloom", "Martial Arts"]
  },
  "meghalaya": {
    name: "Meghalaya",
    capital: "Shillong",
    description: "Meghalaya, the abode of clouds, is known for its living root bridges, highest rainfall, matrilineal society, and scenic hill stations. The state is famous for its unique Khasi and Garo cultures.",
    traditions: [
      "Living Root Bridges - Ancient bioengineering by Khasi tribes",
      "Matrilineal Society - Unique social system where lineage follows mother",
      "Shad Suk Mynsiem - Traditional Khasi dance celebrating spring",
      "Wangala - Garo harvest festival with traditional drums",
      "Ka Pomblang Nongkrem - Religious festival of Khasi community"
    ],
    heritage: [
      "Cherrapunji - Wettest place on earth with unique geography",
      "Mawlynnong - Asia's cleanest village with community tourism",
      "Dawki - Crystal clear river with stunning natural beauty",
      "Elephant Falls - Scenic waterfall near Shillong",
      "Don Bosco Museum - Showcasing Northeast Indian cultures"
    ],
    culture: "Meghalaya culture is unique with matrilineal traditions where women are property inheritors. The state values environmental conservation, community cooperation, and indigenous knowledge systems.",
    cuisine: "Meghalaya cuisine includes dishes like Jadoh (rice with meat), Tungrymbai (fermented soybean), Dohkhlieh (salad), and various pork preparations. The food reflects hill culture and indigenous ingredients.",
    color: "from-green-800 to-emerald-800",
    festivals: ["Shad Suk Mynsiem", "Wangala", "Christmas", "Durga Puja"],
    languages: ["Khasi", "Garo", "English"],
    famousFor: ["Living Root Bridges", "Rainfall", "Matrilineal Society", "Hill Stations"]
  },
  "mizoram": {
    name: "Mizoram",
    capital: "Aizawl",
    description: "Mizoram, the land of blue mountains, is known for its bamboo forests, vibrant festivals, high literacy rate, and peaceful Mizo culture. The state has successful community-based governance.",
    traditions: [
      "Chapchar Kut - Spring festival celebrating bamboo cutting",
      "Mim Kut - Post-harvest festival with traditional dances",
      "Pawl Kut - Winter festival marking end of harvest season",
      "Cheraw Dance - Traditional bamboo dance performed by women",
      "Zawlbuk - Traditional bachelor dormitory system"
    ],
    heritage: [
      "Reiek Tlang - Scenic hilltop with panoramic views",
      "Phawngpui Peak - Highest peak in Mizoram",
      "Vantawng Falls - Spectacular waterfall in Serchhip district",
      "Solomon's Temple - Modern architectural marvel",
      "Mizoram State Museum - Showcasing Mizo culture and history"
    ],
    culture: "Mizo culture emphasizes community cooperation, social harmony, and Christian values. The state values education, cleanliness, and peaceful coexistence with strong community institutions.",
    cuisine: "Mizo cuisine includes dishes like Bai (vegetable stew), Sawhchiar (rice with meat), Vawksa Rep (smoked pork), and various bamboo shoot preparations. The food reflects hill culture and local ingredients.",
    color: "from-blue-700 to-indigo-800",
    festivals: ["Chapchar Kut", "Mim Kut", "Pawl Kut", "Christmas"],
    languages: ["Mizo", "English", "Hindi"],
    famousFor: ["Bamboo Dance", "Peaceful Society", "High Literacy", "Bamboo Products"]
  },
  "nagaland": {
    name: "Nagaland",
    capital: "Kohima",
    description: "Nagaland, the land of festivals, is known for its vibrant Hornbill festival, diverse tribal cultures, warrior traditions, and unique Naga heritage. The state celebrates unity in diversity.",
    traditions: [
      "Hornbill Festival - Festival of festivals showcasing all Naga tribes",
      "Aoling - New Year festival of Konyak tribe",
      "Sekrenyi - Purification festival of Angami tribe",
      "Tuluni - Rice beer festival of Sumi tribe",
      "War Dances - Traditional performances depicting warrior heritage"
    ],
    heritage: [
      "Kohima War Cemetery - Memorial for Battle of Kohima in WWII",
      "Dzukou Valley - Valley of flowers with seasonal blooms",
      "Kachari Ruins - Archaeological remains of medieval period",
      "Mon District - Land of Konyak headhunters with unique culture",
      "Naga Heritage Village - Museum showcasing tribal traditions"
    ],
    culture: "Naga culture celebrates tribal diversity, warrior traditions, and community festivals. The state values indigenous customs, oral traditions, and collective decision-making processes.",
    cuisine: "Naga cuisine includes spicy dishes like Naga Raja Chili preparations, smoked pork, bamboo shoot curry, and fermented fish. The food is known for its fierce spiciness and unique flavors.",
    color: "from-red-700 to-pink-800",
    festivals: ["Hornbill Festival", "Aoling", "Sekrenyi", "Christmas"],
    languages: ["English", "Nagamese", "Various tribal languages"],
    famousFor: ["Hornbill Festival", "Tribal Culture", "Spicy Food", "Handloom"]
  },
  "sikkim": {
    name: "Sikkim",
    capital: "Gangtok",
    description: "Sikkim, a Himalayan kingdom, is known for its Buddhist monasteries, organic farming, stunning mountain views of Kanchenjunga, and being India's first fully organic state.",
    traditions: [
      "Losar - Tibetan New Year with traditional celebrations",
      "Saga Dawa - Buddha's enlightenment festival",
      "Pang Lhabsol - Guardian deity festival unique to Sikkim",
      "Dashain - Nepali festival celebrated with enthusiasm",
      "Cham Dance - Masked Buddhist monastery dances"
    ],
    heritage: [
      "Rumtek Monastery - Important Tibetan Buddhist monastery",
      "Pemayangtse Monastery - Ancient monastery with traditional architecture",
      "Nathu La Pass - Historic Silk Route trading point",
      "Yumthang Valley - Valley of flowers with hot springs",
      "Kanchenjunga - Third highest peak visible from Sikkim"
    ],
    culture: "Sikkimese culture blends Tibetan Buddhist, Nepali, and Lepcha traditions. The state values environmental conservation, peaceful coexistence, and sustainable development practices.",
    cuisine: "Sikkimese cuisine includes momos, thukpa, gundruk (fermented leafy vegetables), sel roti, and various Tibetan and Nepali influenced dishes. Chhurpi (yak cheese) is a local specialty.",
    color: "from-indigo-700 to-purple-800",
    festivals: ["Losar", "Saga Dawa", "Dashain", "Tihar"],
    languages: ["Nepali", "Sikkimese", "Lepcha", "English"],
    famousFor: ["Organic Farming", "Buddhism", "Kanchenjunga", "Adventure Tourism"]
  },
  "tripura": {
    name: "Tripura",
    capital: "Agartala",
    description: "Tripura is known for its royal palaces, bamboo handicrafts, diverse tribal culture, and ancient temples. The state has a unique blend of Bengali and tribal traditions.",
    traditions: [
      "Garia Dance - Traditional tribal dance celebrating harvest",
      "Kharchi Puja - Worship of fourteen gods at Chaturdasha temple",
      "Durga Puja - Grand celebrations similar to West Bengal",
      "Tribal Festivals - Various celebrations of indigenous communities",
      "Poush Sankranti - Harvest festival with traditional foods"
    ],
    heritage: [
      "Ujjayanta Palace - Royal palace now serving as state museum",
      "Neermahal - Water palace in middle of Rudrasagar lake",
      "Tripura Sundari Temple - Ancient Shakti Peetha temple",
      "Unakoti - Archaeological site with rock-cut sculptures",
      "Sepahijala Wildlife Sanctuary - Conservation area with diverse species"
    ],
    culture: "Tripura culture combines Bengali literature and arts with tribal traditions. The state values royal heritage, artistic expression, and harmonious coexistence of different communities.",
    cuisine: "Tripura cuisine includes dishes like Muya Awandru (fish with vegetables), Kosoi Bwtwi (fried rice), and various bamboo shoot preparations. The food reflects both Bengali and tribal influences.",
    color: "from-amber-700 to-yellow-800",
    festivals: ["Kharchi Puja", "Durga Puja", "Garia", "Diwali"],
    languages: ["Bengali", "Tripuri", "Hindi"],
    famousFor: ["Royal Palaces", "Bamboo Crafts", "Tribal Culture", "Temples"]
  },
  // Union Territories
  "delhi": {
    name: "Delhi",
    capital: "New Delhi",
    description: "Delhi, India's national capital territory, is a blend of ancient heritage and modern governance. The city has been the seat of power for various empires and continues to be the political center of India.",
    traditions: [
      "Republic Day Parade - Grand national celebration at Rajpath",
      "Dussehra at Red Fort - Traditional celebration with historical significance",
      "Diwali Celebrations - Festival of lights celebrated across the city",
      "Sufi Traditions - Qawwali and spiritual music at dargahs",
      "Delhi Heritage Walks - Exploring architectural marvels"
    ],
    heritage: [
      "Red Fort - UNESCO World Heritage Site and Mughal architecture",
      "Qutub Minar - Medieval Islamic architecture and UNESCO site",
      "India Gate - War memorial and national monument",
      "Lotus Temple - Modern architectural marvel promoting unity",
      "Humayun's Tomb - Mughal architecture inspiring Taj Mahal design"
    ],
    culture: "Delhi culture represents diverse Indian traditions coming together in the national capital. The city values historical preservation, cultural plurality, and modern governance while maintaining ancient roots.",
    cuisine: "Delhi cuisine includes street food like Chaat, Paranthe Wali Gali delicacies, Mughlai dishes, and specialties from all Indian regions. The food reflects the cosmopolitan nature of the capital.",
    color: "from-red-800 to-pink-900",
    festivals: ["Republic Day", "Independence Day", "Diwali", "Eid"],
    languages: ["Hindi", "English", "Punjabi", "Urdu"],
    famousFor: ["Red Fort", "India Gate", "Street Food", "Political Center"]
  },
  "jammu-and-kashmir": {
    name: "Jammu and Kashmir",
    capital: "Srinagar (Summer), Jammu (Winter)",
    description: "Jammu and Kashmir, paradise on earth, is known for its stunning natural beauty, Dal Lake, houseboats, Sufi traditions, and unique Kashmiri culture blending Hindu and Islamic influences.",
    traditions: [
      "Shikara Rides - Traditional boat rides on Dal Lake",
      "Kashmiri Folk Music - Sufi and traditional songs",
      "Carpet Weaving - Handwoven carpets with intricate designs",
      "Walnut Wood Carving - Traditional handicraft of Kashmir",
      "Tulip Festival - Celebration of spring in Srinagar"
    ],
    heritage: [
      "Dal Lake - Iconic lake with houseboats and floating gardens",
      "Mughal Gardens - Shalimar, Nishat, and Chashme Shahi gardens",
      "Vaishno Devi Temple - Sacred pilgrimage site in Jammu",
      "Gulmarg - Ski resort and meadow of flowers",
      "Sonamarg - Meadow of gold with glacier views"
    ],
    culture: "Kashmiri culture blends Hindu, Islamic, and Sufi traditions with emphasis on hospitality, poetry, and craftsmanship. The state values artistic expression, spiritual practices, and peaceful coexistence.",
    cuisine: "Kashmiri cuisine includes dishes like Rogan Josh, Yakhni, Kahwa (tea), and Wazwan (multi-course meal). The food reflects Persian influences and local ingredients like saffron and dried fruits.",
    color: "from-blue-800 to-indigo-900",
    festivals: ["Tulip Festival", "Hemis Festival", "Shivratri", "Eid"],
    languages: ["Kashmiri", "Dogri", "Hindi", "Urdu"],
    famousFor: ["Dal Lake", "Houseboats", "Saffron", "Handicrafts"]
  },
  "ladakh": {
    name: "Ladakh",
    capital: "Leh",
    description: "Ladakh, the land of high passes, is known for its stark Himalayan beauty, Buddhist monasteries, high-altitude desert landscape, and unique Tibetan Buddhist culture in the Indian Himalayas.",
    traditions: [
      "Hemis Festival - Major Buddhist festival with masked dances",
      "Losar - Ladakhi New Year celebration",
      "Polo at High Altitude - Traditional sport in rarefied air",
      "Prayer Flag Traditions - Colorful flags carrying sacred mantras",
      "Monastery Life - Buddhist monastic traditions and practices"
    ],
    heritage: [
      "Leh Palace - Ancient royal palace overlooking Leh city",
      "Hemis Monastery - Largest and richest monastery in Ladakh",
      "Thiksey Monastery - Impressive monastery complex with valley views",
      "Pangong Tso - High-altitude lake with changing colors",
      "Nubra Valley - High-altitude desert with double-humped camels"
    ],
    culture: "Ladakhi culture is predominantly Tibetan Buddhist with emphasis on non-violence, meditation, and harmony with harsh mountain environment. The region values traditional practices and environmental adaptation.",
    cuisine: "Ladakhi cuisine includes dishes like Thukpa (noodle soup), Momos (dumplings), Skyu (pasta-like dish), and Chang (barley beer). The food is adapted to high-altitude living and cold climate.",
    color: "from-purple-800 to-indigo-900",
    festivals: ["Hemis Festival", "Losar", "Dosmoche", "Sindhu Darshan"],
    languages: ["Ladakhi", "Tibetan", "Hindi", "English"],
    famousFor: ["Buddhist Monasteries", "High Altitude", "Adventure Tourism", "Unique Landscape"]
  },
  "puducherry": {
    name: "Puducherry",
    capital: "Puducherry",
    description: "Puducherry, former French colony, is known for its unique Franco-Tamil culture, Sri Aurobindo Ashram, beautiful beaches, and distinctive colonial architecture blending French and Indian elements.",
    traditions: [
      "French Colonial Heritage - Architecture and cultural influences",
      "Sri Aurobindo Philosophy - Spiritual practices and integral yoga",
      "Tamil Cultural Festivals - Traditional celebrations with French touches",
      "Creole Cuisine - Fusion of French and South Indian flavors",
      "Heritage Walks - Exploring French Quarter architecture"
    ],
    heritage: [
      "French Quarter - Colonial buildings with European architecture",
      "Sri Aurobindo Ashram - International spiritual community",
      "Auroville - Experimental township promoting human unity",
      "Promenade Beach - Scenic waterfront with French colonial buildings",
      "Sacred Heart Basilica - Gothic architecture church"
    ],
    culture: "Puducherry culture uniquely blends French colonial influences with Tamil traditions. The territory values spiritual seeking, international cooperation, and preservation of multicultural heritage.",
    cuisine: "Puducherry cuisine includes French-influenced dishes, traditional Tamil food, and fusion preparations. Specialties include croissants with sambar, French pastries, and seafood with local spices.",
    color: "from-cyan-800 to-blue-900",
    festivals: ["Bastille Day", "Pongal", "Diwali", "Christmas"],
    languages: ["Tamil", "French", "English", "Telugu"],
    famousFor: ["French Heritage", "Auroville", "Beaches", "Spiritual Tourism"]
  },
  "chandigarh": {
    name: "Chandigarh",
    capital: "Chandigarh",
    description: "Chandigarh, a planned city designed by Le Corbusier, is known for its modern urban planning, beautiful gardens, contemporary architecture, and serving as joint capital of Punjab and Haryana.",
    traditions: [
      "Modern Urban Planning - Systematic city design with sectors",
      "Garden Culture - Numerous themed gardens and green spaces",
      "Art and Architecture - Contemporary design and sculpture parks",
      "Cosmopolitan Lifestyle - Blend of Punjabi and Haryanvi cultures",
      "Educational Excellence - Premier institutions and research centers"
    ],
    heritage: [
      "Rock Garden - Artistic creation using industrial waste by Nek Chand",
      "Sukhna Lake - Artificial lake with recreational activities",
      "Rose Garden - Asia's largest rose garden with numerous varieties",
      "Capitol Complex - Le Corbusier's architectural masterpiece",
      "Government Museum - Repository of Gandhara sculptures and artifacts"
    ],
    culture: "Chandigarh culture represents modern Indian urban planning with emphasis on green living, architectural appreciation, and cosmopolitan lifestyle. The city values innovation, cleanliness, and quality of life.",
    cuisine: "Chandigarh cuisine reflects both Punjabi and Haryanvi influences with dishes like Chole Bhature, Butter Chicken, Sarson da Saag, and modern restaurant culture offering diverse cuisines.",
    color: "from-emerald-800 to-green-900",
    festivals: ["Rose Festival", "Mango Festival", "Teej", "Diwali"],
    languages: ["Hindi", "Punjabi", "English"],
    famousFor: ["Modern Architecture", "Rock Garden", "Urban Planning", "Gardens"]
  },
  "andaman-and-nicobar-islands": {
    name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    description: "Andaman and Nicobar Islands are tropical paradise known for pristine beaches, marine biodiversity, tribal heritage, and historical significance in India's freedom struggle.",
    traditions: [
      "Tribal Cultures - Indigenous communities with ancient traditions",
      "Island Festival - Celebration of local culture and tourism",
      "Underwater Activities - Scuba diving and marine exploration",
      "Cellular Jail History - Freedom struggle memorial events",
      "Beach Festivals - Seasonal celebrations on various islands"
    ],
    heritage: [
      "Cellular Jail - Historical prison from British era",
      "Radhanagar Beach - One of Asia's best beaches",
      "Mahatma Gandhi Marine National Park - Protected marine ecosystem",
      "Anthropological Museum - Showcasing tribal cultures",
      "Ross Island - Ruins of British administrative headquarters"
    ],
    culture: "Islands culture blends mainland Indian traditions with indigenous tribal customs and maritime influences. The territory values environmental conservation, tribal rights, and sustainable tourism.",
    cuisine: "Island cuisine includes fresh seafood, coconut-based preparations, tropical fruits, and dishes influenced by South Indian, Bengali, and tribal cooking methods.",
    color: "from-teal-800 to-cyan-900",
    festivals: ["Island Tourism Festival", "Beach Festival", "Diwali", "Christmas"],
    languages: ["Hindi", "English", "Bengali", "Tamil"],
    famousFor: ["Beaches", "Marine Life", "Cellular Jail", "Tribal Culture"]
  },
  "lakshadweep": {
    name: "Lakshadweep",
    capital: "Kavaratti",
    description: "Lakshadweep, India's smallest union territory, consists of coral islands known for pristine lagoons, marine biodiversity, Islamic culture, and sustainable island living practices.",
    traditions: [
      "Lava Dance - Traditional dance performed during festivals",
      "Kolkali - Stick dance performed by men in groups",
      "Parichakali - Martial art form with sword and shield",
      "Islamic Festivals - Eid celebrations with community gatherings",
      "Coconut Festival - Celebrating island's primary crop"
    ],
    heritage: [
      "Marine Biodiversity - Coral reefs and underwater ecosystems",
      "Traditional Architecture - Coral stone houses with Islamic design",
      "Lighthouse Heritage - Navigation aids for maritime history",
      "Lagoons - Pristine water bodies with unique marine life",
      "Sustainable Practices - Traditional methods of island conservation"
    ],
    culture: "Lakshadweep culture is predominantly Islamic with Malayali influences, emphasizing community cooperation, maritime traditions, and environmental harmony. The islands value sustainable living and traditional practices.",
    cuisine: "Lakshadweep cuisine features seafood, coconut-based dishes, and preparations using local ingredients. Traditional dishes include fish curry, coconut rice, and various tropical fruit preparations.",
    color: "from-blue-900 to-indigo-950",
    festivals: ["Eid ul-Fitr", "Eid ul-Adha", "Milad un-Nabi", "Muharram"],
    languages: ["Malayalam", "Mahl", "English"],
    famousFor: ["Coral Islands", "Marine Life", "Lagoons", "Sustainable Living"]
  },
  "dadra-and-nagar-haveli-and-daman-and-diu": {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    capital: "Daman",
    description: "These former Portuguese territories are known for their coastal beauty, Portuguese colonial heritage, tribal culture, and unique blend of Indian and European influences.",
    traditions: [
      "Portuguese Heritage - Colonial architecture and cultural influences",
      "Tribal Festivals - Celebrations of Warli and other tribal communities",
      "Beach Culture - Coastal lifestyle and fishing traditions",
      "Folk Dances - Traditional performances during festivals",
      "Handicrafts - Local art and craft traditions"
    ],
    heritage: [
      "Diu Fort - Portuguese fortress with historical significance",
      "St. Paul's Church - Colonial religious architecture",
      "Daman Fort - Portuguese defensive structure",
      "Tribal Villages - Indigenous communities with traditional lifestyle",
      "Coastal Temples - Blend of Hindu and Portuguese architectural styles"
    ],
    culture: "The culture blends Portuguese colonial influences with tribal and Gujarati traditions. The region values its unique heritage, coastal lifestyle, and multicultural harmony.",
    cuisine: "The cuisine includes Portuguese-influenced dishes, seafood preparations, and tribal food. Specialties include fish curry, bebinca, and various coconut-based preparations.",
    color: "from-amber-800 to-orange-900",
    festivals: ["Christmas", "Navratri", "Diwali", "Tribal Festivals"],
    languages: ["Gujarati", "Portuguese", "Hindi", "English"],
    famousFor: ["Portuguese Heritage", "Beaches", "Forts", "Tribal Culture"]
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
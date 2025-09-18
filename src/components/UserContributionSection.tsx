import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, Camera, Video, FileText, Users, Heart, Star, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface UserContribution {
  id: string;
  title: string;
  description: string;
  type: 'photo' | 'video' | 'story' | 'tip';
  author: string;
  location: string;
  date: string;
  likes: number;
  verified: boolean;
}

interface UserContributionSectionProps {
  stateName: string;
}

const UserContributionSection = ({ stateName }: UserContributionSectionProps) => {
  const [contributions] = useState<UserContribution[]>([
    {
      id: "1",
      title: "Hidden temple in the mountains",
      description: "Discovered this beautiful ancient temple during my trek. The architecture is breathtaking!",
      type: "photo",
      author: "Rahul Kumar",
      location: "Remote hills",
      date: "2024-01-15",
      likes: 142,
      verified: true
    },
    {
      id: "2", 
      title: "Traditional cooking method",
      description: "My grandmother showing the authentic way to prepare local delicacies using clay ovens.",
      type: "video",
      author: "Priya Sharma",
      location: "Village kitchen",
      date: "2024-01-10",
      likes: 98,
      verified: true
    }
  ]);

  const [newContribution, setNewContribution] = useState({
    title: "",
    description: "",
    type: "photo" as const,
    location: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would integrate with Supabase when connected
    toast({
      title: "Contribution Submitted!",
      description: "Thank you for sharing your knowledge. It will be reviewed and added soon.",
    });
    
    setNewContribution({
      title: "",
      description: "",
      type: "photo",
      location: ""
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'photo': return <Camera size={16} />;
      case 'video': return <Video size={16} />;
      case 'story': return <FileText size={16} />;
      case 'tip': return <Star size={16} />;
      default: return <Camera size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'photo': return 'bg-heritage-emerald/20 text-heritage-emerald border-heritage-emerald/30';
      case 'video': return 'bg-heritage-saffron/20 text-heritage-saffron border-heritage-saffron/30';
      case 'story': return 'bg-heritage-indigo/20 text-heritage-indigo border-heritage-indigo/30';
      case 'tip': return 'bg-heritage-gold/20 text-heritage-gold border-heritage-gold/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="w-full" aria-labelledby="user-contributions-title">
      <div className="mb-8">
        <h2 id="user-contributions-title" className="text-2xl font-bold text-foreground mb-3">
          Community Contributions for {stateName}
        </h2>
        <p className="text-muted-foreground">
          Share your photos, videos, stories, and local insights to help others discover the beauty of {stateName}
        </p>
      </div>

      {/* Contribution Form */}
      <Card className="mb-8 bg-gradient-cultural border-2 border-heritage-gold/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-heritage-indigo">
            <Upload size={20} aria-hidden="true" />
            Share Your Experience
          </CardTitle>
          <CardDescription>
            Help fellow travelers and culture enthusiasts discover hidden gems and authentic experiences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contribution-title" className="block text-sm font-medium text-foreground mb-1">
                  Title *
                </label>
                <Input
                  id="contribution-title"
                  type="text"
                  placeholder="What would you like to share?"
                  value={newContribution.title}
                  onChange={(e) => setNewContribution({...newContribution, title: e.target.value})}
                  required
                  aria-describedby="title-help"
                  className="focus:border-heritage-saffron focus:ring-heritage-saffron"
                />
                <p id="title-help" className="text-xs text-muted-foreground mt-1">
                  Give your contribution a descriptive title
                </p>
              </div>

              <div>
                <label htmlFor="contribution-location" className="block text-sm font-medium text-foreground mb-1">
                  Location *
                </label>
                <Input
                  id="contribution-location"
                  type="text"
                  placeholder="Where was this taken/experienced?"
                  value={newContribution.location}
                  onChange={(e) => setNewContribution({...newContribution, location: e.target.value})}
                  required
                  className="focus:border-heritage-saffron focus:ring-heritage-saffron"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contribution-description" className="block text-sm font-medium text-foreground mb-1">
                Description *
              </label>
              <Textarea
                id="contribution-description"
                placeholder="Share your story, experience, or helpful tips..."
                value={newContribution.description}
                onChange={(e) => setNewContribution({...newContribution, description: e.target.value})}
                required
                rows={4}
                aria-describedby="description-help"
                className="focus:border-heritage-saffron focus:ring-heritage-saffron"
              />
              <p id="description-help" className="text-xs text-muted-foreground mt-1">
                Provide context and details that would be helpful to others
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Contribution Type *
              </label>
              <div className="flex gap-2 flex-wrap" role="radiogroup" aria-labelledby="contribution-type-label">
                {[
                  { value: 'photo', label: 'Photo', icon: Camera },
                  { value: 'video', label: 'Video', icon: Video },
                  { value: 'story', label: 'Story', icon: FileText },
                  { value: 'tip', label: 'Travel Tip', icon: Star }
                ].map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      role="radio"
                      aria-checked={newContribution.type === type.value}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-heritage ${
                        newContribution.type === type.value 
                          ? 'border-heritage-saffron bg-heritage-saffron/10 text-heritage-saffron' 
                          : 'border-border hover:border-heritage-gold/50 text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => setNewContribution({...newContribution, type: type.value as any})}
                    >
                      <IconComponent size={16} aria-hidden="true" />
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-heritage-gold/10 border border-heritage-gold/20 rounded-lg p-4">
              <p className="text-sm text-heritage-indigo font-medium mb-2">
                📝 Ready to upload files?
              </p>
              <p className="text-sm text-muted-foreground">
                To upload photos, videos, and files, you'll need to connect this project to Supabase. 
                This enables secure file storage and user authentication.
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full md:w-auto bg-heritage-saffron hover:bg-heritage-saffron/90 text-white font-medium"
              disabled={!newContribution.title || !newContribution.description || !newContribution.location}
            >
              <Upload size={16} className="mr-2" aria-hidden="true" />
              Submit Contribution
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Existing Contributions */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users size={20} className="text-heritage-saffron" aria-hidden="true" />
          Community Highlights
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((contribution) => (
            <Card 
              key={contribution.id}
              className="group hover:shadow-heritage transition-heritage bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-heritage-gold/30"
              role="article"
              aria-labelledby={`contribution-${contribution.id}-title`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    className={`text-xs font-medium border ${getTypeColor(contribution.type)}`}
                    aria-label={`Content type: ${contribution.type}`}
                  >
                    <span className="flex items-center gap-1">
                      {getTypeIcon(contribution.type)}
                      {contribution.type.charAt(0).toUpperCase() + contribution.type.slice(1)}
                    </span>
                  </Badge>
                  {contribution.verified && (
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-heritage-emerald/20 text-heritage-emerald border-heritage-emerald/30"
                      aria-label="Verified contribution"
                    >
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                
                <CardTitle 
                  id={`contribution-${contribution.id}-title`}
                  className="text-lg text-foreground group-hover:text-heritage-saffron transition-colors"
                >
                  {contribution.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                  {contribution.description}
                </p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} aria-hidden="true" />
                    <span>{contribution.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>By {contribution.author}</span>
                    <div className="flex items-center gap-1">
                      <Heart size={12} className="text-heritage-saffron" aria-hidden="true" />
                      <span>{contribution.likes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Want to see more community contributions? Join our growing community of culture enthusiasts!
        </p>
      </div>
    </section>
  );
};

export default UserContributionSection;

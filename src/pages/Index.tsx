import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Sparkles, 
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Briefcase,
  Award,
  Target,
  ShoppingCart
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import oneWeekendIcon from "@/assets/one-weekend-icon.jpg";
import headshot from "@/assets/Jordan_Lander.jpg";
import prideAndPortrait from "@/assets/prideandportrait.jpg";
import emerson from "@/assets/emerson.jpg";
import strongWoman from "@/assets/strongwoman.jpg";
import passiveAggressive from "@/assets/passiveaggressive.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Jordan Lander
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
              <a href="#books" className="text-foreground/80 hover:text-primary transition-colors">Books</a>
              <a href="#one-weekend" className="text-foreground/80 hover:text-primary transition-colors">Web Services</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
            </div>
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11, 128, 158, 0.95) 0%, rgba(11, 128, 158, 0.85) 50%, rgba(216, 124, 40, 0.85) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8 flex justify-center">
              <Avatar className="h-40 w-40 border-4 border-primary-foreground/20 shadow-elegant">
                <AvatarImage src={headshot} alt="Jordan Lander" />
              </Avatar>
            </div>
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 backdrop-blur-sm" variant="outline">
              Education Leader & Technology Innovator
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              Jordan Lander
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Forward-thinking education administrator with 15+ years of experience designing inclusive STEAM curricula, 
              leading change initiatives, and empowering teams through technology and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="lg" asChild className="group">
                <a href="#experience">
                  View My Experience
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="#one-weekend">
                  <Sparkles className="mr-2" />
                  Web Development Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Leadership Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Virtual Learning Innovation",
                  description: "Redesigned virtual learning program, improving engagement and saving over $800K in outplacement costs"
                },
                {
                  icon: BookOpen,
                  title: "Digital Tools Development",
                  description: "Led development of digital tools streamlining compliance and collaboration for K–12 staff"
                },
                {
                  icon: Target,
                  title: "Data-Driven Results",
                  description: "Implemented strategies boosting reading and math performance on standardized assessments"
                },
                {
                  icon: Users,
                  title: "Community Partnerships",
                  description: "Built partnerships with families and organizations to support inclusive learning environments"
                }
              ].map((highlight, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                        <highlight.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* One Weekend Websites Featured Section */}
      <section id="one-weekend" className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-elegant border-accent/20 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div 
                    className="relative h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${oneWeekendIcon})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-accent/20 text-accent border-accent/30">Web Development</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">One Weekend Websites</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Clean, mobile-first websites for small businesses. <span className="font-semibold text-foreground">$499 flat rate</span> — 
                      delivering a fast, professional one-page site by Monday.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="accent" size="lg" asChild className="group">
                        <a href="https://www.oneweekendwebsites.com/" target="_blank" rel="noopener noreferrer">
                          Visit One Weekend Websites
                          <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Professional Experience</h2>
            <div className="space-y-12">
              {[
                {
                  title: "Supervisor of Special Education",
                  organization: "Northwest Tri-County IU5",
                  period: "Jul 2025 – Present",
                  highlights: [
                    "Lead strategic vision & daily operations for special education across multiple districts",
                    "Manage IEP development, compliance with IDEA/Pennsylvania regs, and transition planning",
                    "Supervise & mentor certified teachers & paraprofessionals in student-centered culture",
                    "Design & deliver professional learning on PBIS, inclusive practices, and data-driven instruction"
                  ]
                },
                {
                  title: "Assistant Principal & Cyber Liaison",
                  organization: "Corry Area SD",
                  period: "Jan 2022 – Jun 2025",
                  highlights: [
                    "Redesigned Corry Virtual Academy, cutting cyber placement costs by $800K+ annually",
                    "Supervised curriculum development and professional learning for virtual instruction",
                    "Led data-driven instructional improvements across K–12",
                    "Launched digital platforms for district-wide collaboration and compliance tracking"
                  ]
                },
                {
                  title: "Director of Innovation & STEAM",
                  organization: "Corry Area SD",
                  period: "Jul 2020 – Jan 2022",
                  highlights: [
                    "Designed and implemented inclusive, inquiry-based STEAM curriculum K–12",
                    "Directed digital transformation, including LMS adoption and tech integration",
                    "Managed $2M+ budget for educational technology and professional development",
                    "Built community partnerships securing grants and resources for underserved students"
                  ]
                }
              ].map((job, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary animate-slide-in-right" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                        <p className="text-lg text-primary font-medium">{job.organization}</p>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Expertise & Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Educational Leadership",
                  skills: ["Curriculum Design", "STEAM Integration", "Data-Driven Instruction", "Special Education", "Virtual Learning"]
                },
                {
                  icon: Users,
                  title: "Team Development",
                  skills: ["Professional Learning", "Coaching & Mentoring", "Change Management", "PBIS Implementation", "Inclusive Practices"]
                },
                {
                  icon: Sparkles,
                  title: "Technology & Innovation",
                  skills: ["LMS Platforms", "Digital Tools", "Web Development", "Ed Tech Integration", "Project Management"]
                }
              ].map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform">
                      <category.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Published Books</h2>
              <p className="text-xl text-muted-foreground">
                Coloring books and creative publications available on Amazon
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Pride and Portrait",
                  subtitle: "A Coloring Book Anthology Featuring the Art of Rebecca Coppock",
                  author: "JCLander Books",
                  price: "$14.99",
                  image: prideAndPortrait,
                  link: "https://www.amazon.com/dp/B0FG3DCR17"
                },
                {
                  title: "Emerson the Super Squirrel",
                  subtitle: "A PBIS Coloring Adventure for Positive Behavior",
                  author: "Mr. Jordan Lander",
                  price: "$7.99",
                  image: emerson,
                  link: "https://www.amazon.com/dp/B0F5Q5WVWM"
                },
                {
                  title: "A Strong Woman",
                  subtitle: "Coloring Book",
                  author: "Jordan Charles Lander",
                  price: "$12.99",
                  image: strongWoman,
                  link: "https://www.amazon.com/dp/B0DJRDPTJJ"
                },
                {
                  title: "Passive-Aggressive Office Notes",
                  subtitle: "The Funny and Relatable Adult Coloring Book",
                  author: "Jordan Charles Lander",
                  price: "$7.99",
                  image: passiveAggressive,
                  link: "https://www.amazon.com/dp/B0C52216QY"
                }
              ].map((book, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      src={book.image} 
                      alt={`${book.title} cover`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{book.subtitle}</p>
                    <p className="text-xs text-muted-foreground mb-3 italic">by {book.author}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-primary">{book.price}</span>
                      <Badge variant="outline">Paperback</Badge>
                    </div>
                    <Button variant="accent" className="w-full group/btn" asChild>
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 w-4 h-4" />
                        View on Amazon
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <a href="https://www.amazon.com/stores/Jordan-Charles-Lander/author/B0C5TYWMDD" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2" />
                  Shop All Books
                  <ExternalLink className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Interested in discussing education innovation, leadership opportunities, or web development services? 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="mailto:jordan@oneweekendwebsites.com">
                  <Mail className="mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="https://www.linkedin.com/in/jordanlander/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" />
                  LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="flex gap-6 justify-center text-muted-foreground">
              <a href="https://github.com/jordanlander" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Jordan Lander. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

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
      {/* Skip to Main Content - Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent" aria-label="Jordan Lander - Go to home">
              Jordan Lander
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">About</a>
              <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">Experience</a>
              <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">Skills</a>
              <a href="#books" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">Books</a>
              <a href="#news" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">News</a>
              <a href="#one-weekend" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">Web Services</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1">Contact</a>
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
        aria-label="Hero section introducing Jordan Lander"
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8 flex justify-center">
              <Avatar className="h-40 w-40 border-4 border-primary-foreground/20 shadow-elegant">
                <AvatarImage src={headshot} alt="Professional headshot of Jordan Lander, education leader and technology innovator" />
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
      <main id="main-content">
        <section id="about" className="py-24 bg-muted/30" aria-labelledby="about-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-12 text-center">Leadership Highlights</h2>
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
      <section id="one-weekend" className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5" aria-labelledby="one-weekend-heading">
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
                    <h2 id="one-weekend-heading" className="text-3xl md:text-4xl font-bold mb-4">One Weekend Websites</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Clean, mobile-first websites for small businesses. <span className="font-semibold text-foreground">$499 flat rate</span> — 
                      delivering a fast, professional one-page site by Monday.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="accent" size="lg" asChild className="group">
                        <a href="https://www.oneweekendwebsites.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit One Weekend Websites (opens in new tab)">
                          Visit One Weekend Websites
                          <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
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
      <section id="experience" className="py-24 bg-background" aria-labelledby="experience-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-16 text-center">Professional Experience</h2>
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
                  title: "Science Teacher",
                  organization: "Erie's Public Schools",
                  period: "Aug 2016 – Jan 2022",
                  highlights: [
                    "Led advanced science and CTE programs while mentoring colleagues in technology integration",
                    "Consulted on curriculum design and building-wide instructional initiatives",
                    "Recognized for innovative instruction and student engagement"
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
      <section id="skills" className="py-24 bg-muted/30" aria-labelledby="skills-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-16 text-center">Expertise & Skills</h2>
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
      <section id="books" className="py-24 bg-background" aria-labelledby="books-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="books-heading" className="text-4xl md:text-5xl font-bold mb-4">Published Books</h2>
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
                      alt={`Cover of ${book.title}: ${book.subtitle} by ${book.author}`}
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
                      <a href={book.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${book.title} on Amazon (opens in new tab)`}>
                        <ShoppingCart className="mr-2 w-4 h-4" aria-hidden="true" />
                        View on Amazon
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" aria-hidden="true" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <a href="https://www.amazon.com/stores/Jordan-Charles-Lander/author/B0C5TYWMDD" target="_blank" rel="noopener noreferrer" aria-label="Shop all books by Jordan Lander on Amazon (opens in new tab)">
                  <BookOpen className="mr-2" aria-hidden="true" />
                  Shop All Books
                  <ExternalLink className="ml-2" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Recognition Section */}
      <section id="news" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background" aria-labelledby="news-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="news-heading" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                News & Recognition
              </h2>
              <p className="text-xl text-muted-foreground">
                Media features, community impact, and professional achievements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* News Item 1 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Students honor valor in verse
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">November 8, 2023</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Working alongside the staff, Jordan supported a Veterans Day poetry tribute that blended service learning with student creativity.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.thecorryjournal.com/news/article_601bf1ca-7e40-11ee-8e9f-0f5b8a2de589.html" target="_blank" rel="noopener noreferrer" aria-label="Read article about Students honor valor in verse (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 2 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Heroes bring early Christmas for Corry, UC kids
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">December 20, 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Collaborating with community partners, Jordan helped deliver magical early-Christmas experiences for students.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.thecorryjournal.com/news/article_837a2826-be4a-11ef-b99c-dffd8f302ff5.html" target="_blank" rel="noopener noreferrer" aria-label="Read article about Heroes bring early Christmas for Corry, UC kids (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 3 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Santa Fund campaign underway
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">December 9, 2023</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    As part of the holiday giving committee, Jordan supported the Santa Fund drive—providing festive support to dozens of local families in need.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.thecorryjournal.com/news/article_ff57e93e-95f5-11ee-a773-f336ac1d073e.html" target="_blank" rel="noopener noreferrer" aria-label="Read article about Santa Fund campaign underway (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 4 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Acclaimed children's author visits schools
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">March 7, 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Coordinating with library staff, Jordan curated live author visits that inspired a renewed passion for reading across the district.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.thecorryjournal.com/news/article_8c495c80-dc03-11ee-8b6b-07e7c75a2175.html" target="_blank" rel="noopener noreferrer" aria-label="Read article about Acclaimed children's author visits schools (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 5 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        CAIS supports city K‑9 initiative
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">December 8, 2022</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Working with law-enforcement liaisons, Jordan supported a unique K‑9 initiative—strengthening safety partnerships and student engagement.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.thecorryjournal.com/news/article_9d2e9196-7714-11ed-8804-bfd14463a803.html" target="_blank" rel="noopener noreferrer" aria-label="Read article about CAIS supports city K-9 initiative (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 6 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        CAIS finalist in 'How Cool is Your School?'
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">November 1, 2022</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Leading a student-driven media team, Jordan guided the production of award-winning project videos—fueling a culture of innovation.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.thecorryjournal.com/news/article_904f14d2-59fa-11ed-89a9-2fb400f148c8.html" target="_blank" rel="noopener noreferrer" aria-label="Read article about CAIS finalist in How Cool is Your School contest (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 7 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Considering the City: Building a Bayfront Highway
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">March 10, 2023</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Showcased a collaborative digital collage & AI illustration in Erie Reader, blending art & civic dialogue around Bayfront planning.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.eriereader.com/article/considering-the-city-building-a-bayfront-highway" target="_blank" rel="noopener noreferrer" aria-label="Read article about Considering the City: Building a Bayfront Highway (opens in new tab)">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* News Item 8 */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        2024 Jan Stauber Literacy Grant Winner
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">2024 Award</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Co‑recipient of the 2024 Jan Stauber Literacy Grant, pioneering Sherlock Holmes–themed reading initiatives alongside school librarians.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href="https://www.beaconsociety.com/past---current-grant-awards.html" target="_blank" rel="noopener noreferrer" aria-label="Learn more about 2024 Jan Stauber Literacy Grant Winner (opens in new tab)">
                      Learn More
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30" aria-labelledby="contact-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Interested in discussing education innovation, leadership opportunities, or web development services? 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="mailto:jordan@oneweekendwebsites.com" aria-label="Send email to Jordan Lander">
                  <Mail className="mr-2" aria-hidden="true" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="https://www.linkedin.com/in/jordanlander/" target="_blank" rel="noopener noreferrer" aria-label="Visit Jordan Lander's LinkedIn profile (opens in new tab)">
                  <Linkedin className="mr-2" aria-hidden="true" />
                  LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="flex gap-6 justify-center text-muted-foreground">
              <a href="https://github.com/jordanlander" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm p-1" aria-label="Visit Jordan Lander's GitHub profile (opens in new tab)">
                <Github className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30" role="contentinfo">
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

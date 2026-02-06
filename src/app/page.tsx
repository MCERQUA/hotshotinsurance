import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Phone, 
  CheckCircle, 
  Users, 
  MapPin, 
  Clock, 
  Award,
  ArrowRight,
  Star,
  TrendingUp,
  Lock,
  Headphones,
  Settings
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { 
  FadeIn, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  Float,
  ScaleOnHover
} from "@/components/ui/motion";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Modern with animated elements */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950" />
        <div className="absolute inset-0 bg-[url('/images/hero-ebike.jpg')] bg-cover bg-center opacity-15" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.1}>
                <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30 px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Licensed in All 50 States
                </Badge>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
                  Premium Insurance for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                    Talaria
                  </span>
                  <br />
                  Electric Bikes
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
                  Comprehensive coverage designed for high-performance Talaria e-bikes. 
                  From Sting to MX4 — ride with confidence knowing you're protected.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ScaleOnHover>
                    <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white shadow-lg shadow-indigo-500/25 px-8 py-6 text-lg rounded-xl">
                      <Link href="/quote">
                        Get Your Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button asChild size="lg" className="border-2 border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700 hover:border-slate-500 px-8 py-6 text-lg rounded-xl backdrop-blur">
                      <a href={`tel:${siteConfig.company.phone}`}>
                        <Phone className="mr-2 h-5 w-5" />
                        {siteConfig.company.phone}
                      </a>
                    </Button>
                  </ScaleOnHover>
                </div>
              </FadeIn>
              
              {/* Trust badges */}
              <FadeIn delay={0.5}>
                <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Shield className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm">A+ Rated</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm">5,000+ Riders</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm">24/7 Claims</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Hero image with floating effect */}
            <SlideInRight delay={0.3} className="hidden lg:block">
              <Float duration={4} y={15}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                    <Image
                      src="/images/hero-ebike.jpg"
                      alt="Talaria electric bike"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    
                    {/* Floating stats card */}
                    <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-indigo-400 text-sm font-medium">Starting at</p>
                          <p className="text-white text-2xl font-bold">$12/month</p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-400 text-sm">Coverage up to</p>
                          <p className="text-white text-2xl font-bold">$25,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Float>
            </SlideInRight>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-indigo-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">50</p>
                <p className="text-slate-600 mt-2">States Licensed</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">20+</p>
                <p className="text-slate-600 mt-2">Years Experience</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">24/7</p>
                <p className="text-slate-600 mt-2">Claims Support</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">97%</p>
                <p className="text-slate-600 mt-2">Satisfaction Rate</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Talaria Insurance - Modern Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Insurance Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Talaria Riders
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Standard insurance doesn't understand high-performance e-bikes. We do.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <ScaleOnHover>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/25">
                      <Zap className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">High-Performance Coverage</CardTitle>
                    <CardDescription className="text-base">
                      Talaria bikes deliver serious power. We provide coverage that matches their true value and performance capabilities.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
            
            <StaggerItem>
              <ScaleOnHover>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25">
                      <Lock className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">Theft Protection</CardTitle>
                    <CardDescription className="text-base">
                      E-bikes are prime theft targets. Our comprehensive coverage protects against theft anywhere — home, trail, or in transit.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
            
            <StaggerItem>
              <ScaleOnHover>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors" />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/25">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">Liability Coverage</CardTitle>
                    <CardDescription className="text-base">
                      Protect yourself from claims. Our liability coverage ensures you're protected if an accident causes injury or damage.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
            
            <StaggerItem>
              <ScaleOnHover>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                      <Settings className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">Modification Coverage</CardTitle>
                    <CardDescription className="text-base">
                      Upgraded your Talaria? We cover aftermarket controllers, batteries, suspension, and performance modifications.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
            
            <StaggerItem>
              <ScaleOnHover>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors" />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/25">
                      <Headphones className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">24/7 Claims Support</CardTitle>
                    <CardDescription className="text-base">
                      Accidents don't wait for business hours. Our dedicated team is available around the clock to help.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
            
            <StaggerItem>
              <ScaleOnHover>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">Nationwide Coverage</CardTitle>
                    <CardDescription className="text-base">
                      Licensed in all 50 states. Ride anywhere in the country with confidence knowing you're protected.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Talaria Models - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ebike-trail.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">Models We Cover</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Every Talaria Model,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Fully Protected
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              From trail riding to street legal — we insure all Talaria electric bikes.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {siteConfig.talariaModels.map((model) => (
              <StaggerItem key={model.name}>
                <ScaleOnHover scale={1.03}>
                  <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="h-8 w-8 text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-bold text-center mb-2">{model.name}</h3>
                      <p className="text-slate-400 text-sm text-center mb-2">{model.description}</p>
                      <p className="text-indigo-400 text-xs text-center font-medium">{model.specs}</p>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeIn delay={0.4} className="text-center mt-12">
            <p className="text-slate-400 mb-6">
              Don't see your model? We cover all electric bikes and similar vehicles.
            </p>
            <ScaleOnHover>
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 rounded-xl">
                <Link href="/coverage">
                  View All Coverage Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScaleOnHover>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">Testimonials</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Talaria Riders
              </span>
            </h2>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "My Talaria Sting was my pride and joy. When it got stolen from my garage, these guys had my claim processed in 5 days. Incredible service."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Derek M.</p>
                      <p className="text-sm text-slate-500">Talaria Sting Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            
            <StaggerItem>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "They actually understood what a Talaria is! Most insurance companies had no clue. Great rates and they covered all my mods too."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Alex K.</p>
                      <p className="text-sm text-slate-500">Talaria MX4 Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            
            <StaggerItem>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "Had a trail accident and damaged my Sting R pretty badly. They covered repairs plus my upgraded suspension. Very impressed."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Ryan T.</p>
                      <p className="text-sm text-slate-500">Talaria Sting R Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ebike-action.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Protect Your Talaria?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get a free, no-obligation quote in minutes. Join thousands of Talaria riders who trust us with their coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScaleOnHover>
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 px-10 py-6 text-lg rounded-xl shadow-xl">
                  <Link href="/quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </ScaleOnHover>
              <ScaleOnHover>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 px-10 py-6 text-lg rounded-xl backdrop-blur">
                  <a href={`tel:${siteConfig.company.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
                </Button>
              </ScaleOnHover>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

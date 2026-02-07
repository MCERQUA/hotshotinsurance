import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Truck,
  Phone,
  CheckCircle,
  Users,
  MapPin,
  Clock,
  Award,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Package,
  DollarSign,
  Gauge,
  Map
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
      {/* Epic Hero Section - Badass Truck Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-truck-black">
        {/* Hero truck image with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/trucks/hero-truck.png"
            alt="Powerful hotshot truck on highway"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 gradient-hero-overlay" />
        </div>

        {/* Animated amber glow orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-truck-orange/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-truck-amber/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <Badge className="mb-6 bg-truck-orange text-black border-truck-orange hover:bg-truck-amber px-6 py-3 text-base font-black shadow-lg shadow-truck-orange/40">
                <MapPin className="w-5 h-5 mr-2" />
                Licensed in All 50 States
              </Badge>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
                <span className="text-white block mb-2">
                  HOTSHOT
                </span>
                <span className="text-gradient block mb-4">
                  INSURANCE
                </span>
                <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-bold block">
                  BUILT FOR THE ROAD
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed">
                Specialized insurance coverage for hotshot truckers who <span className="text-truck-amber font-bold">move fast</span>, <span className="text-truck-amber font-bold">work hard</span>, and <span className="text-truck-amber font-bold">dominate the road</span>.
                General liability, cargo protection, and physical damage coverage that keeps you rolling.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <ScaleOnHover>
                  <Button
                    asChild
                    size="lg"
                    className="bg-truck-orange hover:bg-truck-amber text-black font-black shadow-2xl shadow-truck-orange/50 px-10 py-8 text-xl rounded-xl animate-pulse-glow border-4 border-black"
                  >
                    <Link href="/quote">
                      GET YOUR FREE QUOTE
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button
                    asChild
                    size="lg"
                    className="border-3 border-white/50 bg-black/60 text-white hover:bg-white/10 hover:border-white px-10 py-8 text-xl rounded-xl backdrop-blur-sm font-bold"
                  >
                    <a href={`tel:${siteConfig.company.phone}`}>
                      <Phone className="mr-2 h-6 w-6" />
                      {siteConfig.company.phone}
                    </a>
                  </Button>
                </ScaleOnHover>
              </div>
            </FadeIn>

            {/* Power stats */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-truck-green/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-truck-green" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">50 States</div>
                    <div className="text-gray-400 text-sm">Nationwide Coverage</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-truck-orange/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-truck-orange" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Full Protection</div>
                    <div className="text-gray-400 text-sm">Liability & Cargo</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-truck-amber/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-truck-amber" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Fast Quotes</div>
                    <div className="text-gray-400 text-sm">Get Covered Today</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-truck-amber rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Coverage Types - Bold Cards */}
      <section className="py-20 bg-truck-black relative">
        <div className="absolute inset-0 road-texture opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                COVERAGE THAT <span className="text-gradient">PROTECTS YOUR BUSINESS</span>
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto font-medium" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                We understand hotshot trucking. Get the protection you need to keep your rig on the road and your business profitable.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.coverageTypes.map((coverage, index) => {
              const Icon = {
                Shield: Shield,
                Truck: Truck,
                Zap: Zap,
                Users: Users,
              }[coverage.icon] || Shield;

              return (
                <StaggerItem key={coverage.title}>
                  <ScaleOnHover>
                    <Card className="truck-paint border-2 border-white/10 hover:border-truck-orange/50 transition-all duration-300 h-full group">
                      <CardContent className="pt-8 pb-6 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-truck-orange/20 to-truck-amber/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-amber">
                          <Icon className="w-10 h-10 text-truck-amber" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">
                          {coverage.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {coverage.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-truck-orange hover:bg-truck-amber text-black font-black px-8 py-6 text-lg rounded-xl"
              >
                <Link href="/coverage">
                  VIEW ALL COVERAGE OPTIONS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us - Power Features */}
      <section className="py-20 bg-gradient-to-b from-truck-black via-truck-charcoal to-truck-black">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                WHY TRUCKERS <span className="text-gradient">CHOOSE US</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're not just insurance brokers. We're your road partners, built by truckers for truckers.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Lightning-Fast Quotes",
                description: "Get your quote in minutes, not days. We know you've got loads to move and money to make."
              },
              {
                icon: Shield,
                title: "Comprehensive Protection",
                description: "From general liability to cargo protection, we've got every angle covered so you can focus on the road."
              },
              {
                icon: DollarSign,
                title: "Competitive Rates",
                description: "Best-in-class coverage at prices that won't eat into your profits. Period."
              },
              {
                icon: Phone,
                title: "24/7 Support",
                description: "Trucking doesn't sleep, and neither do we. Call us anytime, day or night."
              },
              {
                icon: Map,
                title: "50-State Coverage",
                description: "Licensed nationwide. Take your rig anywhere in America with full protection."
              },
              {
                icon: Award,
                title: "Industry Experts",
                description: "Founded by Josh Cotner in 2005, we've been protecting contractors and truckers for decades."
              }
            ].map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <ScaleOnHover>
                  <div className="truck-paint border border-white/10 hover:border-truck-orange/50 rounded-2xl p-8 h-full transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-xl bg-truck-orange/10 flex items-center justify-center mb-6 group-hover:bg-truck-orange/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-truck-amber" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScaleOnHover>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Strong Finish */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trucks/truck-grille.png"
            alt="Hotshot truck grille"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              READY TO <span className="text-gradient-white-amber">HIT THE ROAD</span>?
            </h2>
            <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Get your free quote in 5 minutes. Full coverage, competitive rates, zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ScaleOnHover>
                <Button
                  asChild
                  size="lg"
                  className="bg-truck-orange hover:bg-truck-amber text-black font-black px-12 py-8 text-2xl rounded-xl shadow-2xl shadow-truck-orange/40"
                >
                  <Link href="/quote">
                    GET YOUR FREE QUOTE NOW
                    <ArrowRight className="ml-3 h-7 w-7" />
                  </Link>
                </Button>
              </ScaleOnHover>
              <div className="text-gray-400">
                or call <a href={`tel:${siteConfig.company.phone}`} className="text-truck-amber font-bold hover:text-white transition-colors text-2xl">{siteConfig.company.phone}</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

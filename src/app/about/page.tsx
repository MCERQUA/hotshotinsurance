import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Users,
  MapPin,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Truck,
  Gauge,
  DollarSign
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Contractor's Choice Agency and our specialized hotshot trucking insurance coverage. Founded by Josh Cotner in 2005, licensed in all 50 states. Protecting truckers nationwide.",
  openGraph: {
    title: "About Us | Hotshot Insurance",
    description: "Founded by Josh Cotner in 2005. Specialized insurance for hotshot truckers nationwide. General liability, cargo protection, and physical damage coverage.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Badass Trucker Theme */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-truck-black">
        <div className="absolute inset-0">
          <Image
            src="/images/trucks/truck-grille.png"
            alt="Hotshot truck"
            fill
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              BUILT BY TRUCKERS, <span className="text-gradient">FOR TRUCKERS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Two decades of protecting the road warriors who keep America moving.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Josh's Journey */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-truck-black to-truck-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                THE ROAD <span className="text-gradient">THAT LED US HERE</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{siteConfig.company.name}</strong> was founded by <strong className="text-truck-amber">{siteConfig.company.founder}</strong> back in <strong className="text-white">{siteConfig.company.foundedYear}</strong> with one simple mission: give hardworking contractors and truckers insurance that actually <span className="text-truck-amber font-bold">gets it</span>.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Josh didn't start behind a desk. He started in the field, working alongside contractors and truckers, hearing their frustrations with insurance companies that didn't understand the hustle, the risk, or the reality of life on the road.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Traditional carriers didn't get hotshot trucking. They'd lowball coverage limits, exclude critical protections, or charge rates that made no sense. <strong className="text-white">Truckers deserved better.</strong>
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Today, we're the go-to agency for hotshot operators across all 50 states. We know your rig. We know your cargo. We know the road. <strong className="text-truck-amber">And we've got your back.</strong>
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-truck-green/20 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-truck-green" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Licensed Nationwide</div>
                    <div className="text-gray-400 text-sm">All 50 States</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-truck-orange/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-truck-amber" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">20 Years</div>
                    <div className="text-gray-400 text-sm">Industry Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-truck-amber/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-truck-amber" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Hotshot Experts</div>
                    <div className="text-gray-400 text-sm">We Know Trucking</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="truck-paint border-2 border-truck-orange/20 rounded-3xl p-10 lg:p-14">
              <div className="text-center">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-truck-orange to-truck-amber flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-truck-orange/30">
                  <Users className="h-14 w-14 text-black" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2">{siteConfig.company.founder}</h3>
                <p className="text-truck-amber font-bold text-lg mb-6">Founder & Principal Agent</p>
                <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">
                  "I built this agency for the guys who move freight, take risks, and don't quit. You work hard. You deserve insurance that works just as hard for you."
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.company.phone}`}
                    className="flex items-center justify-center gap-3 text-truck-amber hover:text-white transition-colors font-bold text-lg"
                  >
                    <Phone className="h-5 w-5" />
                    {siteConfig.company.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="flex items-center justify-center gap-3 text-gray-400 hover:text-truck-amber transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Power Features */}
      <section className="py-20 lg:py-28 bg-truck-black relative">
        <div className="absolute inset-0 road-texture opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              WHY TRUCKERS <span className="text-gradient">TRUST US</span>
            </h2>
            <p className="text-xl text-gray-300">
              We're not just brokers. We're your partners on every mile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="truck-paint border-2 border-white/10 hover:border-truck-orange/50 transition-all group text-center">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 rounded-2xl bg-truck-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-truck-orange/20 transition-colors">
                  <Truck className="h-10 w-10 text-truck-amber" />
                </div>
                <h3 className="font-black text-xl text-white mb-3">Hotshot Specialists</h3>
                <p className="text-gray-400 leading-relaxed">
                  We live and breathe hotshot trucking. From duallies to medium-duty rigs, we know your world.
                </p>
              </CardContent>
            </Card>

            <Card className="truck-paint border-2 border-white/10 hover:border-truck-orange/50 transition-all group text-center">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 rounded-2xl bg-truck-green/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-truck-green/20 transition-colors">
                  <MapPin className="h-10 w-10 text-truck-green" />
                </div>
                <h3 className="font-black text-xl text-white mb-3">50-State Coverage</h3>
                <p className="text-gray-400 leading-relaxed">
                  Licensed nationwide. Take your rig anywhere in America with full protection.
                </p>
              </CardContent>
            </Card>

            <Card className="truck-paint border-2 border-white/10 hover:border-truck-orange/50 transition-all group text-center">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 rounded-2xl bg-truck-amber/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-truck-amber/20 transition-colors">
                  <DollarSign className="h-10 w-10 text-truck-amber" />
                </div>
                <h3 className="font-black text-xl text-white mb-3">Fair Valuations</h3>
                <p className="text-gray-400 leading-relaxed">
                  We understand your rig's true value, including custom equipment and upgrades.
                </p>
              </CardContent>
            </Card>

            <Card className="truck-paint border-2 border-white/10 hover:border-truck-orange/50 transition-all group text-center">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 rounded-2xl bg-truck-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-truck-orange/20 transition-colors">
                  <Gauge className="h-10 w-10 text-truck-orange" />
                </div>
                <h3 className="font-black text-xl text-white mb-3">Fast Service</h3>
                <p className="text-gray-400 leading-relaxed">
                  Quotes in minutes. Claims handled fast. No call centers, just real people who care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 lg:py-28 bg-truck-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              OUR <span className="text-gradient">HEADQUARTERS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Based in Arizona, protecting truckers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteConfig.company.addresses.map((address, i) => (
              <Card key={i} className="truck-paint border-2 border-truck-orange/20">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-truck-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-8 w-8 text-truck-amber" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-white mb-2">Office {i + 1}</h3>
                      <p className="text-gray-300 text-lg">
                        {address.street}<br />
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trucks/hero-truck.png"
            alt="Hotshot truck on highway"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              READY TO <span className="text-gradient-white-amber">ROLL WITH US</span>?
            </h2>
            <p className="text-2xl text-gray-300 mb-10">
              Get your free hotshot insurance quote today. Coverage built for the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-truck-orange hover:bg-truck-amber text-black font-black px-12 py-8 text-xl rounded-xl shadow-2xl shadow-truck-orange/40"
              >
                <Link href="/quote">
                  GET YOUR FREE QUOTE
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-3 border-white text-white hover:bg-white/10 px-12 py-8 text-xl rounded-xl backdrop-blur font-bold"
              >
                <Link href="/contact">CONTACT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

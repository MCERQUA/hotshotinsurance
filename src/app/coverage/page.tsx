import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Car,
  Heart,
  AlertTriangle,
  Wrench,
  Flame,
  ThumbsUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Zap,
  Truck
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Coverage Options",
  description: "Comprehensive insurance coverage for hotshot trucks. Collision, comprehensive, liability, medical, and accessory coverage available nationwide.",
  openGraph: {
    title: "Coverage Options | hotshot truck Insurance",
    description: "Comprehensive insurance coverage for hotshot trucks. Collision, comprehensive, liability, medical, and accessory coverage.",
  },
};

const coverageDetails = [
  {
    icon: Shield,
    name: "Comprehensive Coverage",
    description: "Full protection against theft, vandalism, fire, and weather damage",
    details: [
      "Theft protection at home, on routes, or in transit",
      "Vandalism and malicious damage",
      "Fire and smoke damage",
      "Weather events (hail, flood, wind)",
      "Falling objects and debris",
      "Animal collisions",
    ],
  },
  {
    icon: Car,
    name: "Collision Coverage",
    description: "Coverage for accidents whether you're at fault or not",
    details: [
      "Single-vehicle accidents",
      "Multi-vehicle collisions",
      "Trail and off-road incidents",
      "Rollover protection",
      "Coverage regardless of fault",
      "Repair or replacement value",
    ],
  },
  {
    icon: AlertTriangle,
    name: "Liability Protection",
    description: "Protection against claims from injuries or property damage to others",
    details: [
      "Bodily injury liability",
      "Property damage liability",
      "Legal defense costs",
      "Medical expenses for others",
      "Coverage for lawsuits",
      "Peace of mind while hauling",
    ],
  },
  {
    icon: Heart,
    name: "Medical Payments",
    description: "Coverage for your medical expenses regardless of fault",
    details: [
      "Hospital and doctor bills",
      "Emergency room visits",
      "Surgery and treatment costs",
      "Rehabilitation expenses",
      "No fault determination required",
      "Coverage for passengers",
    ],
  },
  {
    icon: ThumbsUp,
    name: "Uninsured/Underinsured Motorist",
    description: "Protection when the other party lacks adequate insurance",
    details: [
      "Hit-and-run protection",
      "Uninsured driver coverage",
      "Underinsured driver coverage",
      "Property damage protection",
      "Medical expense coverage",
      "Lost wages compensation",
    ],
  },
  {
    icon: Wrench,
    name: "Accessory & Modification Coverage",
    description: "Coverage for aftermarket parts and custom modifications",
    details: [
      "Performance upgrades",
      "Custom batteries and controllers",
      "Suspension modifications",
      "Body kits and fairings",
      "Lighting and electrical mods",
      "Sound systems and accessories",
    ],
  },
];

const faqItems = [
  {
    question: "What makes hotshot truck insurance different from regular commercial trucking insurance?",
    answer: "hotshot trucks are high-performance electric vehicles that don't fit neatly into traditional insurance categories. Standard commercial trucking policies often undervalue trucks or have exclusions for electric vehicles. We specialize in understanding the true value and unique risks of hotshot trucks.",
  },
  {
    question: "Does my homeowner's insurance cover my hotshot truck?",
    answer: "Homeowner's policies typically have low limits for motorized vehicles and often exclude them entirely when used off-premises. A dedicated hotshot truck policy provides proper coverage for theft, damage, and liability wherever you haul.",
  },
  {
    question: "Can I insure a modified hotshot truck?",
    answer: "Yes! We understand that many hotshot truck owners modify their bikes. Our accessory coverage can protect your aftermarket parts and performance upgrades at their true value.",
  },
  {
    question: "Do you cover off-road hauling?",
    answer: "Absolutely. Whether you're hauling routes, tracks, or private property, our policies can be tailored to cover your actual hauling activities.",
  },
  {
    question: "What information do I need to get a quote?",
    answer: "You'll need your hotshot truck model, year, any modifications, where you haul, and basic personal information. The quote process takes just a few minutes.",
  },
];

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insurance Coverage for Your hotshot truck
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8">
              Comprehensive protection options designed specifically for high-performance electric bikes.
            </p>
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coverage Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the coverage that fits your hauling style and needs. Mix and match options for complete protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageDetails.map((coverage) => (
              <Card key={coverage.name} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <coverage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{coverage.name}</CardTitle>
                  <CardDescription>{coverage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {coverage.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* hotshot truck Models */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              TRUCKS WE <span className="text-gradient">PROTECT</span>
            </h2>
            <p className="text-lg text-gray-300">
              From duallies to medium-duty rigs, we insure all hotshot configurations nationwide.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {siteConfig.truckTypes.map((truck) => (
              <Card key={truck.name} className="text-center hover:shadow-lg transition-shadow truck-paint border-truck-orange/20">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-truck-orange/10 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-truck-amber" />
                  </div>
                  <h3 className="font-bold mb-2 text-white">{truck.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">{truck.description}</p>
                  <p className="text-xs text-truck-amber font-medium">{truck.specs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300">
              Got a different hotshot setup? We cover it.{" "}
              <Link href="/contact" className="text-truck-amber font-bold hover:text-white transition-colors">
                Contact us
              </Link>{" "}
              to get protected.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about hotshot truck insurance coverage.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Have more questions? We're happy to help.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Custom Quote
            </h2>
            <p className="text-lg text-slate-200 mb-8">
              Every haulr is different. Let us create a coverage package tailored to your specific hotshot truck and hauling habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/quote">
                  Start Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href={`tel:${siteConfig.company.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

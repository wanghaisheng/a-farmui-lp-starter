import { Hero } from '@kinfe123/farm-ui/marketing/hero'
import { FAQ } from '@kinfe123/farm-ui/marketing/faq'
import { PricingSection } from '@kinfe123/farm-ui/marketing/pricing'
import { Feature } from '@kinfe123/farm-ui/marketing/feature'
import { Newsletter } from '@kinfe123/farm-ui/marketing/newsletter'
import { Testimonial } from '@kinfe123/farm-ui/marketing/testimonial'
import { Navigation } from '@kinfe123/farm-ui/components/navigation'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        brand="Farm UI"
        links={[
          { href: '/', label: 'Home' },
          { href: '/pricing', label: 'Pricing' },
          { href: '/about', label: 'About' },
          { href: '/sign-in', label: 'Sign In' }
        ]}
      />
      
      <main>
        <Hero
          title="Build Beautiful UIs Faster"
          subtitle="Modern, responsive components ready for your next project"
          ctaText="Get Started Free"
          ctaLink="/sign-in"
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
        />

        <Feature
          title="Why Choose Farm UI?"
          subtitle="Everything you need to build modern applications"
          features={[
            {
              title: 'Pre-built Components',
              description: 'Save time with our library of production-ready components',
              icon: '🎨'
            },
            {
              title: 'Customizable',
              description: 'Easy to modify and adapt to your brand',
              icon: '⚡'
            },
            {
              title: 'Responsive Design',
              description: 'Looks great on any device or screen size',
              icon: '📱'
            }
          ]}
        />

        <PricingSection
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for you"
          plans={[
            {
              name: 'Starter',
              price: 'Free',
              features: ['Basic Components', 'Community Support', '1 Project']
            },
            {
              name: 'Pro',
              price: '$29/mo',
              features: ['All Components', 'Priority Support', 'Unlimited Projects']
            }
          ]}
        />

        <Testimonial
          title="What Our Users Say"
          testimonials={[
            {
              content: "Farm UI has transformed how I build websites. The components are beautiful and easy to use.",
              author: "Sarah Chen",
              role: "Frontend Developer",
              avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=sarah"
            }
          ]}
        />

        <FAQ
          title="Frequently Asked Questions"
          questions={[
            {
              question: "How do I get started?",
              answer: "Simply install Farm UI via npm or yarn and start importing components."
            },
            {
              question: "Is it production ready?",
              answer: "Yes! Farm UI is being used by thousands of developers in production."
            }
          ]}
        />

        <Newsletter
          title="Stay Updated"
          description="Get the latest Farm UI news and updates delivered to your inbox"
          buttonText="Subscribe"
        />
      </main>
    </div>
  )
}

export default LandingPage
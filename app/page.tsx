import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProductsSection } from '@/components/products-section'
import { AboutSection } from '@/components/about-section'
import { ReviewsSection } from '@/components/reviews-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}

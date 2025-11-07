import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import SplitFeature from './SplitFeature';
import CTAReferral from './CTAReferral';
import Partnership from './Partnership';
import ContactBlock from './ContactBlock';
import FAQ from './FAQ';
import JsonLd from './jsonld';
import { content } from './content';

export default function LongTermCarePage() {
  const { split } = content;
  
  return (
    <div className="bg-brand-navy min-h-screen">
      <JsonLd />
      <Hero />
      <ProblemSolution />
      
      {/* Split Features */}
      {split.map((feature, index) => (
        <SplitFeature
          key={index}
          image={feature.image}
          imageAlt={feature.imageAlt}
          title={feature.title}
          body={feature.body}
          reverse={feature.reverse}
        />
      ))}
      
      <CTAReferral />
      <Partnership />
      <ContactBlock />
      <FAQ />
    </div>
  );
}

export const metadata = {
  title: 'Long-Term Care Pharmacy Services - Xpress Care Pharmacy',
  description: 'Comprehensive pharmacy services for assisted living facilities, nursing homes, and long-term care facilities. Medication management, delivery, and expert support.',
  keywords: 'long-term care pharmacy, assisted living pharmacy, nursing home pharmacy, medication management, facility pharmacy services, Dispill packaging',
}

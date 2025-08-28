import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes, UniHealth uses military-grade encryption and is fully HIPAA and GDPR compliant. Your medical data is protected with the highest security standards."
    },
    {
      question: "How much does it cost?",
      answer: "UniHealth offers flexible pricing plans including a free tier for basic features. Professional plans start at $9.99/month for patients and $29.99/month for healthcare providers."
    },
    {
      question: "Can any doctor access my records?",
      answer: "No, only healthcare providers you explicitly authorize can access your records. You maintain complete control over who sees your medical information and can revoke access at any time."
    },
    {
      question: "Is UniHealth available worldwide?",
      answer: "UniHealth is currently available in the United States, Canada, and the European Union. We're actively expanding to additional countries and regions."
    },
    {
      question: "How do I migrate my past records?",
      answer: "UniHealth provides easy import tools to transfer records from most major healthcare systems. Our support team can also assist with bulk migrations for complex medical histories."
    },
    {
      question: "What platforms are supported?",
      answer: "UniHealth works on modern web browsers and iOS/Android via our mobile apps. Your data syncs securely across all devices."
    },
    {
      question: "Can I share records with family or caregivers?",
      answer: "Yes. You can grant read-only or time-limited access to trusted contacts and revoke it at any time from settings."
    },
    {
      question: "How do online appointments work?",
      answer: "Schedule a time, verify consent, and join the secure video session from the app. Notes and prescriptions are saved to your record."
    },
    {
      question: "What if I lose my device?",
      answer: "Log in from another device and use 'Sign out of all devices'. Data is encrypted at rest; biometrics/2FA prevent unauthorized access."
    },
    {
      question: "How do I contact support?",
      answer: "Use the in-app Help Center or email support@unihealth.example. We typically respond within 24 hours."
    }
  ];

  return (
    <section className="bg-background medical-section-padding" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">Frequently Asked Questions</h2>
          <p className="medical-section-subtitle">Get answers to common questions about UniHealth</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl" data-testid={`faq-item-${index}`}>
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted transition-colors"
                onClick={() => toggleItem(index)}
                data-testid={`faq-question-${index}`}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-muted-foreground w-5 h-5 transition-transform",
                    openItems.includes(index) ? "rotate-180" : ""
                  )}
                />
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6 text-muted-foreground" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

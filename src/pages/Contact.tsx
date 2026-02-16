import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Download, ExternalLink, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailSubject = `GFDL Enquiry: ${subject}`;
    const mailBody = `
Name: ${name}
Email: ${email}
Inquiry Type: ${subject}

Message:
${message}

-----------------------------
Faculty Website:
https://www.iitism.ac.in/faculty-details?faculty=swarandeep

CV:
https://www.iitism.ac.in/faculty-documents/swarandeep-sahoo-cv.pdf
`;

    window.location.href = `mailto:swarandeep@iitism.ac.in?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader 
          title="Contact Us" 
          subtitle="Geophysical Fluid Dynamics Laboratory | Department of Applied Geophysics"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Contact Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

              {/* Faculty Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Dr. Swarandeep Sahoo
                </h3>
                <p className="text-accent font-medium mb-6">DST-INSPIRE Faculty</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <span className="text-muted-foreground">
                      Ground Floor, Annex Building<br />
                      Dept. of Applied Geophysics<br />
                      IIT(ISM) Dhanbad, Jharkhand 826004
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto: swarandeep@iitism.ac.in"
                      className="text-primary hover:text-accent transition-colors"
                    >
                       swarandeep@iitism.ac.in
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <span className="text-muted-foreground">
                      +91-326-223-5438<br />
                      +91-8762960598
                    </span>
                  </div>
                </div>

               
              </motion.div>

              {/* Lab Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  GFD Lab Office
                </h3>
                <p className="text-accent font-medium mb-6">General Inquiries</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <span className="text-muted-foreground">
                      Geophysical Fluid Dynamics Lab<br />
                      Ground Floor, Annex Building, Applied Geophysics Dept.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:geophysicalfd.lab@gmail.com"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      geophysicalfd.lab@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://scholar.google.com/citations?user=SreV3qoAAAAJ&hl=en&oi=ao"
                    className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Google Scholar"
                  >
                    GS
                  </a>
                  <a
                    href="https://orcid.org/0000-0002-0257-4724"
                    className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="ORCID"
                  >
                    OR
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Swarandeep-Sahoo"
                    className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="ResearchGate"
                  >
                    RG
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-16"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input type="text" name="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" name="email" required placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select 
                    name="subject" 
                    required 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select Inquiry</option>
                    <option value="PhD Admission">PhD Admission</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Facility Access">Facility Access</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    name="message" 
                    rows={5} 
                    required 
                    placeholder="Describe your inquiry..."
                  />
                </div>

                <Button type="submit" variant="gold" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Find Us</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6!2d86.4437!3d23.8144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc8c0b7d89d5%3A0x8c6d56e7c7f0d!2sIIT%20(ISM)%20Dhanbad!5e0!3m2!1sen!2sin!4v1699999999999" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIT ISM Dhanbad Location"
                />
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

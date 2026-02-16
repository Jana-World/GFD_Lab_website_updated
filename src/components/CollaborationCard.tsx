import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

interface CollaborationCardProps {
  name: string;          // Professor/Researcher name
  institution: string;   // Institution name
  logo?: string;         // Institution logo
  photo?: string;        // Profile photo
  country: string;
  website?: string;      // Link to profile or institution
  type?: string;         // Academic / Industry / International
}

const CollaborationCard = ({
  name,
  institution,
  logo,
  photo,
  country,
  website,
  type,
}: CollaborationCardProps) => {
  return (
    <motion.a
      href={website || "#"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-border flex flex-col items-center text-center"
    >
      {/* Profile Photo */}
      {photo && (
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary"
        />
      )}

      {/* Name */}
      <h4 className="text-lg font-serif font-bold text-foreground mb-1">{name}</h4>

      {/* Type */}
      {type && (
        <span className="text-sm text-accent mb-2 uppercase tracking-wide">{type}</span>
      )}

      {/* Institution */}
      <p className="text-sm text-muted-foreground mb-2">{institution}</p>

      {/* Logo */}
      {logo && (
        <img
          src={logo}
          alt={institution}
          className="w-16 h-16 object-contain mt-2 mb-2"
        />
      )}

      {/* Country */}
      <div className="flex items-center justify-center gap-1 text-sm text-accent">
        <MapPin className="w-4 h-4" />
        {country}
      </div>

      {/* External link icon */}
      {website && (
        <div className="mt-2">
          <ExternalLink className="w-4 h-4 text-primary inline-block" />
        </div>
      )}
    </motion.a>
  );
};

export default CollaborationCard;

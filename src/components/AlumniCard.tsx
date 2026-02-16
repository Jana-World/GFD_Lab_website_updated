import { Mail, Globe } from "lucide-react";

interface AlumniCardProps {
  name: string;
  position: string;
  topic: string;
  currentPosition: string;
  bio: string;
  image?: string;
  email?: string;
  website?: string;
}

const AlumniCard = ({
  name,
  position,
  topic,
  currentPosition,
  bio,
  image,
  email,
  website,
}: AlumniCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-md p-6 flex gap-6 hover:shadow-lg transition-shadow">

      {/* Image */}
      <div className="flex-shrink-0">
        <div className="w-28 h-36 rounded-xl overflow-hidden bg-secondary flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-muted-foreground text-sm">No Photo</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">

        {/* Name */}
        <h3 className="text-xl font-serif font-bold text-foreground">
          {name}
        </h3>

        {/* Position */}
        <p className="text-sm font-medium text-accent">
          {position}
        </p>

        {/* Topic */}
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold">Topic:</span> {topic}
        </p>

        {/* Current Position */}
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold">Current Position:</span> {currentPosition}
        </p>

        {/* Bio */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Bio:</span> {bio}
        </p>

        {/* Contact */}
        <div className="flex flex-col gap-2 pt-1">

          {/* Email */}
          {email && (
            <div className="text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-semibold">Email:</span>
              <a
                href={`mailto:${email}`}
                className="text-primary hover:text-accent transition-colors"
              >
                {email}
              </a>
            </div>
          )}

          {/* Website */}
          {website && (
            <div className="text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-semibold">Website:</span>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                {website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AlumniCard;

import { Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  topic: string;
  bio: string;
  email?: string;
  image?: string;
}

const TeamCard = ({
  name,
  position,
  topic,
  bio,
  email,
  image,
}: TeamCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-md p-6 flex gap-6 hover:shadow-lg transition-shadow">

      {/* Photo */}
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
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground">
            {name}
          </h3>
          <p className="text-sm font-medium text-accent">
            {position}
          </p>
        </div>

        {/* Topic */}
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Topic:</span>{" "}
          {topic}
        </p>

        {/* Bio */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Bio:</span>{" "}
          {bio}
        </p>

        {/* Email */}
        {email && (
          <p className="text-sm flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">Email:</span>
            <a
              href={`mailto:${email}`}
              className="text-primary hover:text-accent transition-colors"
            >
              {email}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;

import { Mail, Phone } from 'lucide-react';

type Props = {
  full_name: string;
  position: string;
  email: string;
  phone?: string;
};

export const TeamMember = ({ email, full_name, position, phone }: Props) => (
  <div>
    <h5>{full_name}</h5>
    <div className="space-y-1">
      <p>{position}</p>
      <div className="flex items-center gap-2.5">
        <Mail size={20} />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      {phone ? (
        <div className="flex items-center gap-2.5">
          <Phone size={20} />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      ) : null}
    </div>
  </div>
);

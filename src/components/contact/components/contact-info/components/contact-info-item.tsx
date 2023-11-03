import { Mail, MapPin, Phone } from 'lucide-react';

type Props = {
  headquarters: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
  };
  phone: string;
  email: string;
};

export const ContactInfoItem = ({
  address,
  email,
  headquarters,
  phone,
}: Props) => (
  <div className="space-y-2 md:space-y-0">
    <h5>{headquarters}</h5>
    <div className="flex items-center gap-5">
      <MapPin />
      <div>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.postal_code}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-5">
      <Phone />
      <div>
        <p>{phone}</p>
      </div>
    </div>
    <div className="flex items-center gap-5">
      <Mail />
      <div>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

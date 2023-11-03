import { TeamMember } from './team-member';

const members = [
  {
    full_name: 'Hubert Jacek',
    position: 'Prezes zarządu',
    email: 'h.jacek@kjworkgroup.pl',
    phone: '+48 789 789 789',
  },
  {
    full_name: 'Jan Kowalski',
    position: 'Dyrektor',
    email: 'j.kowalski@kjworkgroup.pl',
    phone: '+48 789 789 789',
  },
  {
    full_name: 'Anna Kowalska',
    position: 'Prezes zarządu',
    email: 'anna.kowalska@kjworkgroup.pl',
    phone: '+48 789 789 789',
  },
];

export const Team = () => (
  <section className="space-y-2.5">
    <div>
      <h3>ZESPÓŁ</h3>
    </div>
    <div className="gap-10 grid grid-cols-2 justify-evenly">
      {members.map(member => (
        <TeamMember key={member.email} {...member} />
      ))}
    </div>
  </section>
);

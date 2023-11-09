import { useTeam } from './team.controller';
import { TeamMember } from '../team-member';

export const Team = () => {
  const { members, t } = useTeam();
  return (
    <section className="space-y-2.5">
      <div>
        <h3 className="uppercase">{t('team')}</h3>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 justify-evenly">
        {members.map(member => (
          <TeamMember key={member.email} {...member} />
        ))}
      </div>
    </section>
  );
};

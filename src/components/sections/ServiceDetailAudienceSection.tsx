import { Briefcase, Building2, GraduationCap, Laptop, Presentation, UserRound, Users } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import type { ServiceClient } from '@/types/service';
import { ServiceSectionHeader, tileColour } from './serviceDetailShared';

/** How many audiences to show. */
const MAX_AUDIENCES = 4;

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Avatar icon per audience, picked from its wording (first match wins, so
 * "Engineering students" is a student, not an engineer). Broad, domain-wide
 * audiences ("Anyone…", "Employees looking…") get a group. Falls back to a person.
 */
const AVATARS: [RegExp, Icon][] = [
  [/\b(anyone|all|employees|working professionals|public servants)\b/i, Users],
  [/\b(students?|graduates?|interns?|apprentices?|career|candidates?|fresh)\b/i, GraduationCap],
  [/\b(faculty|instructors?|trainers?|teachers?|educat\w*|research\w*|scholars?|phd)\b/i, Presentation],
  [/\b(management|leadership|managers?|leads?|executives?|officials?|administrat\w*|hr|l&d|strategists?)\b/i, Briefcase],
  [/\b(organi[sz]ations?|compan\w*|enterprises?)\b/i, Building2],
  [/\b(developers?|engineers?|qa|testing|sdets?|devops|data|analysts?|scientists?|technical|tech|cloud)\b/i, Laptop],
  [/\b(teams?|departments?|staff|employees?|municipal|bmc|personnel)\b/i, Building2],
];
const avatarFor = (text: string): Icon => AVATARS.find(([re]) => re.test(text))?.[1] ?? UserRound;

/**
 * Who Should Attend: the first four audiences as profile-style cards, each
 * with a round avatar sitting over the card's top edge and the audience
 * written below it.
 */
export default function ServiceDetailAudienceSection({ service }: { service: ServiceClient }) {
  const audience = (service.whoShouldAttend ?? []).filter(Boolean).slice(0, MAX_AUDIENCES);
  if (audience.length === 0) return null;

  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          id="audience-heading"
          pill="Who It's For"
          title={<>Who Should <span className="text-brand">Attend?</span></>}
          intro="Built for individuals and teams who want to put these skills to work."
        />

        {/* pt-10 leaves room for the avatars that sit over the cards' top edge */}
        <ul className="grid grid-cols-2 gap-x-3 gap-y-12 pt-9 sm:gap-x-5 sm:gap-y-14 sm:pt-10 lg:grid-cols-4">
          {audience.map((aud, i) => {
            const Avatar = avatarFor(aud);
            return (
              <li
                key={`${aud}-${i}`}
                className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-3 pb-5 pt-11 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:px-5 sm:pb-6 sm:pt-14"
              >
                <span
                  className={`absolute left-1/2 top-0 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ${tileColour(i)} text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20`}
                  aria-hidden="true"
                >
                  <Avatar className="h-7 w-7 sm:h-9 sm:w-9" />
                </span>
                <p className="text-sm font-bold leading-snug text-gray-900 sm:text-lg">{aud}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

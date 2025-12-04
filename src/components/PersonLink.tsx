import { Link } from 'react-router-dom';

export interface LinkPerson {
  name: string;
  sex: string;
  born?: number;
}

interface PersonLinkProps {
  person: LinkPerson;
  isParentLink?: boolean;
}

export const PersonLink: React.FC<PersonLinkProps> = ({
  person,
  isParentLink = false,
}) => {
  const nameToUse = person.name;
  const safeName = nameToUse.replace(/\s+/g, '-').toLowerCase();

  let slug: string;

  if (isParentLink) {
    slug = safeName;
  } else {
    slug = `${safeName}-${person.born}`;
  }

  const className = person.sex === 'f' ? 'has-text-danger' : undefined;

  return (
    <Link to={slug} className={className}>
      {person.name}
    </Link>
  );
};

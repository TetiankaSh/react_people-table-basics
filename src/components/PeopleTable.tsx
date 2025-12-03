import { Person } from '../types';

interface PeopleTableProps {
  people: Person[];
  selectedName: string | null;
  onSelect: (name: string) => void;
}

export const PeopleTable: React.FC<PeopleTableProps> = ({
  people,
  selectedName,
  onSelect,
}) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => {
          const isSelected = person.name === selectedName;

          return (
            <tr
              data-cy="person"
              key={person.name}
              onClick={() => onSelect && onSelect(person.name)}
              className={isSelected ? 'has-background-warning' : ''}
            >
              <td>
                <a
                  className={person.sex === 'f' ? 'has-text-danger' : ''}
                  href={`#/people/${person.name.replace(/\s+/g, '-').toLowerCase()}-${person.born}`}
                >
                  {person.name}
                </a>
              </td>

              <td>{person.sex}</td>
              <td>{person.born}</td>
              <td>{person.died}</td>
              <td>{person.motherName}</td>
              <td>{person.fatherName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

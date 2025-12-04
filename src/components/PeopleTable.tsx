import { Person } from '../types';
import { LinkPerson, PersonLink } from './PersonLink';
interface PeopleTableProps {
  people: Person[];
  selectedName: string | null;
}

export const PeopleTable: React.FC<PeopleTableProps> = ({
  people,
  selectedName,
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
              className={isSelected ? 'has-background-warning' : ''}
            >
              <td>
                <PersonLink person={person} />
              </td>

              <td>{person.sex}</td>
              <td>{person.born}</td>
              <td>{person.died}</td>
              <td>
                {!person.motherName ? (
                  '-'
                ) : (
                  <PersonLink
                    person={
                      {
                        name: person.motherName,
                        sex: 'f',
                        born: undefined,
                      } as LinkPerson
                    }
                    isParentLink={true}
                  />
                )}
              </td>

              <td>
                {!person.fatherName ? (
                  '-'
                ) : (
                  <PersonLink
                    person={
                      {
                        name: person.fatherName,
                        sex: 'f',
                        born: undefined,
                      } as LinkPerson
                    }
                    isParentLink={true}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

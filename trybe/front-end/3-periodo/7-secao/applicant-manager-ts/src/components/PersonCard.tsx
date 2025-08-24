import { PersonType } from '../types';

type PersonCardProps = {
  person: PersonType,
};

export default function PersonCard(props: PersonCardProps) {
  const { person: { name, picture } } = props;

  return (
    <figure>
      <figcaption>
        <h2>{ `${name.first} ${name.last}` }</h2>
      </figcaption>
      <img src={ picture.large } alt="thumbnail" />
    </figure>
  );
}

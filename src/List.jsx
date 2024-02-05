import { students } from "./data";

export const List = () => {
  const list = students.map(({ name, id }) => (
    <li className="list-item" key={id}>
      {name}
    </li>
  ));

  return <ul className="list">{list}</ul>;
};

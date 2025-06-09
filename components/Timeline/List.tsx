export type ListProperties = {
  title: string;
  points: string[];
};

const List: React.FC<{ list: ListProperties }> = ({ list }) => {
  return (
    <div>
      <p>{list.title}</p>
      <ul className="list-disc">
        {list.points.map((entry, index) => (
          <li key={index} className="ml-8">
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

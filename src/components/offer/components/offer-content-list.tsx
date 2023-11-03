type Props = {
  label: string;
  list: string[];
};

export const OfferContentList = ({ label, list }: Props) => {
  return (
    <div>
      <h6>{label}</h6>
      <ul className="list-disc list-inside">
        {list.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
};

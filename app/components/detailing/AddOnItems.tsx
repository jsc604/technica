interface AddOnItemProps {
  title: string;
  price: string;
  description: string;
};

const AddOnItems = ({ title, price, description }: AddOnItemProps) => {
  return (
    <div className="my-8 p-4 sm:mx-8">
      <div className="flex justify-between">
        <h2 className="font-semibold mr-8">{title}</h2>
        <p className="text-end">{price}</p>
      </div>
      <p className="font-light">{description}</p>
    </div>
  )
};

export default AddOnItems;
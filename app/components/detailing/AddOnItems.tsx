interface AddOnItemProps {
  title: string;
  price: string;
  description: string;
};

const AddOnItems = ({ title, price, description }: AddOnItemProps) => {
  return (
    <div className="p-4 my-8 sm:mx-8">
      <div className="flex justify-between">
        <h2 className="mr-8 font-semibold">{title}</h2>
        {/* <p className="text-end">{price}</p> */}
      </div>
      <p className="font-light">{description}</p>
    </div>
  )
};

export default AddOnItems;
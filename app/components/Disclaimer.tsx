interface DisclaimerProps {
  disclaimer: string;
}

const Disclaimer = ({ disclaimer }: DisclaimerProps) => {
  return (
    <div className="flex w-5/6 justify-center mx-auto">
      <span>***</span>
      <p className="text-center font-light text-sm">{disclaimer}</p>
      <span>***</span>
    </div>
  )
};

export default Disclaimer;
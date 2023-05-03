interface DisclaimerProps {
  disclaimer: string;
}

const Disclaimer = ({ disclaimer }: DisclaimerProps) => {
  return (
    <div className="flex w-11/12 justify-center mx-auto">
      <span>***</span>
      <p className="text-center font-light text-sm">{disclaimer}</p>
      <span>***</span>
    </div>
  )
};

export default Disclaimer;
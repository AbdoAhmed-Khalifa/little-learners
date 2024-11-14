import CardButton from "./CardButton";
import CardDescription from "./CardDescription";
import CardLines from "./CardLines";

const PageCard = ({title,description}:{title:string,description:string}) => {
  return (
    <div className="bg-white xl:p-12 p-6 lg:max-w-2xl md:max-w-lg  text-center space-y-12 border-2 rounded-xl border-dark-15 shadow-card ">
      <div className="space-y-5 ">
      <h2 className="font-raleway font-bold text-3xl">{title}</h2>
     <CardLines/>
      </div>
      <CardDescription description={description}/>
      <CardButton/>
    </div>
  );
};

export default PageCard;

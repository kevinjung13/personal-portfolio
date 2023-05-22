import Card from '../../Card';

export default function Work() {
  return (
    <>
      <Card
        src={"/photos/conversor.png"}
        title={"Conversor"}
        description={"Currency Exchange Platform"}
        link={"https://currency-exchange-rosy.vercel.app/"}
        target={"_blank"}
        program1={"HTML"}
        program2={"CSS"}
        program3={"JavaScript"}
        program4={"React"}
        summary={""} />
      <Card
        src={""}
        title={"Oasis Marketplace"}
        description={"Open Source AI NFT Marketplace"}
        link={"https://vercel.com/jeromevvb/oasis-marketplace/8WQ3B7psLPCsbMrLQHftCzE3mT8E"}
        target={"_blank"}
        program1={"Next Js"}
        program2={"Chakra UI"}
        program3={"TypeScript"}
        summary={""} />
      <Card
        src={"/photos/farang.png"}
        title={"Farang"}
        description={"Expat Guide"}
        link={"https://expat-guide.vercel.app/"}
        target={"_blank"}
        program1={"Next Js"}
        program2={"Float UI"}
        program3={"Tailwind CSS"}
        program4={"TypeScript"}
        summary={""} />
    </>
  );
}
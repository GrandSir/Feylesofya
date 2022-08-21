import { getFeylesof, getFeylesofBySlug } from "../../services";
import { FeylesofCard, Stars } from "../../components";
import Lottie from "react-lottie";
import animationData from "../../public/resources/lotties/blobwline.json";
import {GetServerSideProps, GetStaticPaths, GetStaticProps} from "next";
import { ParsedUrlQuery } from 'querystring'
import {Feylesof} from "../../services/models";

interface IParams extends ParsedUrlQuery {
    slug: string
}
export const getServerSideProps: GetServerSideProps<Feylesof, IParams> = async(context) => {
  const feylesof = await getFeylesofBySlug(context.params!);
  return {
    props: feylesof!, // Force unwrapped only because that a non-existent user can't be redirected here because of the GetStaticPaths.
  };
}

export default function FeylesofPage(feylesof : Feylesof) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        style={{
          opacity: 0.4,
          position: "absolute",
          top: "1%",
          right: "0",
          filter: "hue-rotate(230deg)",
        }}
        options={defaultOptions}
        height={700}
        width={700}
      />
      <FeylesofCard {...feylesof}></FeylesofCard>
      <Stars></Stars>
    </div>
  );
}

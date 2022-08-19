import { getFeylesof, getFeylesofBySlug } from "../../services";
import { FeylesofCard, Stars } from "../../components";
import Lottie from "react-lottie";
import animationData from "../../public/resources/lotties/blobwline.json";

export async function getStaticPaths() {
  const feylesofData = await getFeylesof();

  // @ts-ignore
  const paths = feylesofData.map((feylesof) => ({
    params: { slug: feylesof.node.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps(context) {
  const { params } = context;
  const feylesof = await getFeylesofBySlug(params);
  return {
    props: feylesof,
  };
}

// @ts-ignore
export default function FeylesofPage(feylesof) {
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

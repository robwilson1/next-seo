import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import data from "../../data";

const SearchPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const query = router.query || {};

  return (
    <>
      <h1>{data}</h1>
      <pre>
        <code>{JSON.stringify(query, null, 4)}</code>
      </pre>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{ data: string }> = async (
  context
) => {
  const { facets, ...queryParams } = context.params as {
    facets: string[];
    [key: string]: unknown;
  };

  if (!shouldRender(facets)) {
    return {
      notFound: true,
    };
  }

  const formattedString = facets.map((facet) => parseString(facet)).join(", ");

  return {
    props: { data: `You are looking for ${formattedString}` }, // will be passed to the page component as props
  };
};

const getFacetype = (facet: string) => data.get(facet);

const shouldRender = (facets: string[] = []) => {
  if (facets.length === 1) {
    return true;
  }

  if (facets.length === 2) {
    if (getFacetype(facets[0]) === "make") {
      return true;
    }
  }

  if (facets.length === 3) {
    if (
      getFacetype(facets[0]) === "make" &&
      getFacetype(facets[1]) === "model"
    ) {
      return true;
    }
  }

  return false;
};

const parseString = (facet: string) => {
  const facetType = getFacetype(facet);
  switch (facetType) {
    case "bodyType":
      return `the ${facet} body type`;
    case "colour":
      return `the colour ${facet}`;
    case "fuelType":
      return `that runs on ${facet}`;
    default:
      return facet;
  }
};

export default SearchPage;

import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <h1>Welcome to Search</h1>
      <p>Type in some params in the URL bar or choose one of the following</p>
      <br />
      <ul>
        <li>
          <Link href="/used-cars/red">Red Cars</Link>
        </li>
        <li>
          <Link href="/used-cars/ford">Fords</Link>
        </li>
        <li>
          <Link href="/used-cars/ford/red">Red Fords</Link>
        </li>
        <li>
          <Link href="/used-cars/ford/focus">Ford Focus&apos;s</Link>
        </li>
        <li>
          <Link href="/used-cars/ford/focus/red">Red Ford Focus&apos;s</Link>
        </li>
        <li>
          <Link href="/used-cars/focus/ford/red">
            Red Focus Ford&apos;s (Bad link!)
          </Link>
        </li>
      </ul>
    </>
  );
};

export default IndexPage;

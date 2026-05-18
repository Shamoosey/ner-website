import logo from "../assets/NER-Logo.svg";
import { useLinkTree } from "../hooks/useLinkTree";
import { DynamicIcon } from "../components/DynamicIcon";
import { Link } from "react-router";
import { Spinner } from "../components/Spinner";

export function LinkTree() {
  const { data = [], isLoading } = useLinkTree();
  return (
    <div className="bg-brown w-full h-screen flex flex-col md:bg-fixed bg-scroll bg-center bg-cover md:bg-[url('/bg-full.jpg')] bg-[url('/bg-full.jpg')]">
      <section className="flex justify-center text-paler font-family-lato ">
        <div>
          <section className="min-h-20 px-4 py-8">
            <div className="flex justify-center">
              <img src={logo} alt="Main Logo" className="w-full max-w-5xl" />
            </div>
          </section>
          <div className="flex flex-col gap-2">
            {isLoading ? (
              <div className="flex justify-center mt-12">
                <Spinner />
              </div>
            ) : (
              data.map((x, i) => (
                <Link to={x.url} key={i}>
                  <div className="flex justify-start items-center gap-4 text-paler bg-dark rounded p-3 hover:text-dark hover:bg-paler transition duration-150 cursor-pointer">
                    <DynamicIcon name={x.icon} className="w-6 h-6" />
                    <span className="text-lg">{x.text}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import logo from "../assets/NER-Logo.svg";
import TVDinnerArt from "../assets/TV-Dinner_EP-Art.jpg";
import { Link } from "react-router";
import type { ShowData } from "../interfaces/ShowData";
import { Button } from "../components/Button";
import { ShowItem } from "../components/ShowItem";
import { Footer } from "../components/Footer";

interface HomeProps {
  data: ShowData[];
}

function Home({ data }: HomeProps) {
  const [showData, setShowData] = useState<ShowData[]>(data);

  function getActiveShows() {
    return showData.filter((x) => x.date >= new Date(new Date().setHours(0, 0, 0, 0)));
  }

  return (
    <div className="bg-brown min-w-100 md:min-h-240 md:bg-fixed bg-scroll bg-center bg-cover md:bg-[url('/bg-top.jpg')] bg-[url('/bg-full.jpg')]">
      <section className="md:min-h-280">
        <div className="flex flex-row justify-end p-16">
          <div className="font-family-lato font-normal text-paler flex gap-8 align-center">
            <span className="border-b-1 cursor-pointer border-grey text-xl">
              <a href="mailto:naked.elevator.ride@gmail.com">Contact</a>
            </span>
          </div>
        </div>
        <img src={logo} alt="Main Logo" className="md:h-150 p-12" />
      </section>
      <section className="md:min-h-240">
        <div className="flex justify-center md:min-h-100 ">
          <div className="flex flex-col px-8">
            <div className="flex justify-end">
              <span className="font-bold md:text-5xl text-2xl italic font-family-times text-paler pb-4">EP "TV Dinner" OUT MAY 29</span>
            </div>
            <img src={TVDinnerArt} className="max-h-200 w-200" />
            <div className="m-auto mt-8">
              <Button className="px-8 py-1.5">LISTEN</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brown text-paler md:min-h-60 mt-10">
        <div className="flex justify-center">
          <div className="m-16 w-200">
            <div className="mb-8">
              <span
                className="font-family-times text-4xl italic 
              font-bold">
                UPCOMING SHOWS
              </span>
            </div>
            <div className="flex flex-col md:w-120 font-family-lato gap-10 mt-4">
              {getActiveShows().length == 0 ? (
                <div>
                  <span className="text-lg">More shows coming soon...</span>
                </div>
              ) : (
                <>
                  {getActiveShows().map((x) => (
                    <ShowItem data={x} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="md:min-h-210 md:bg-fixed bg-scroll bg-center bg-cover md:bg-[url('/bg-bottom.jpg')]">
        <div className="flex justify-center pb-8">
          <div className="flex flex-col">
            <div className="flex justify-end mt-16 mb-6">
              <span className="font-bold text-4xl italic font-family-times text-brown">VIDEOS</span>
            </div>
            <div className="relative">
              <iframe
                className="md:w-200 md:h-150 w-80 h-60 sm:w-100 sm:h-80"
                src="https://www.youtube.com/embed/elYe9Qb6SUw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex justify-center mt-8">
              <Link to="https://www.youtube.com/@NakedElevatorRide">
                <Button className="italic">WATCH THE 'TUBE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

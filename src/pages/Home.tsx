import { useState } from "react";
import logo from "../assets/NER-Logo.svg";
import TVDinnerArt from "../assets/TV-Dinner_EP-Art.jpg";
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
    <div className="bg-brown min-w-200 md:min-h-240 flex flex-col md:bg-fixed bg-scroll bg-center bg-cover md:bg-[url('/bg-full.jpg')] bg-[url('/bg-full.jpg')]">
      <section>
        <div className="flex flex-row justify-end p-16">
          <div className="font-family-lato font-normal text-paler flex gap-8 align-center">
            <span className="border-b-1 cursor-pointer border-grey text-xl">
              <a href="mailto:naked.elevator.ride@gmail.com">CONTACT</a>
            </span>
          </div>
        </div>
      </section>
      <section className="md:min-h-160 min-h-140">
        <div className="flex justify-center">
          <img src={logo} alt="Main Logo" className="md:w-200 w-180" />
        </div>
      </section>
      <section className="md:min-h-240">
        <div className="flex justify-center">
          <div className="flex flex-col px-8">
            <div className="flex">
              <div className="flex flex-col gap-2 pb-6">
                <span className="font-bold text-xl font-family-lato text-paler bg-dark p-1.5 uppercase">
                  EP "TV Dinner", OUT MAY 28, 2026
                </span>
                <div className="">
                  <Button className="px-8 py-1.5">LISTEN NOW</Button>
                </div>
              </div>
            </div>
            <img src={TVDinnerArt} className="max-h-200 w-200" />
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
      <section className="md:min-h-160 md:bg-fixed bg-scroll bg-center bg-cover md:bg-[url('/bg-bottom.jpg')]">
        <div className="flex justify-center py-16">
          <div className="flex flex-col">
            <div className="relative">
              <iframe
                className="md:w-180 md:h-140 w-140 h-100 sm:w-160 sm:h-120"
                src="https://www.youtube.com/embed/elYe9Qb6SUw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

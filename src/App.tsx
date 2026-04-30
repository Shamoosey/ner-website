import { useState } from "react";
import logo from "./assets/NER-Logo.svg";
import TVDinnerArt from "./assets/TV-Dinner_EP-Art.jpg";
import type { ShowData } from "./interfaces/ShowData";
import { ShowItem } from "./components/ShowItem";
import { Button } from "./components/Button";
import SpotifyIcon from "./components/icons/SpotifyIcon";
import { YoutubeIcon } from "./components/icons/YoutubeIcon";
import { InstagramIcon } from "./components/icons/InstagramIcon";
import { Link } from "react-router";

function App() {
  const [showData, setShowData] = useState<ShowData[]>([
    {
      tite: "TV Dinner EP Release Show",
      featuring: "Naked Elevator Ride, Say Bon, Sophie Stevens",
      location: "HANDSOME DAUGHTER",
      date: new Date("2026-05-28"),
      ticketLink: "https://www.showpass.com/naked26/",
    },
  ]);

  return (
    <div className="min-h-240 bg-fixed bg-center bg-cover bg-[url('/bg-top.jpg')]">
      <section className="min-h-280 bg-center bg-fixed bg-cover bg-[url('/bg-top.jpg')]">
        <div className="flex flex-row justify-end p-16">
          <div className="font-family-lato font-normal text-paler flex gap-8 align-center">
            <span className="border-b-1 cursor-pointer border-grey text-xl">
              <a href="mailto:naked.elevator.ride@gmail.com">Contact</a>
            </span>
          </div>
        </div>
        <img src={logo} alt="Main Logo" className="h-150 p-12 mt-4" />
      </section>
      <section className="min-h-240">
        <div className="flex justify-center h-70">
          <div className="absolute top-250 flex flex-col">
            <div className="flex justify-end">
              <span className="font-bold text-5xl italic font-family-times text-paler pb-4">
                EP "TV Dinner" OUT MAY 29
              </span>
            </div>
            <img src={TVDinnerArt} className="h-200" />
            <div className="m-auto mt-8">
              <Button className="px-8 py-1.5">LISTEN</Button>
            </div>
          </div>
        </div>
        <div className="bg-brown text-paler min-h-60 mt-[600px]">
          <div className="flex justify-center">
            <div className="m-16 w-200">
              <div className="mb-8">
                <span
                  className="font-family-times text-4xl italic 
              font-bold">
                  UPCOMING SHOWS
                </span>
              </div>
              <div className="flex flex-col w-120 font-family-lato gap-10 mt-4">
                {showData.length == 0 ? (
                  <div>
                    <span className="text-lg">No Shows Currently Scheduled</span>
                  </div>
                ) : (
                  <>
                    {showData
                      .filter((x) => x.date >= new Date(new Date().setHours(0, 0, 0, 0)))
                      .map((x) => (
                        <ShowItem data={x} />
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-210 bg-fixed bg-center bg-cover bg-[url('/bg-bottom.jpg')]">
        <div className="flex justify-center h-70">
          <div className="flex flex-col">
            <div className="flex justify-end mt-16 mb-6">
              <span className="font-bold text-4xl italic font-family-times text-brown">VIDEOS</span>
            </div>
            <div className="flex justify-center">
              <iframe
                width="800"
                height="600"
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
      <section className="bg-dirt">
        <div className="flex justify-center h-40 py-16">
          <div className="flex justify-end w-200 gap-4">
            <span className="text-paler italic font-family-lato font-bold">naked.elevator.ride@gmail.com</span>
            <Link to="">
              <SpotifyIcon size={28} />
            </Link>
            <Link to="https://www.youtube.com/@NakedElevatorRide">
              <YoutubeIcon size={28} />
            </Link>
            <Link to="https://www.instagram.com/naked.elevator.ride">
              <InstagramIcon size={28} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import { Link } from "react-router";
import { InstagramIcon } from "./icons/InstagramIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import SpotifyIcon from "./icons/SpotifyIcon";

export function Footer() {
  return (
    <section className="bg-dirt">
      <div className="flex justify-center h-40 py-16 ">
        <div className="flex justify-end gap-4 md:w-200">
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
  );
}

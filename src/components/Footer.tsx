import { Link } from "react-router";
import { InstagramIcon } from "./icons/InstagramIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import SpotifyIcon from "./icons/SpotifyIcon";
import { HiOutlineExternalLink } from "react-icons/hi";

export function Footer() {
  return (
    <section className="bg-dirt">
      <div className="flex justify-center py-18 ">
        <div className="flex gap-4 md:max-w-5xl">
          <span className="text-paler italic font-family-lato font-bold">naked.elevator.ride@gmail.com</span>
          <Link to="https://open.spotify.com/artist/6bkoXGeOLmLRJo5XgIS8fr?si=iaPqTraoQtKk1aeg45cH7w">
            <SpotifyIcon size={28} />
          </Link>
          <Link to="https://www.youtube.com/@NakedElevatorRide">
            <YoutubeIcon size={28} />
          </Link>
          <Link to="https://www.instagram.com/naked.elevator.ride">
            <InstagramIcon size={28} />
          </Link>
          <Link to="/links">
            <HiOutlineExternalLink size={28} className="text-paler" />
          </Link>
        </div>
      </div>
    </section>
  );
}

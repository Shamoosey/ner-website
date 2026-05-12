import { Link } from "react-router";
import type { ShowData } from "../interfaces/ShowData";
import { Button } from "./Button";

export interface ShowItemProps {
  data: ShowData;
}

export function ShowItem(props: ShowItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between font-bold flex-col md:flex-row">
        <span className="uppercase">
          {props.data.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            timeZone: "UTC",
          })}
        </span>
        <span className="uppercase">
          {props.data.date.toLocaleDateString("en-US", {
            weekday: "long",
            timeZone: "UTC",
          })}
        </span>
        <span className="uppercase">@{props.data.location}</span>
      </div>
      <div className="text-xl italic">
        <span className="capitalize">{props.data.tite}</span>
      </div>
      <div className="pt-2 pb-4 ">
        <span>w/ </span>
        <span className="capitalize">{props.data.featuring}</span>
      </div>
      <div>
        <Link to={props.data.ticketLink}>
          <Button>TICKETS</Button>
        </Link>
      </div>
    </div>
  );
}

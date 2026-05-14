import type { BaseResponse } from "../interfaces/BaseResponse";
import type { LinkTree } from "../interfaces/LinkTree";
import type { ShowData } from "../interfaces/ShowData";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export async function getShowData() {
  const res: Response = await fetch(`${BASE_URL}/shows`);

  if (!res.ok) {
    throw new Error("Unable to fetch show data");
  }

  const json: BaseResponse<ShowData[]> = await res.json();

  return json.data;
}

export async function getLinkTree() {
  const res: Response = await fetch(`${BASE_URL}/linktree`);

  if (!res.ok) {
    throw new Error("Unable to fetch linktree");
  }

  const json: BaseResponse<LinkTree[]> = await res.json();

  return json.data;
}

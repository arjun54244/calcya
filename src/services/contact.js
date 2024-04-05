import { httpAxios } from "../helper/httpHelper";

export async function contact(data) {
  const result = await httpAxios
    .post("/api/contact", data)
    .then((response) => response.data);
  return result;
}

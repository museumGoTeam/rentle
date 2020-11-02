import React from "react";
import axios from "axios";
import { RentleResponse } from "../pages/types";

type FetchOptions = {
  uri: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: {}
};

export default <T>(options: FetchOptions) => {
  const [res, setRes] = React.useState<{ data: T | undefined; loading: boolean }>({
    data: undefined,
    loading: true,
  });


  React.useEffect(() => {
    const fetch = async () => {
      switch (options.method) {
        case "GET":
          const res = await axios.get(options.uri);
          setRes({ data: res.data, loading: false });
          break;
        case "POST":
          await axios.post(options.uri, options.data)
          break;
        default:
          return { data: [] };
      }
    };
    if (options.method === "GET" || options.method === "POST") fetch();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return { data: res.data, loading: res.loading };
};


export const useLazyFetch = <T>(options: FetchOptions): [() => Promise<void | RentleResponse>, {data: T | undefined, loading: boolean}] => {
  const [res, setRes] = React.useState<{data: T | undefined, loading: boolean}>({data: undefined, loading: true})

  return [async () => {
    let res;
    switch(options.method) {
      case "GET":
        console.log(options)
        res = await axios.get(options.uri)
        setRes({data: res.data, loading: false})
        break;
      case "DELETE":
        res = await axios.delete<RentleResponse>(options.uri, options.data)
        return {success: res.data.success, message: res.data.message}
    }
  }, {data: res.data, loading: res.loading}]



}

import React from "react";
import axios from "axios";

type FetchOptions = {
  uri: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

export default <T>(options: FetchOptions) => {
  const [res, setRes] = React.useState<{ data: T[]; loading: boolean }>({
    data: [],
    loading: true,
  });


  React.useEffect(() => {
    const fetch = async () => {
      switch (options.method) {
        case "GET":
          const res = await axios.get(options.uri);
          setRes({ data: res.data, loading: false });
          break;
        default:
          return { data: [] };
      }
    };
    fetch();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return { data: res.data, loading: res.loading };
};

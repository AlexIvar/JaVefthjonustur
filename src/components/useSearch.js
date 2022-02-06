/*
    Component sem kallar á vefþjónustu já.is. 
    Nær í fyritæki sem innhildur leitina "bók".
    PageNumber er notað fyrir continous loading.
*/
import { useEffect, useState } from "react";
import axios from "axios";

export const useSearch = (pageNumber) => {
  const JA_SEARCH_API_KEY = "eh92je1f5bzoyvjwkqccasyoj4gqg3bzjajeb0iq";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(false);

  useEffect(() => {
    console.log("calling api!");
    let cancel;
    let link = `https://api.ja.is/search/v6/?q=bíll&scope=businesses&start=${pageNumber}&count=10`;
    setLoading(false);
    setError(false);
    axios({
      method: "GET",
      url: link,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
      headers: {
        "Content-type": "Application/json",
        Authorization: `${JA_SEARCH_API_KEY}`,
      },
    })
      .then((res) => {
        setResults((prevResults) => {
          return [...prevResults, res.data.items];
        });
        setHasMorePages(res.data.items.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, results, hasMorePages };
};

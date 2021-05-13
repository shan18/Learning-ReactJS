import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    // We can return only a function from useEffect
    // This function is used to do some cleanup i.e. it will be
    // executed when useEffect is called next.
    // This will also run when component is unmounted.
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    /* useEffect does not allow the primary function to be async sot there
      three ways to get around that */

    // 1. Make a temporary function, store it and make that async
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();

    // 2. Call the function directly
    // (async () => {
    //   await axios.get('some url');
    // })();

    // 3. Use Promise
    // axios.get('some url')
    //   .then((response) => {
    //     console.log(response.data)
    //   })
  }, [debouncedTerm]);

  const renderedResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

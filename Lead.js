import React, { useState } from 'react';

const Lead = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const items = ['Maharashtra', 'Kerala', 'Punjab', 'Gujarat', 'Delhi'];

  const handleSearch = (event) => {
    const filter = event.target.value.toUpperCase();
    setSearchTerm(filter);
    const filtered = items.filter((item) =>
      item.toUpperCase().includes(filter)
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <center>
        <div>
          <h1>Welcome Lead</h1>
        </div>
        <button>
          <a href="/">Home</a>
        </button>
        <br />
        <br />
        <h3>You can upload content</h3>
        <button>
          <a href="/Upload">Upload Content</a>
        </button>

        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {filteredItems.length > 0
            ? filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            : items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </center>
    </div>
  );
};

export default Lead;

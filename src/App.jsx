import React, { useState, useEffect } from 'react';

// 1. Navbar Component
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Nama</div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#profile" className="hover:text-gray-400">Profile</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </div>
  );
};

// 2. Card Component
const Card = ({ title, body, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mt-2">{body}</p>
      </div>
    </div>
  );
};

// 3. Cards Container with Data
const CardsContainer = () => {
  const response = {
    page: 1,
    results: [
      {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500",
      },
      {
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
      },
      {
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500",
      },
      {
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
      },
      {
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        image: "https://picsum.photos/500",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {response.results.map((item, index) => (
        <Card key={index} title={item.title} body={item.body} image={item.image} />
      ))}
    </div>
  );
};

// 4. Counter Demo with useState and useEffect
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl mb-4">Counter Demo</h1>
      <div className="text-2xl mb-4">{count}</div>
      <div className="flex justify-center space-x-4">
        <button onClick={() => setCount(count - 1)} className="bg-blue-500 text-white p-2 rounded">-</button>
        <button onClick={() => setCount(0)} className="bg-gray-500 text-white p-2 rounded">Reset</button>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded">+</button>
      </div>
    </div>
  );
};

// 5. Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <CardsContainer />
    </div>
  );
};

export default App;

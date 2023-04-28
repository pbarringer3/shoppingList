function App() {
  const list = [
    { key: 0, name: "red" },
    { key: 1, name: "green" },
    { key: 2, name: "blue" },
  ];

  return (
    <div>
      <ul>
        {list.map((listItem) => (
          <ul
            draggable
            onDragStart={() => console.log(listItem.name)}
            onDragEnter={() => console.log(listItem.name + " enter")}
            onDragLeave={() => console.log(listItem.name + " exit")}
            key={listItem.key}
          >
            {listItem.name}
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default App;

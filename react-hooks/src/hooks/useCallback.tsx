import { useState, useCallback, useEffect } from "react";

export const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "25px"
  };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div style={theme}>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <ListItem getItems={getItems} />
    </div>
  );
};

interface ListItemProps {
    getItems: () => void
}

export const ListItem = ({ getItems }: ListItemProps) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("Updating items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

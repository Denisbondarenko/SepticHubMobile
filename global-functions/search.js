const search = list => {
  const newList = list.filter(item =>
    item.person.toLowerCase().includes(searchValue.toLowerCase())
  );
  setShow(newList.length === 0);
  return newList;
};

export default search;

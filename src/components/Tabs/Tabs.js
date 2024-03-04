import TabButton from 'components/TabButton/TabButton';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const getItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: ind }));

function List({list }) {
  const [items] = React.useState(getItems);
  React.useState(0);

  

  // const handleClick =
  //   (id) =>
  //   ({ getItemById, scrollToItem }) => {
  //     const itemSelected = isItemSelected(id);

  //     setSelected((currentSelected) =>
  //       itemSelected
  //         ? currentSelected.filter((el) => el !== id)
  //         : currentSelected.concat(id)
  //     );
  //   };

  return (
    <ScrollMenu align = "center" LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card 
          list = {list}
          itemId={id} // NOTE: itemId is required for track items
          // title={id}
          // key={id}
          // onClick={handleClick(id)}
          // selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}


function LeftArrow() {
  // const { isFirstItemVisible, scrollPrev } =
  //   React.useContext(VisibilityContext);

  return <text> q </text>
    // <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    //   Left
    // </Arrow>
  // );
}

function RightArrow() {
  // const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return <text> p </text>
    // <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
    //   Right
    // </Arrow>
  // );
}

function Card({ /*onClick, selected, title,*/  itemId, list }) {
  // const visibility = React.useContext(VisibilityContext);

  return (
    <div>
      <TabButton color={list[itemId].color} type={list[itemId].type}  text = {list[itemId].text} link = {list[itemId].link} />{"___"}
    </div>
    // <div
    //   onClick={() => onClick(visibility)}
    //   style={{
    //     width: '160px',
    //   }}
    //   tabIndex={0}
    // >
    //   <div className="card">
    //     <div>{title}</div>
    //     <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
    //     <div>selected: {JSON.stringify(!!selected)}</div>
    //   </div>
    //   <div
    //     style={{
    //       height: '200px',
    //     }}
    //   />
    // </div>
  );
}

export default List;
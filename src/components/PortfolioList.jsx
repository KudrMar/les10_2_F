const PortfolioList = ({items}) => {
    const handlerItems = (arrItems) => {
      return arrItems.map((item, i) => {
        return (
          <div className="item" key={`item-${i}`}>
            <img src={item.img} alt={`${item.category}`} />
          </div>
        );
      });
    }
    return (
      <div className="portfolioList">
          {handlerItems(items)}
      </div>
    );
  };
  
  export { PortfolioList }
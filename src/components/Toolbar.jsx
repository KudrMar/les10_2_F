const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;
    const handlerFilters = (filters) => {
      return filters.map((filter, i) => {
        const className = filter === selected ? "filter-selected" : "filter";
        return (
          <button
            className={className}
            onClick={() => onSelectFilter(filter)}
            key={`filter-${i}`} > {filter}
          </button>
        );
      });
    };
  
    return (
      <div className="toolbar">
        {handlerFilters(filters)}
      </div>
    );
  };
  
  export { Toolbar }
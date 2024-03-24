import { useEffect, useRef, useState } from "react";
import { Filters } from "@/services/core/Filters";
import { useFilters } from "../../store";

const Filter = ({ addFilter, name }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      onClick={() => addFilter(ref)}
      key={name}
      className="filter-only mx-3 flex justify-center rounded-sm border border-rose-500 p-1 hover:cursor-pointer hover:bg-rose-500"
    >
      <p className="text-sm text-rose-500 hover:text-white">{name}</p>
    </div>
  );
};

export default function Header() {
  const instance = useRef(new Filters());
  const setFilters = useFilters((state) => state.setFilters);
  const [state, setState] = useState(instance.current.selectedFilter);

  useEffect(() => {
    instance.current.subscribe(setState);
  }, []);

  useEffect(() => {
    setFilters(instance.current.paramsFilters);
  }, [state, setFilters]);

  return (
    <>
      <h1 className=" text-2xl font-medium">Linha do tempo de lançamentos</h1>

      <div className="my-4 flex items-center">
        <h4 className="text-sm">Filtrar exibição:</h4>

        {instance.current.filters.map((filter) => (
          <Filter addFilter={instance.current.addFilter} name={filter} />
        ))}
      </div>
    </>
  );
}

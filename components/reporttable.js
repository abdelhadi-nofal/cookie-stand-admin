import { TrashIcon } from "@heroicons/react/solid";

export default function ReportTable(props) {
  if (props.report.length === 0) {
    return (
      <h2 className="mx-auto my-8 text-xl font-semibold text-center">
        No Cookie Stands Available
      </h2>
    );
  } else {
    return (
      <table className="w-5/6 mx-auto mt-4 text-center border border-green-300 rounded-md">
        <thead className="bg-green-500">
          <th className="px-2">Location </th>
          {props.workingHours.map((item) => {
            return <th className="border border-green-300 ">{item} </th>;
          })}
          <th>Totals</th>
        </thead>

        <tbody>
          {props.report.map((store, idx) => {
            const element = (
              <>
                <td className="flex items-center justify-between px-6 border border-green-400">
                  <div> {store.location} </div>
                  <form onSubmit={props.deleteIcon}>
                    <input type="hidden" name="id" value={store.id} />
                    <button className="w-5 h-5">
                      <TrashIcon className="w-full ml-2 text-red-400 " />
                    </button>
                  </form>
                </td>
                {store.hourlySales.map((item) => {
                  return (
                    <td className="border border-collapse border-green-400">
                      {" "}
                      {item}{" "}
                    </td>
                  );
                })}
                <td className="border border-green-400">{store.total}</td>
              </>
            );

            if (idx % 2 == 0) {
              return <tr className="bg-green-200">{element}</tr>;
            } else {
              return <tr className="bg-green-300">{element}</tr>;
            }
          })}
        </tbody>

        <tfoot className="bg-green-500">
          <td className="px-2 font-semibold border border-green-400">Totals</td>
          {props.totals.map((item) => {
            return <td className="border border-green-400">{item}</td>;
          })}
        </tfoot>
      </table>
    );
  }
}

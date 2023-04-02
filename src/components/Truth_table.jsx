import React from "react";

function Truth_table({ outputs, inputs }) {
  if (outputs === undefined || inputs === undefined) {
    return <div></div>;
  }
  return (
    <div className=" border-box h-5/6 w-full px-4 py-5 col-span-2 text-2xl rounded">
      <table className="bg-white  w-full h-full table-auto rounded">
        <tr className="border border-separate  border-blue-600">
          <th className="border border-separate  border-blue-600">A</th>
          <th className="border border-separate  border-blue-600">B</th>
          <th className="border border-separate  border-blue-600">C</th>
          <th className="border border-separate  border-blue-600"> Outputs </th>
        </tr>
        {inputs.map((input, i) => {
          return (
            <tr className=" border" key={i}>
              {input.map((cell,index) => {
                return (
                  <td className="border border-separate font-bold border-blue-600" key={index}>
                    {cell}
                  </td>
                );
              })}

              <td className="border border-separate  border-blue-600 font-bold" key={i}>
                {String(outputs[i][0])}
              </td>
            </tr>
          );
        })}
        {}
      </table>
    </div>
  );
}

export default Truth_table;

import React from "react";

function Truth_table({ outputs, inputs }) {
  if (outputs === null || inputs === null) {
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
            <tr className=" border">
              {input.map((cell) => {
                return (
                  <td className="border border-separate font-bold border-blue-600 w-9">
                    {cell}
                  </td>
                );
              })}
              <td className="border border-separate  border-blue-600 font-bold">
                <input
                  contentEditable="true"
                  className="font-bold p-0 h-full w-full flex justify-center items-center"
                  onChange={(e) => {
                    if (
                      e.target.value.toLocaleLowerCase() ===
                      String(outputs[i][0])
                    ) {
                      e.target.style.backgroundColor = "green";
                    } else {
                      e.target.style.backgroundColor = "red";
                    }
                  }}></input>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Truth_table;

import { useMemo, useState } from "react"
import { useFinancialRecords } from "../../contexts/financial-record-context"
import { useTable,Column,Row,CellProps } from "react-table"
import "./financial-record.css"

const EditableCell = ({
  value: initialValue,
  row,
  column,
  updateRecord,
  editable
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    setIsEditing(false)
    updateRecord(row.index, column.id, value)
  }

  return (
    <div
      onClick={() => editable && setIsEditing(true)}
      style={{ cursor: editable ? "pointer" : "default" }}
    >
      {isEditing ? (
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          autoFocus
          onBlur={onBlur}
          style={{ width: "100%" }}
        />
      ) : typeof value === "string" ? (
        value
      ) : (
        value.toString()
      )}
    </div>
  )
}

const FinancialRecordList = () => {
  const { records, updateRecord, deleteRecord } = useFinancialRecords()

  const updateCellRecord = (rowIndex, columnId, value) => {
    const id = records[rowIndex]?._id
    updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value })
  }

  const columns = useMemo(
    () => [
      {
        Header: "Description",
        accessor: "description",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        )
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        )
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        )
      },
      {
        Header: "Payment Method",
        accessor: "paymentMethod",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        )
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={false}
          />
        )
      },
      {
        Header: "Delete",
        id: "delete",
        Cell: ({ row }) => (
          <button
            onClick={() => deleteRecord(row.original._id ?? "")}
            className="button"
          >
            Delete
          </button>
        )
      }
    ],
    [records]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data: records
  })
  return (
    <div className="table-container">
    <table {...getTableProps()} className="table">
      <thead key='head'>
        {headerGroups.map(hg => (
          <tr {...hg.getHeaderGroupProps()} key={hg.id}>
            {hg.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default FinancialRecordList
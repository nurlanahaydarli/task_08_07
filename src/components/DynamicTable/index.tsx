import DynamicRow from '../dynamicRow'
import {useEffect, useState} from "react";
import {getData} from '../../service/api/index'
import {countChildrenLengthZero} from '../../utils/calculateChildren.js'


export default function DynamicTable() {
    const [rows, setRows] = useState()
    const [columns, setColumn] = useState()

    useEffect(() => {
        (async () => {
            let data = await getData();
            let rows = data?.dataList?.filter((item)=> item.place === 'left')
            let column = data?.dataList?.filter((item)=> item.place ==='top')
            setRows(rows)
            setColumn(column)
        })()
    }, [])
    let row_count = rows ? countChildrenLengthZero(rows) : 0
    let column_count = rows ? countChildrenLengthZero(columns) : 0

    const renderTable = () => {
        let table = [];
        for (let i = 0; i < row_count; i++) {
            let children = [];
            for (let j = 0; j < column_count; j++) {
                children.push(<td className="border_dot" key={`col-${j}`}></td>);
            }
            table.push(<tr key={`row-${i}`}>{children}</tr>);
        }

        return table;
    }

    return (
        <>
            <div className="table_box ">
                <table className='d-none'>
                    <thead>
                    <tr>
                        <th className="w-400" rowSpan="4" colSpan='3'>text</th>
                        <th className="w-20 rotate-90" rowSpan="4">Setrin nomresi</th>
                        <th colSpan="4">column 1</th>
                        <th rowSpan="4">column 2</th>
                        <th colSpan="3">column 3</th>
                        <th>column 4</th>
                    </tr>
                    <tr>
                        <th colSpan="2">column 1-1</th>
                        <th colSpan="2">column 1-2</th>
                        <th rowSpan="3" className='rotate-90'>column 3-1</th>
                        <th rowSpan="3" className='rotate-90'>column 3-2</th>
                        <th rowSpan="3" className='rotate-90'>column 3-3</th>
                        <th rowSpan="3">column 4-1</th>
                    </tr>
                    <tr>
                        <th>column 1-1-1</th>
                        <th rowSpan="2">column 1-1-2</th>
                        <th rowSpan="2">column 1-2-1</th>
                        <th rowSpan="2">column 1-2-2</th>
                    </tr>
                    <tr>
                        <th>column 1-1-1-1</th>

                    </tr>
                    <tr>
                        <th colSpan="3">A</th>
                        <th>B</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>5-1</th>
                        <th>5-2</th>
                        <th>6</th>
                        <th>7</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan="2">row 1</td>
                        <td colSpan='2'>row 1-1</td>
                        <td>1</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}>row 1-2</td>
                        <td>2</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>

                    </tr>
                    <tr>
                        <td colSpan="3">row 2</td>
                        <td>3</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>

                    </tr>

                    <tr>
                        <td rowSpan="5">row 3</td>
                        <td rowSpan="3">row-3-1</td>
                        <td>row-3-1-1</td>
                        <td>3.1</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>

                    </tr>
                    <tr>
                        <td>row 3-1-2</td>
                        <td>3.1</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                    </tr>
                    <tr>
                        <td>row-3-1-3</td>
                        <td>3.3</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                    </tr>
                    <tr>
                        <td colSpan="2">row 3-2</td>
                        <td>4</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>

                    </tr>
                    <tr>
                        <td colSpan="2">row 3-3</td>
                        <td>5</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>

                    </tr>
                    <tr>
                        <td>
                            row 4
                        </td>
                        <td colSpan="2">row 4-1</td>
                        <td>6</td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>
                        <td className="border_dot"></td>

                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th className="w-20 rotate-90" rowSpan="4">Setrin nomresi</th>
                        <th>
                            <DynamicRow data={columns} isCol={true}  />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>A</td>
                        <td>B</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>
                            <DynamicRow data={rows} />
                        </td>
                        <td></td>
                        <td>
                            <table>
                                <tbody>
                                    {renderTable()}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

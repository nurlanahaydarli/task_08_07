import TableData from "../TableData";

const DynamicRow = ({ data,isCol }) => {
    let direction  = isCol ? 'direction_right':'direction_bottom';
    return (
        <div className={direction}>
            {data?.map(node => (
                <TableData key={node.id} node={node} />
            ))}
        </div>
    );
};
export default  DynamicRow
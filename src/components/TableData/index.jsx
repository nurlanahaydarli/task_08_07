import  styles from './style.module.css'
export default function TableData({node}){
    return(
        <>
            <div className={`parent_el ${styles[node.font_weight]} ${styles[node.orientation]} ${styles[node.text_align]}`}>
                <p className="element_name">
                    {node.name}
                </p>
                {node.children && node.children.length > 0 && (
                    <div className='child_el' key={node.id}>
                        {node?.children.map(child => (
                            <TableData key={child.id} node={child} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}